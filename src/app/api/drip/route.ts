import { NextResponse } from "next/server";
import { getAllLeads, markEmailSent } from "@/lib/leads";
import { dripEmails } from "@/lib/drip-emails";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getAllLeads();
  const now = new Date();
  let sent = 0;
  let errors = 0;

  for (const lead of leads) {
    if (lead.source !== "report") continue;

    const submitted = new Date(lead.submittedAt);
    const daysSince = Math.floor(
      (now.getTime() - submitted.getTime()) / (1000 * 60 * 60 * 24)
    );

    const emailsSent = lead.emailsSent || [];

    for (const [dayKey, template] of Object.entries(dripEmails)) {
      const dayNum = Number(dayKey);

      if (daysSince >= dayNum && !emailsSent.includes(dayNum)) {
        try {
          await resend.emails.send({
            from: "Alex Purdy <alex@whitneysanctuary.com>",
            to: lead.email,
            subject: template.subject,
            html: template.html(lead.fullName),
          });
          await markEmailSent(lead.email, dayNum);
          sent++;
        } catch (err) {
          console.error(
            `Drip email failed for ${lead.email} day ${dayNum}:`,
            err
          );
          errors++;
        }
      }
    }
  }

  return NextResponse.json({
    processed: leads.length,
    sent,
    errors,
    timestamp: now.toISOString(),
  });
}
