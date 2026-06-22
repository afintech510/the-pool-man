import { createHmac, timingSafeEqual } from "crypto";

export function verifyHmacSignature(
  payload: string,
  signature: string,
  secret: string,
  algorithm = "sha256",
): boolean {
  const expected = createHmac(algorithm, secret).update(payload).digest("hex");
  try {
    return timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected),
    );
  } catch {
    return false;
  }
}

export function verifyShopifyWebhook(
  body: string,
  hmacHeader: string,
  secret: string,
): boolean {
  const expected = createHmac("sha256", secret)
    .update(body, "utf8")
    .digest("base64");
  try {
    return timingSafeEqual(
      Buffer.from(hmacHeader),
      Buffer.from(expected),
    );
  } catch {
    return false;
  }
}
