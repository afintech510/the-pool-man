import type { SupabaseClient } from "@supabase/supabase-js";
import type { ConsentChannel, ConsentState, Database } from "../supabase/types";

type Client = SupabaseClient<Database>;

export async function getConsentState(
  client: Client,
  contactId: string,
  channel: ConsentChannel,
): Promise<ConsentState> {
  const { data, error } = await client
    .from("consents")
    .select("state")
    .eq("contact_id", contactId)
    .eq("channel", channel)
    .single();

  if (error?.code === "PGRST116") return "unknown";
  if (error) throw error;
  return data.state;
}

export async function optIn(
  client: Client,
  contactId: string,
  channel: ConsentChannel,
  source: string,
): Promise<void> {
  const current = await getConsentState(client, contactId, channel);
  if (current === "opted_out") {
    throw new Error(
      `Contact ${contactId} is permanently opted out of ${channel}`,
    );
  }

  const { error } = await client.from("consents").upsert(
    {
      contact_id: contactId,
      channel,
      state: "opted_in" as ConsentState,
      source,
      opted_in_at: new Date().toISOString(),
    },
    { onConflict: "contact_id,channel" },
  );
  if (error) throw error;
}

export async function optOut(
  client: Client,
  contactId: string,
  channel: ConsentChannel,
): Promise<void> {
  const { error } = await client.from("consents").upsert(
    {
      contact_id: contactId,
      channel,
      state: "opted_out" as ConsentState,
      opted_out_at: new Date().toISOString(),
    },
    { onConflict: "contact_id,channel" },
  );
  if (error) throw error;
}

export async function setPending(
  client: Client,
  contactId: string,
  channel: ConsentChannel,
  source: string,
): Promise<void> {
  const current = await getConsentState(client, contactId, channel);
  if (current === "opted_out" || current === "opted_in") return;

  const { error } = await client.from("consents").upsert(
    {
      contact_id: contactId,
      channel,
      state: "pending" as ConsentState,
      source,
    },
    { onConflict: "contact_id,channel" },
  );
  if (error) throw error;
}

export async function isMarketable(
  client: Client,
  contactId: string,
  channel: ConsentChannel,
): Promise<boolean> {
  const state = await getConsentState(client, contactId, channel);
  return state === "opted_in";
}

export async function getMarketableContacts(
  client: Client,
  channel: ConsentChannel,
): Promise<string[]> {
  const { data, error } = await client
    .from("marketable_contacts")
    .select("contact_id")
    .eq("channel", channel);
  if (error) throw error;
  return (data ?? []).map((r) => r.contact_id).filter((id): id is string => id !== null);
}
