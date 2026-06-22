-- F-010 smoke test: a lead resolves to a Service Location with a source.
-- Run via `supabase db reset` (applies migration then this seed).

-- 1. Resolve a location by address (creates if not exists)
select resolve_location(
  '123 Main St', 'Center Moriches', 'NY', '11934'
) as location_id;

-- 2. Resolve a contact by phone (creates if not exists)
select resolve_contact(
  '+16315551234', null, 'Kevin', 'Test'
) as contact_id;

-- 3. Link the contact to the location
do $$
declare
  v_loc uuid;
  v_con uuid;
begin
  v_loc := resolve_location('123 Main St', 'Center Moriches', 'NY', '11934');
  v_con := resolve_contact('+16315551234', null);

  perform link_contact_to_location(v_con, v_loc, 'homeowner', true);

  -- 4. Create a lead that resolves to the Service Location
  insert into leads (service_location_id, contact_id, channel, source, service_interest, status)
  values (v_loc, v_con, 'web', 'google_ads', 'weekly_service', 'new');

  -- 5. Create a body of water at the location
  insert into bodies_of_water (service_location_id, type, gallons, surface, sanitizer)
  values (v_loc, 'pool', 20000, 'vinyl', 'chlorine');

  -- 6. Consent record (opted in for email)
  insert into consents (contact_id, channel, state, source, opted_in_at)
  values (v_con, 'email', 'opted_in', 'import_repermission', now());

  -- 7. Verify the location was deduped (calling resolve_location again returns the same id)
  if v_loc != resolve_location('123 Main St', 'Center Moriches', 'NY', '11934') then
    raise exception 'Address dedup failed!';
  end if;

  raise notice 'F-010 smoke test passed: lead created at location %, contact %', v_loc, v_con;
end $$;

-- Verify: the lead has a source and resolves to a Service Location
do $$
declare v_count int;
begin
  select count(*) into v_count
  from leads l
  join service_locations sl on sl.id = l.service_location_id
  where l.source is not null
    and sl.normalized_address is not null;

  if v_count = 0 then
    raise exception 'F-010 acceptance check failed: no lead resolves to a Service Location with a source';
  end if;

  raise notice 'F-010 acceptance: % lead(s) resolve to a Service Location with a source', v_count;
end $$;
