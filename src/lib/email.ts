import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWhiteGloveEmail({
  fullName,
  email,
  downloadedReport,
}: {
  fullName: string;
  email: string;
  downloadedReport: boolean;
}) {
  await resend.emails.send({
    from: "Alex Purdy <alex@whitneysanctuary.com>",
    to: email,
    subject: "Your Private Introduction to The Whitney Sanctuary",
    html: `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
  <div style="border-bottom: 2px solid #C4A35A; padding-bottom: 20px; margin-bottom: 24px;">
    <h1 style="font-size: 24px; color: #1B2A4A; margin: 0;">The Whitney Sanctuary</h1>
    <p style="font-size: 14px; color: #4A5568; margin: 4px 0 0;">7810 Stonehaven Drive | Waxhaw, NC 28173</p>
  </div>
  <p>Dear ${fullName},</p>
  <p>Thank you for your interest in The Whitney Sanctuary. As the steward of this estate, I handle all inquiries personally \u2014 no agents, no intermediaries.</p>
  <p><strong>What you\u2019re considering:</strong></p>
  <ul style="color: #4A5568;">
    <li>A 1.26-acre, two-parcel legacy compound</li>
    <li>John Wieland \u201CWhitney\u201D \u2014 ~5,454 sq ft effective</li>
    <li>$164K\u2013$258K in renewed systems across six categories (Zero-CapEx)</li>
    <li>0.784-acre non-HOA rear lot with Heritage Cabin</li>
    <li>Japanese garden, private creek, Wolf/Sub-Zero</li>
  </ul>
  <p>I\u2019d welcome the opportunity to walk you through the compound in person. Reply to this email or call me directly at <strong>704-989-9005</strong> to schedule a private showing at your convenience.</p>
  ${downloadedReport ? '<p>Your Infrastructure Integrity Report is available for download at <a href="https://whitneysanctuary.com/infrastructure-report.pdf" style="color: #C4A35A;">whitneysanctuary.com</a>.</p>' : ""}
  <p style="margin-top: 32px;">Be well,</p>
  <p><strong>Alex Purdy</strong><br/>Principal &amp; Steward<br/><a href="https://whitneysanctuary.com" style="color: #C4A35A;">whitneysanctuary.com</a><br/>704-989-9005</p>
  <div style="border-top: 1px solid #D4D0C8; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #4A5568;">
    <p>Offered at $2,025,000 | Two parcels conveying (06156102 + 06156006R) | Deed Book 8351, Page 858</p>
  </div>
</div>`,
  });
}

export async function sendLeadNotification({
  fullName,
  email,
  phone,
  currentCity,
  timeline,
  source,
  utmSource,
  utmMedium,
  utmCampaign,
}: {
  fullName: string;
  email: string;
  phone: string;
  currentCity: string;
  timeline: string;
  source: "showing" | "report";
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}) {
  await resend.emails.send({
    from: "Whitney Sanctuary <alex@whitneysanctuary.com>",
    to: "alex@whitneysanctuary.com",
    subject: `New Lead: ${fullName} from ${currentCity}`,
    html: `
<div style="font-family: sans-serif; max-width: 600px; color: #1A1A1A;">
  <h2 style="color: #1B2A4A;">New Lead Submission</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">City</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${currentCity}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Timeline</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${timeline}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Source</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${source === "report" ? "Infrastructure Report Download" : "Private Showing Request"}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">UTM Source</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${utmSource || "direct"}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">UTM Medium</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${utmMedium || "none"}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">UTM Campaign</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${utmCampaign || "none"}</td></tr>
  </table>
  <p style="margin-top: 16px; color: #4A5568; font-size: 13px;">Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
</div>`,
  });
}
