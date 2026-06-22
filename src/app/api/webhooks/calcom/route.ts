import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyHmacSignature } from "@/lib/webhooks/verify";
import { captureLead } from "@/lib/services/leads";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("x-cal-signature-256") ?? "";
  const secret = process.env.CALCOM_WEBHOOK_SECRET;

  if (secret && !verifyHmacSignature(body, signature, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = JSON.parse(body);
  const supabase = createAdminClient();
  const triggerEvent = payload.triggerEvent;

  if (
    triggerEvent === "BOOKING_CREATED" ||
    triggerEvent === "BOOKING_RESCHEDULED"
  ) {
    const booking = payload.payload;
    const attendee = booking.attendees?.[0];
    const calcomBookingId = String(booking.bookingId ?? booking.uid);

    let contactId: string | null = null;

    if (attendee) {
      const captured = await captureLead(supabase, {
        channel: "web",
        source: "calcom",
        phone: attendee.phone ?? undefined,
        email: attendee.email ?? undefined,
        firstName: attendee.name?.split(" ")[0] ?? undefined,
        lastName: attendee.name?.split(" ").slice(1).join(" ") ?? undefined,
      });
      contactId = captured.contactId;
    }

    const { error } = await supabase.from("bookings").upsert(
      {
        contact_id: contactId,
        type: "consult",
        status: triggerEvent === "BOOKING_CREATED" ? "scheduled" : "confirmed",
        scheduled_at: booking.startTime,
        calcom_booking_id: calcomBookingId,
        source: "calcom",
        notes: booking.description ?? null,
      },
      { onConflict: "calcom_booking_id" },
    );
    if (error) {
      console.error("Cal.com booking upsert failed:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  if (triggerEvent === "BOOKING_CANCELLED") {
    const calcomBookingId = String(
      payload.payload.bookingId ?? payload.payload.uid,
    );
    await supabase
      .from("bookings")
      .update({ status: "canceled" })
      .eq("calcom_booking_id", calcomBookingId);
  }

  return NextResponse.json({ ok: true });
}
