# Master Architecture Specification: The Pool Man — Digital Growth Platform

**Spec Version:** v1 (Section 1 of 10)
**Source:** SOW v2.1 (LOCKED)
**Date:** June 14, 2026
**Prepared by:** BenchworksAI

---

## 1. System Architecture (brief)

Demand (Google Ads, LSA, SEO/GBP, referrals, offline) flows into three incoming channels — calls, web, walk-ins — handled by Quo/Sona, the Next.js site + AI assistant, and the Shopify counter + LaMotte. All of them read/write the **Supabase data spine**, which is the customer-data and attribution hub. Brevo (messaging), Shopify (commerce), Skimmer (field ops, via Zapier), Cal.com (booking), and the QuickBooks-Desktop accounting export sit around the spine. The spine is modeled around the **property and its pool** — the Service Location is the primary entity; people and activity hang off it.

This section specifies the database. Subsequent sections (API design, integrations, components, security, testing, traceability) follow.

## 2. Database Schema (Supabase / PostgreSQL)

### 2.1 Entity model

- **service_locations** — the primary entity (the property/pool address). Everything resolves here. Carries the service-area gate and the Skimmer account mapping.
- **contacts** ↔ **service_locations** — many-to-many via `contact_locations` (a homeowner, a spouse, a property manager who owns several pools). Solves household fragmentation: husband's phone, wife's email, and the cash walk-in all roll up to the same property.
- **bodies_of_water** — one or more per location (pool, spa); what water chemistry and service attach to.
- **consents** — per contact, per channel; the consent state machine that gates all Brevo sends.
- **leads / attribution_touches** — best-effort source capture, resolved to a Service Location when known.
- **bookings** (Cal.com), **jobs** (Skimmer-synced), **water_tests** (LaMotte), **orders** (Shopify POS + online), **interactions** (Quo/Sona/CallRail/chat), **referrals**, **campaigns**.
- **accounting_exports** — F-017 batches; `orders.exported_to_qb` tracks what's been pushed.

### 2.2 DDL

