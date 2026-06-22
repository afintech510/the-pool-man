import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyHmacSignature } from "@/lib/webhooks/verify";
import { captureLead } from "@/lib/services/leads";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("x-quo-signature") ?? "";
  const secret = process.env.QUO_WEBHOOK_SECRET;

  if (secret && !verifyHmacSignature(body, signature, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = JSON.parse(body);
  const supabase = createAdminClient();
  const event = payload.event ?? payload.type;

  if (event === "call.completed" || event === "call.ended") {
    const call = payload.data ?? payload.call;
    const externalId = String(call.id ?? call.call_id);

    const callerPhone = call.caller_number ?? call.from;
    let contactId: string | null = null;
    let locationId: string | null = null;

    if (callerPhone) {
      const captured = await captureLead(supabase, {
        channel: "call",
        source: call.tracking_number ? "lsa" : "quo",
        phone: callerPhone,
        trackingNumber: call.tracking_number ?? undefined,
      });
      contactId = captured.contactId;
      locationId = captured.locationId;
    }

    await supabase.from("interactions").upsert(
      {
        contact_id: contactId,
        service_location_id: locationId,
        type: "call",
        direction: call.direction === "outbound" ? "outbound" : "inbound",
        channel_source: "quo",
        tracking_number: call.tracking_number ?? null,
        external_id: externalId,
        summary: call.summary ?? call.sona_summary ?? null,
        transcript: call.transcript ?? null,
        recording_url: call.recording_url ?? null,
        occurred_at: call.started_at ?? call.created_at ?? new Date().toISOString(),
        metadata: {
          duration_seconds: call.duration ?? null,
          sona_handled: call.sona_handled ?? false,
          disposition: call.disposition ?? null,
        },
      },
      { onConflict: "channel_source,external_id" },
    );
  }

  return NextResponse.json({ ok: true });
}
