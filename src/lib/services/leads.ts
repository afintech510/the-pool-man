import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  Database,
  Lead,
  LeadChannel,
  LeadStatus,
  ServiceInterest,
} from "../supabase/types";
import { resolveContact, linkContactToLocation } from "./identity";

type Client = SupabaseClient<Database>;

export interface LeadCaptureInput {
  channel: LeadChannel;
  source?: string;
  medium?: string;
  campaign?: string;
  serviceInterest?: ServiceInterest;
  phone?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  trackingNumber?: string;
  utm?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export interface CapturedLead {
  lead: Lead;
  contactId: string | null;
  locationId: string | null;
}

export async function captureLead(
  client: Client,
  input: LeadCaptureInput,
): Promise<CapturedLead> {
  let contactId: string | null = null;
  let locationId: string | null = null;

  if (input.phone || input.email) {
    contactId = await resolveContact(client, {
      phone: input.phone,
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
    });
  }

  if (input.addressLine1) {
    const { data, error } = await client.rpc("resolve_location", {
      p_line1: input.addressLine1,
      p_city: input.city ?? undefined,
      p_state: input.state ?? "NY",
      p_postal: input.postalCode ?? undefined,
    });
    if (error) throw error;
    locationId = data;
  }

  if (contactId && locationId) {
    await linkContactToLocation(client, {
      contactId,
      locationId,
    });
  }

  const { data: lead, error: leadErr } = await client
    .from("leads")
    .insert({
      service_location_id: locationId,
      contact_id: contactId,
      channel: input.channel,
      source: input.source ?? null,
      medium: input.medium ?? null,
      campaign: input.campaign ?? null,
      service_interest: input.serviceInterest ?? null,
      status: "new" as LeadStatus,
      metadata: (input.metadata ?? {}) as Record<string, string>,
    })
    .select()
    .single();
  if (leadErr) throw leadErr;

  if (input.source || input.trackingNumber || input.utm) {
    await client.from("attribution_touches").insert({
      lead_id: lead.id,
      contact_id: contactId,
      source: input.source ?? null,
      medium: input.medium ?? null,
      campaign: input.campaign ?? null,
      tracking_number: input.trackingNumber ?? null,
      utm: input.utm ?? null,
    });
  }

  return { lead, contactId, locationId };
}

export async function updateLeadStatus(
  client: Client,
  leadId: string,
  status: LeadStatus,
): Promise<void> {
  const { error } = await client
    .from("leads")
    .update({ status })
    .eq("id", leadId);
  if (error) throw error;
}

export async function getLeadsByLocation(
  client: Client,
  locationId: string,
): Promise<Lead[]> {
  const { data, error } = await client
    .from("leads")
    .select("*")
    .eq("service_location_id", locationId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function getLeadsByStatus(
  client: Client,
  status: LeadStatus,
): Promise<Lead[]> {
  const { data, error } = await client
    .from("leads")
    .select("*")
    .eq("status", status)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