```sql
-- ============ Extensions ============
create extension if not exists pgcrypto;   -- gen_random_uuid()
create extension if not exists citext;     -- case-insensitive email

-- ============ Enums ============
create type location_status      as enum ('prospect','active','inactive','churned');
create type contact_role         as enum ('homeowner','spouse','tenant','property_manager','other');
create type water_body_type      as enum ('pool','spa','hot_tub','water_feature');
create type pool_surface         as enum ('vinyl','gunite','fiberglass','other');
create type sanitizer_type       as enum ('chlorine','salt','bromine','other');
create type consent_channel      as enum ('email','sms');
create type consent_state        as enum ('unknown','pending','opted_in','opted_out');
create type lead_channel         as enum ('call','web','walk_in','sms','chat','referral','other');
create type lead_status          as enum ('new','contacted','booked','won','lost');
create type service_interest     as enum ('weekly_service','opening_closing','liner','heater','repair','construction','retail','other');
create type booking_type         as enum ('consult','service');
create type booking_status       as enum ('scheduled','confirmed','completed','canceled','no_show');
create type job_status           as enum ('scheduled','in_progress','completed','invoiced','canceled');
create type order_channel        as enum ('pos','online');
create type interaction_type     as enum ('call','sms','email','chat');
create type interaction_dir      as enum ('inbound','outbound');
create type staff_role           as enum ('owner','admin','tech','partner');

-- ============ Shared trigger ============
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

-- ============ Staff profiles (RLS principal) ============
create table profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  full_name  text,
  role       staff_role not null default 'admin',  -- Kevin=owner, Toni/BW=admin, Carlos=tech
  created_at timestamptz not null default now()
);

create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid());
$$;

-- ============ PRIMARY ENTITY: service_locations [F-010] ============
create table service_locations (
  id                 uuid primary key default gen_random_uuid(),
  address_line1      text,
  address_line2      text,
  city               text,
  state              text default 'NY',
  postal_code        text,
  normalized_address text unique,                 -- identity resolution / dedup
  latitude           double precision,
  longitude          double precision,
  in_service_area    boolean not null default false,  -- zip/radius gating [F-006]
  gate_code          text,
  access_notes       text,
  status             location_status not null default 'prospect',
  skimmer_account_id text unique,                 -- Skimmer <-> Location [F-019]
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index sl_postal_idx  on service_locations (postal_code);
create index sl_status_idx  on service_locations (status);
create index sl_area_idx    on service_locations (in_service_area);

-- ============ contacts [F-010, F-013] ============
create table contacts (
  id         uuid primary key default gen_random_uuid(),
  first_name text,
  last_name  text,
  phone_e164 text,        -- normalized at ingest [F-013]
  email      citext,
  notes      text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index contacts_phone_uq on contacts (phone_e164) where phone_e164 is not null;
create unique index contacts_email_uq on contacts (email)      where email is not null;

-- ============ contact_locations (M:N junction) [F-010] ============
create table contact_locations (
  contact_id          uuid not null references contacts(id) on delete cascade,
  service_location_id uuid not null references service_locations(id) on delete cascade,
  role                contact_role not null default 'homeowner',
  is_primary          boolean not null default false,
  created_at          timestamptz not null default now(),
  primary key (contact_id, service_location_id)
);
create index cl_location_idx on contact_locations (service_location_id);

-- ============ bodies_of_water [F-010, F-018] ============
create table bodies_of_water (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid not null references service_locations(id) on delete cascade,
  type                water_body_type not null default 'pool',
  gallons             integer,
  surface             pool_surface,
  sanitizer           sanitizer_type,
  equipment           jsonb not null default '{}',
  notes               text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index bow_location_idx on bodies_of_water (service_location_id);

-- ============ consents [F-012, F-013, SOW 3.3] ============
create table consents (
  id           uuid primary key default gen_random_uuid(),
  contact_id   uuid not null references contacts(id) on delete cascade,
  channel      consent_channel not null,
  state        consent_state not null default 'unknown',
  source       text,
  opted_in_at  timestamptz,
  opted_out_at timestamptz,
  updated_at   timestamptz not null default now(),
  unique (contact_id, channel)
);

-- consent enforcement helper: only opted-in contacts are marketable
create view marketable_contacts as
  select c.contact_id, c.channel
  from consents c
  where c.state = 'opted_in';

-- ============ leads [F-007, F-023] ============
create table leads (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  channel             lead_channel not null,
  source              text,            -- best-effort attribution
  medium              text,
  campaign            text,
  service_interest    service_interest,
  status              lead_status not null default 'new',
  first_touch_at      timestamptz not null default now(),
  metadata            jsonb not null default '{}',
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index leads_status_idx   on leads (status);
create index leads_source_idx   on leads (source);
create index leads_location_idx on leads (service_location_id);
create index leads_created_idx  on leads (created_at);

-- ============ attribution_touches (multi-touch, best-effort) [F-023] ============
create table attribution_touches (
  id              uuid primary key default gen_random_uuid(),
  lead_id         uuid references leads(id) on delete cascade,
  contact_id      uuid references contacts(id) on delete set null,
  source          text,
  medium          text,
  campaign        text,
  tracking_number text,
  utm             jsonb,
  occurred_at     timestamptz not null default now()
);
create index at_lead_idx on attribution_touches (lead_id);

-- ============ bookings (Cal.com) [F-006] ============
create table bookings (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  body_of_water_id    uuid references bodies_of_water(id) on delete set null,
  type                booking_type not null default 'consult',
  status              booking_status not null default 'scheduled',
  scheduled_at        timestamptz not null,
  calcom_booking_id   text unique,
  source              text,
  notes               text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index bookings_when_idx   on bookings (scheduled_at);
create index bookings_status_idx on bookings (status);

-- ============ jobs (Skimmer system-of-record mirror) [F-019] ============
create table jobs (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  body_of_water_id    uuid references bodies_of_water(id) on delete set null,
  skimmer_job_id      text unique,
  type                service_interest,
  status              job_status not null default 'scheduled',
  scheduled_at        timestamptz,
  completed_at        timestamptz,
  amount              numeric(10,2),
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index jobs_location_idx on jobs (service_location_id);
create index jobs_status_idx   on jobs (status);

-- ============ water_tests (LaMotte) [F-018] ============
create table water_tests (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  body_of_water_id    uuid references bodies_of_water(id) on delete set null,
  source              text,                 -- 'counter' | 'field'
  device              text default 'lamotte',
  readings            jsonb not null default '{}',  -- fc, ph, ta, cya, ch...
  lsi                 numeric(4,2),
  recommendation      jsonb not null default '{}',
  tested_at           timestamptz not null default now()
);
create index wt_location_idx on water_tests (service_location_id);

-- ============ orders (Shopify POS + online) [F-016, F-017, F-018] ============
create table orders (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  shopify_order_id    text unique,
  channel             order_channel not null,
  water_test_id       uuid references water_tests(id) on delete set null,  -- test->sale loop
  subtotal            numeric(10,2),
  tax                 numeric(10,2),
  fees                numeric(10,2),
  total               numeric(10,2),
  currency            text default 'USD',
  placed_at           timestamptz not null default now(),
  exported_to_qb      boolean not null default false,   -- accounting export [F-017]
  qb_export_batch_id  uuid,
  created_at          timestamptz not null default now()
);
create index orders_placed_idx   on orders (placed_at);
create index orders_export_idx   on orders (exported_to_qb);
create index orders_channel_idx  on orders (channel);

-- ============ accounting_exports (QB Desktop batches) [F-017] ============
create table accounting_exports (
  id           uuid primary key default gen_random_uuid(),
  period_start date not null,
  period_end   date not null,
  format       text not null default 'iif',   -- 'iif' | 'csv'
  totals       jsonb not null default '{}',    -- human-readable verification totals
  file_path    text,
  generated_at timestamptz not null default now()
);

-- ============ interactions (calls / messages / chat) [F-009, F-023] ============
create table interactions (
  id                  uuid primary key default gen_random_uuid(),
  contact_id          uuid references contacts(id) on delete set null,
  service_location_id uuid references service_locations(id) on delete set null,
  lead_id             uuid references leads(id) on delete set null,
  type                interaction_type not null,
  direction           interaction_dir not null,
  channel_source      text,            -- 'quo','sona','callrail','brevo','website_chat'
  tracking_number     text,            -- source attribution [F-023]
  external_id         text,            -- provider id (idempotency)
  summary             text,            -- Sona / RingSense summary
  transcript          text,
  recording_url       text,
  occurred_at         timestamptz not null default now(),
  metadata            jsonb not null default '{}'
);
create index inter_contact_idx on interactions (contact_id);
create index inter_when_idx    on interactions (occurred_at);
create unique index inter_external_uq
  on interactions (channel_source, external_id) where external_id is not null;

-- ============ referrals [F-022] ============
create table referrals (
  id                 uuid primary key default gen_random_uuid(),
  referrer_contact_id uuid references contacts(id) on delete set null,
  code               text unique not null,
  referred_lead_id   uuid references leads(id) on delete set null,
  status             text not null default 'issued',
  created_at         timestamptz not null default now()
);

-- ============ campaigns [F-014] ============
create table campaigns (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  channel      consent_channel,
  provider     text default 'brevo',
  external_id  text,
  scheduled_at timestamptz,
  created_at   timestamptz not null default now()
);

-- ============ Identity resolution [F-010, F-023] ============
-- Find a contact by normalized phone or email; create if none. Webhooks call this
-- first, then link the contact to a Service Location once an address is known.
create or replace function resolve_contact(
  p_phone text, p_email text, p_first text default null, p_last text default null
) returns uuid
language plpgsql as $$
declare v_id uuid;
begin
  select id into v_id from contacts
   where (p_phone is not null and phone_e164 = p_phone)
      or (p_email is not null and email = p_email)
   limit 1;
  if v_id is null then
    insert into contacts (first_name, last_name, phone_e164, email)
    values (p_first, p_last, p_phone, p_email)
    returning id into v_id;
  end if;
  return v_id;
end;
$$;

-- ============ updated_at triggers ============
do $$
declare t text;
begin
  foreach t in array array[
    'service_locations','contacts','bodies_of_water','consents','leads','bookings','jobs'
  ] loop
    execute format(
      'create trigger %I_set_updated before update on %I
       for each row execute function set_updated_at()', t, t);
  end loop;
end $$;

-- ============ Row-Level Security ============
-- Staff (any profile) get full access; integrations use the service role (bypasses RLS).
alter table profiles enable row level security;
create policy profiles_self  on profiles for select to authenticated
  using (id = auth.uid() or is_staff());
create policy profiles_admin on profiles for all to authenticated
  using (is_staff()) with check (is_staff());

do $$
declare t text;
begin
  foreach t in array array[
    'service_locations','contacts','contact_locations','bodies_of_water','consents',
    'leads','attribution_touches','bookings','jobs','water_tests','orders',
    'accounting_exports','interactions','referrals','campaigns'
  ] loop
    execute format('alter table %I enable row level security', t);
    execute format(
      'create policy staff_all on %I for all to authenticated
       using (is_staff()) with check (is_staff())', t);
  end loop;
end $$;
```

