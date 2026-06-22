import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const supabase = createAdminClient();
  const event = payload.event ?? payload.type;

  switch (event) {
    case "job.completed":
    case "job.created":
    case "job.updated": {
      const job = payload.data;
      const skimmerJobId = String(job.id);

      let locationId: string | null = null;
      if (job.account_id) {
        const { data: loc } = await supabase
          .from("service_locations")
          .select("id")
          .eq("skimmer_account_id", String(job.account_id))
          .single();
        locationId = loc?.id ?? null;
      }

      const { error } = await supabase.from("jobs").upsert(
        {
          skimmer_job_id: skimmerJobId,
          service_location_id: locationId,
          status:
            event === "job.completed"
              ? "completed"
              : event === "job.created"
                ? "scheduled"
                : "in_progress",
          scheduled_at: job.scheduled_at ?? null,
          completed_at: job.completed_at ?? null,
          amount: job.amount ? parseFloat(job.amount) : null,
        },
        { onConflict: "skimmer_job_id" },
      );
      if (error) {
        console.error("Skimmer job upsert failed:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      break;
    }

    case "account.created":
    case "account.updated": {
      const account = payload.data;
      const skimmerAccountId = String(account.id);

      const address = account.address ?? account.service_address;
      if (address) {
        const { data: existingLoc } = await supabase
          .from("service_locations")
          .select("id")
          .eq("skimmer_account_id", skimmerAccountId)
          .single();

        if (existingLoc) {
          await supabase
            .from("service_locations")
            .update({
              address_line1: address.line1 ?? address.street,
              city: address.city,
              state: address.state ?? "NY",
              postal_code: address.zip ?? address.postal_code,
            })
            .eq("id", existingLoc.id);
        } else {
          await supabase.from("service_locations").insert({
            address_line1: address.line1 ?? address.street,
            city: address.city,
            state: address.state ?? "NY",
            postal_code: address.zip ?? address.postal_code,
            skimmer_account_id: skimmerAccountId,
            status: "active",
          });
        }
      }
      break;
    }

    default:
      console.log(`Unhandled Skimmer event: ${event}`);
  }

  return NextResponse.json({ ok: true });
}
