import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyShopifyWebhook } from "@/lib/webhooks/verify";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const hmac = request.headers.get("x-shopify-hmac-sha256");
  const topic = request.headers.get("x-shopify-topic");
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET;

  if (!hmac || !secret || !verifyShopifyWebhook(body, hmac, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = JSON.parse(body);
  const supabase = createAdminClient();

  switch (topic) {
    case "orders/create":
    case "orders/updated": {
      const shopifyOrderId = String(payload.id);
      const { error } = await supabase.from("orders").upsert(
        {
          shopify_order_id: shopifyOrderId,
          channel: payload.source_name === "pos" ? "pos" : "online",
          subtotal: parseFloat(payload.subtotal_price ?? "0"),
          tax: parseFloat(payload.total_tax ?? "0"),
          total: parseFloat(payload.total_price ?? "0"),
          currency: payload.currency ?? "USD",
          placed_at: payload.created_at,
        },
        { onConflict: "shopify_order_id" },
      );
      if (error) {
        console.error("Shopify order upsert failed:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      break;
    }

    default:
      console.log(`Unhandled Shopify topic: ${topic}`);
  }

  return NextResponse.json({ ok: true });
}
