import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  ContactRole,
  Database,
  Contact,
  ServiceLocation,
} from "../supabase/types";

type Client = SupabaseClient<Database>;

export async function resolveContact(
  client: Client,
  params: {
    phone?: string | null;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  },
): Promise<string> {
  const { data, error } = await client.rpc("resolve_contact", {
    p_phone: params.phone ?? "",
    p_email: params.email ?? "",
    p_first: params.firstName ?? undefined,
    p_last: params.lastName ?? undefined,
  });
  if (error) throw error;
  return data;
}

export async function resolveLocation(
  client: Client,
  params: {
    addressLine1: string;
    city?: string | null;
    state?: string | null;
    postalCode?: string | null;
  },
): Promise<string | null> {
  const { data, error } = await client.rpc("resolve_location", {
    p_line1: params.addressLine1,
    p_city: params.city ?? undefined,
    p_state: params.state ?? "NY",
    p_postal: params.postalCode ?? undefined,
  });
  if (error) throw error;
  return data;
}

export async function linkContactToLocation(
  client: Client,
  params: {
    contactId: string;
    locationId: string;
    role?: ContactRole;
    isPrimary?: boolean;
  },
): Promise<void> {
  const { error } = await client.rpc("link_contact_to_location", {
    p_contact_id: params.contactId,
    p_location_id: params.locationId,
    p_role: params.role ?? "homeowner",
    p_is_primary: params.isPrimary ?? false,
  });
  if (error) throw error;
}

export async function getContactWithLocations(
  client: Client,
  contactId: string,
): Promise<
  (Contact & { locations: (ServiceLocation & { role: ContactRole })[] }) | null
> {
  const { data: contact, error: cErr } = await client
    .from("contacts")
    .select("*")
    .eq("id", contactId)
    .single();
  if (cErr || !contact) return null;

  const { data: links, error: lErr } = await client
    .from("contact_locations")
    .select("service_location_id, role")
    .eq("contact_id", contactId);
  if (lErr) throw lErr;

  if (!links || links.length === 0) {
    return { ...contact, locations: [] };
  }

  const locationIds = links.map((l) => l.service_location_id);
  const { data: locations, error: sErr } = await client
    .from("service_locations")
    .select("*")
    .in("id", locationIds);
  if (sErr) throw sErr;

  const roleMap = new Map(links.map((l) => [l.service_location_id, l.role]));
  const locationsWithRole = (locations ?? []).map((loc) => ({
    ...loc,
    role: roleMap.get(loc.id) ?? ("other" as ContactRole),
  }));

  return { ...contact, locations: locationsWithRole };
}

export async function getLocationWithContacts(
  client: Client,
  locationId: string,
): Promise<
  | (ServiceLocation & { contacts: (Contact & { role: ContactRole })[] })
  | null
> {
  const { data: location, error: lErr } = await client
    .from("service_locations")
    .select("*")
    .eq("id", locationId)
    .single();
  if (lErr || !location) return null;

  const { data: links, error: clErr } = await client
    .from("contact_locations")
    .select("contact_id, role")
    .eq("service_location_id", locationId);
  if (clErr) throw clErr;

  if (!links || links.length === 0) {
    return { ...location, contacts: [] };
  }

  const contactIds = links.map((l) => l.contact_id);
  const { data: contacts, error: cErr } = await client
    .from("contacts")
    .select("*")
    .in("id", contactIds);
  if (cErr) throw cErr;

  const roleMap = new Map(links.map((l) => [l.contact_id, l.role]));
  const contactsWithRole = (contacts ?? []).map((c) => ({
    ...c,
    role: roleMap.get(c.id) ?? ("other" as ContactRole),
  }));

  return { ...location, contacts: contactsWithRole };
}
