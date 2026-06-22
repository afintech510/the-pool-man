import { BrevoClient } from "@getbrevo/brevo";

function getClient() {
  return new BrevoClient({ apiKey: process.env.BREVO_API_KEY! });
}

export async function sendTransactionalEmail(params: {
  to: { email: string; name?: string };
  templateId: number;
  templateParams?: Record<string, string>;
}) {
  const client = getClient();
  return client.transactionalEmails.sendTransacEmail({
    to: [{ email: params.to.email, name: params.to.name }],
    templateId: params.templateId,
    params: params.templateParams,
  });
}

export async function upsertContact(params: {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  listIds?: number[];
}) {
  const client = getClient();
  return client.contacts.createContact({
    email: params.email,
    attributes: {
      FIRSTNAME: params.firstName ?? "",
      LASTNAME: params.lastName ?? "",
      SMS: params.phone ?? "",
    },
    listIds: params.listIds,
    updateEnabled: true,
  });
}

export async function removeContactFromList(
  email: string,
  listId: number,
) {
  const client = getClient();
  return client.contacts.removeContactFromList({
    listId,
    body: { emails: [email] },
  });
}
