import { kv } from "@vercel/kv";

export interface StoredLead {
  fullName: string;
  email: string;
  phone: string;
  currentCity: string;
  timeline: string;
  source: "showing" | "report";
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  submittedAt: string;
  emailsSent: number[];
}

export async function storeLead(
  lead: Omit<StoredLead, "submittedAt" | "emailsSent">
) {
  const stored: StoredLead = {
    ...lead,
    submittedAt: new Date().toISOString(),
    emailsSent: [],
  };
  await kv.hset(`lead:${lead.email}`, stored as unknown as Record<string, unknown>);
  await kv.sadd("lead:emails", lead.email);
  return stored;
}

export async function getAllLeads(): Promise<StoredLead[]> {
  const emails = (await kv.smembers("lead:emails")) as string[];
  const leads: StoredLead[] = [];
  for (const email of emails) {
    const lead = (await kv.hgetall(`lead:${email}`)) as StoredLead | null;
    if (lead) leads.push(lead);
  }
  return leads;
}

export async function markEmailSent(email: string, dayNumber: number) {
  const lead = (await kv.hgetall(`lead:${email}`)) as StoredLead | null;
  if (lead) {
    const updated = [...(lead.emailsSent || []), dayNumber];
    await kv.hset(`lead:${email}`, { emailsSent: updated } as Record<string, unknown>);
  }
}
