-- F-010: Supabase property-centric data spine
-- Source: thepoolman-spec-v1.md §2.2 (SOW v2.1 LOCKED)
-- Service Location is the primary entity; all channels resolve here.

-- ============ Extensions ============
create extension if not exists pgcrypto;
create extension if not exists citext;

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

-- ============ Shared trigger function ============
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

-- ============ Staff profiles (RLS principal) ============
create table profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  full_name  text,
  role       staff_role not null default 'admin',
  created_at timestamptz not null default now()
);

create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid());
$$;

-- ============ PRIMARY ENTITY: service_locations ============
create table service_locations (
  id                 uuid primary key default gen_random_uuid(),
  address_line1      text,
  address_line2      text,
  city               text,
  state              text default 'NY',
  postal_code        text,
  normalized_address text unique,
  latitude           double precision,
  longitude          double precision,
  in_service_area    boolean not null default false,
  gate_code          text,
  access_notes       text,
  status             location_status not null default 'prospect',
  skimmer_account_id text unique,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index sl_postal_idx  on service_locations (postal_code);
create index sl_status_idx  on service_locations (status);
create index sl_area_idx    on service_locations (in_service_area);

-- ============ contacts ============
create table contacts (
  id         uuid primary key default gen_random_uuid(),
  first_name text,
  last_name  text,
  phone_e164 text,
  email      citext,
  notes      text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index contacts_phone_uq on contacts (phone_e164) where phone_e164 is not null;
create unique index contacts_email_uq on contacts (email)      where email is not null;

-- ============ contact_locations (M:N junction) ============
create table contact_locations (
  contact_id          uuid not null references contacts(id) on delete cascade,
  service_location_id uuid not null references service_locations(id) on delete cascade,
  role                contact_role not null default 'homeowner',
  is_primary          boolean not null default false,
  created_at          timestamptz not null default now(),
  primary key (contact_id, service_location_id)
);
create index cl_location_idx on contact_locations (service_location_id);

-- ============ bodies_of_water ============
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

-- ============ consents ============
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

create view marketable_contacts as
  select c.contact_id, c.channel
  from consents c
  where c.state = 'opted_in';

-- ============ leads ============
create table leads (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  channel             lead_channel not null,
  source              text,
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

-- ============ attribution_touches (multi-touch, best-effort) ============
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

-- ============ bookings (Cal.com) ============
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

-- ============ jobs (Skimmer mirror) ============
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

-- ============ water_tests (LaMotte) ============
create table water_tests (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  body_of_water_id    uuid references bodies_of_water(id) on delete set null,
  source              text,
  device              text default 'lamotte',
  readings            jsonb not null default '{}',
  lsi                 numeric(4,2),
  recommendation      jsonb not null default '{}',
  tested_at           timestamptz not null default now()
);
create index wt_location_idx on water_tests (service_location_id);

-- ============ orders (Shopify POS + online) ============
create table orders (
  id                  uuid primary key default gen_random_uuid(),
  service_location_id uuid references service_locations(id) on delete set null,
  contact_id          uuid references contacts(id) on delete set null,
  shopify_order_id    text unique,
  channel             order_channel not null,
  water_test_id       uuid references water_tests(id) on delete set null,
  subtotal            numeric(10,2),
  tax                 numeric(10,2),
  fees                numeric(10,2),
  total               numeric(10,2),
  currency            text default 'USD',
  placed_at           timestamptz not null default now(),
  exported_to_qb      boolean not null default false,
  qb_export_batch_id  uuid,
  created_at          timestamptz not null default now()
);
create index orders_placed_idx   on orders (placed_at);
create index orders_export_idx   on orders (exported_to_qb);
create index orders_channel_idx  on orders (channel);

-- ============ accounting_exports (QB Desktop batches) ============
create table accounting_exports (
  id           uuid primary key default gen_random_uuid(),
  period_start date not null,
  period_end   date not null,
  format       text not null default 'iif',
  totals       jsonb not null default '{}',
  file_path    text,
  generated_at timestamptz not null default now()
);

-- ============ interactions (calls / messages / chat) ============
create table interactions (
  id                  uuid primary key default gen_random_uuid(),
  contact_id          uuid references contacts(id) on delete set null,
  service_location_id uuid references service_locations(id) on delete set null,
  lead_id             uuid references leads(id) on delete set null,
  type                interaction_type not null,
  direction           interaction_dir not null,
  channel_source      text,
  tracking_number     text,
  external_id         text,
  summary             text,
  transcript          text,
  recording_url       text,
  occurred_at         timestamptz not null default now(),
  metadata            jsonb not null default '{}'
);
create index inter_contact_idx on interactions (contact_id);
create index inter_when_idx    on interactions (occurred_at);
create unique index inter_external_uq
  on interactions (channel_source, external_id) where external_id is not null;

-- ============ referrals ============
create table referrals (
  id                 uuid primary key default gen_random_uuid(),
  referrer_contact_id uuid references contacts(id) on delete set null,
  code               text unique not null,
  referred_lead_id   uuid references leads(id) on delete set null,
  status             text not null default 'issued',
  created_at         timestamptz not null default now()
);

-- ============ campaigns ============
create table campaigns (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  channel      consent_channel,
  provider     text default 'brevo',
  external_id  text,
  scheduled_at timestamptz,
  created_at   timestamptz not null default now()
);

-- ============ Identity resolution functions ============

create or replace function normalize_address_text(
  p_line1 text, p_city text, p_state text, p_postal text
) returns text
language sql immutable as $$
  select nullif(trim(lower(
    regexp_replace(
      concat_ws(' ',
        nullif(trim(p_line1), ''),
        nullif(trim(p_city), ''),
        nullif(trim(p_state), ''),
        nullif(trim(p_postal), '')
      ),
      '[^a-z0-9 ]', '', 'g'
    )
  )), '');
$$;

create or replace function set_normalized_address() returns trigger
language plpgsql as $$
begin
  if new.address_line1 is not null then
    new.normalized_address = normalize_address_text(
      new.address_line1, new.city, new.state, new.postal_code
    );
  end if;
  return new;
end;
$$;

create trigger sl_normalize_address
  before insert or update of address_line1, city, state, postal_code
  on service_locations
  for each row execute function set_normalized_address();

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

create or replace function resolve_location(
  p_line1 text,
  p_city text default null,
  p_state text default 'NY',
  p_postal text default null
) returns uuid
language plpgsql as $$
declare
  v_id uuid;
  v_norm text;
begin
  v_norm := normalize_address_text(p_line1, p_city, p_state, p_postal);
  if v_norm is null then
    return null;
  end if;
  select id into v_id from service_locations
   where normalized_address = v_norm;
  if v_id is null then
    insert into service_locations (address_line1, city, state, postal_code)
    values (p_line1, p_city, p_state, p_postal)
    returning id into v_id;
  end if;
  return v_id;
end;
$$;

create or replace function link_contact_to_location(
  p_contact_id uuid,
  p_location_id uuid,
  p_role contact_role default 'homeowner',
  p_is_primary boolean default false
) returns void
language plpgsql as $$
begin
  insert into contact_locations (contact_id, service_location_id, role, is_primary)
  values (p_contact_id, p_location_id, p_role, p_is_primary)
  on conflict (contact_id, service_location_id) do nothing;
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
