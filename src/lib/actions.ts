"use server";

import { leadFormSchema, type LeadFormData } from "./schema";
import { sendWhiteGloveEmail, sendLeadNotification } from "./email";
import { storeLead } from "./leads";

export async function submitLeadForm(data: LeadFormData) {
  const parsed = leadFormSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false as const, error: "Validation failed." };
  }

  const {
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    utmContent,
    source: rawSource,
    ...lead
  } = parsed.data;

  const source = rawSource ?? "showing";

  const attribution = {
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
  };

  if (process.env.WEBHOOK_URL) {
    try {
      await fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source, attribution }),
      });
    } catch (err) {
      console.error("Webhook failed:", err);
    }
  }

  try {
    await Promise.all([
      sendWhiteGloveEmail({
        fullName: lead.fullName,
        email: lead.email,
        downloadedReport: source === "report",
      }),
      sendLeadNotification({
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        currentCity: lead.currentCity,
        timeline: lead.timeline,
        source,
        utmSource,
        utmMedium,
        utmCampaign,
      }),
    ]);
  } catch (emailError) {
    console.error("Email send failed:", emailError);
  }

  try {
    await storeLead({
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      currentCity: parsed.data.currentCity,
      timeline: parsed.data.timeline,
      source: source as "showing" | "report",
      utmSource: parsed.data.utmSource,
      utmMedium: parsed.data.utmMedium,
      utmCampaign: parsed.data.utmCampaign,
    });
  } catch (kvError) {
    console.error("Lead storage failed:", kvError);
  }

  console.log("Lead captured:", { ...lead, source });
  console.log("Attribution:", attribution);

  return { success: true as const, source };
}