### 2.3 Identity resolution & consent — operating notes

- **Resolution order:** webhook → normalize phone to E.164 → `resolve_contact()` → link to a Service Location (`contact_locations`) once an address is known; unknown inbound creates a provisional contact + lead and reconciles later. A cash walk-in with no identity is allowed as an `orders` row with null contact/location (best-effort, per F-007/F-023).
- **Household integrity:** because contacts attach to the property through `contact_locations`, multiple people on one pool never fragment the account.
- **Consent gate:** every Brevo send joins `marketable_contacts` for the channel; `opted_out` is permanently suppressed. Transactional messages follow applicable rules separately.
- **Idempotency:** provider webhooks upsert on the unique external keys (`shopify_order_id`, `calcom_booking_id`, `skimmer_*_id`, `interactions(channel_source, external_id)`) so retries don't duplicate.

### 2.4 Feature → table mapping

| Tables | SOW Features |
|--------|--------------|
| service_locations, contacts, contact_locations, bodies_of_water | F-010 |
| consents, marketable_contacts | F-012, F-013, SOW §3.3 |
| leads, attribution_touches | F-007, F-023 |
| bookings | F-006 |
| jobs | F-019 |
| water_tests | F-018 |
| orders, accounting_exports | F-016, F-017, F-018 |
| interactions | F-009, F-023 |
| referrals | F-022 |
| campaigns | F-014 |

*Next sections: API design & integrations (Skimmer/Zapier, Quo/Sona, Shopify + QB export), then components, security, testing, and the traceability matrix.*
