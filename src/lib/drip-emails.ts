export const dripEmails: Record<
  number,
  { day: number; subject: string; html: (name: string) => string }
> = {
  1: {
    day: 1,
    subject:
      "Beyond the Inspection: Zero-CapEx Certainty at The Whitney Sanctuary",
    html: (name: string) => `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
  <div style="border-bottom: 2px solid #C4A35A; padding-bottom: 16px; margin-bottom: 20px;">
    <h1 style="font-size: 22px; color: #1B2A4A; margin: 0;">The Whitney Sanctuary</h1>
    <p style="font-size: 13px; color: #4A5568; margin: 4px 0 0;">7810 Stonehaven Drive | Waxhaw, NC 28173</p>
  </div>

  <p>Dear ${name},</p>

  <p>I noticed you recently downloaded our Infrastructure Integrity Report. As the steward of this estate, I believe the most important metric for a $2M+ acquisition isn\u2019t just the aesthetic \u2014 it\u2019s the elimination of \u201CInvisible Debt.\u201D</p>

  <p>By systematically renewing every major system in 2025 and 2026, we have reset the depreciation clock for the next 15+ years. From the new architectural roof to the high-efficiency dual-zone HVAC systems, this property is a certified Zero-CapEx asset. We\u2019ve essentially pre-paid $164,000\u2013$258,000 in market replacement value on your behalf so you can focus on the lifestyle, not the liability.</p>

  <p>If you have specific technical questions regarding the warranties or system specifications, please reach out directly.</p>

  <p style="margin-top: 28px;">Be well,</p>
  <p><strong>Alex Purdy</strong><br/>Principal &amp; Steward<br/><a href="https://whitneysanctuary.com" style="color: #C4A35A;">whitneysanctuary.com</a><br/>704-989-9005</p>

  <div style="border-top: 1px solid #D4D0C8; margin-top: 28px; padding-top: 14px; font-size: 11px; color: #4A5568;">
    Offered at $2,195,000 | Two parcels conveying (06156102 + 06156006R) | Deed Book 8351, Page 858
  </div>
</div>`,
  },

  4: {
    day: 4,
    subject:
      'The "Unicorn" Lot: Total Freedom Within a Resort Community',
    html: (name: string) => `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
  <div style="border-bottom: 2px solid #C4A35A; padding-bottom: 16px; margin-bottom: 20px;">
    <h1 style="font-size: 22px; color: #1B2A4A; margin: 0;">The Whitney Sanctuary</h1>
    <p style="font-size: 13px; color: #4A5568; margin: 4px 0 0;">7810 Stonehaven Drive | Waxhaw, NC 28173</p>
  </div>

  <p>Dear ${name},</p>

  <p>In the Waxhaw corridor, finding a curated community is easy; finding one that conveys with an unrestricted, non-HOA remainder parcel is almost impossible.</p>

  <p>The Whitney Sanctuary includes a 0.784-acre rear lot (Parcel #06156006R) that sits entirely outside the HOA\u2019s jurisdiction. This \u201CFreedom Premium\u201D land is where we built the Japanese walking garden and the powered Heritage Cabin.</p>

  <p>Constructed from authentic reclaimed wood, the 150 sq ft cabin offers three distinct uses:</p>

  <ul style="color: #4A5568;">
    <li><strong>A \u201CDeep Work\u201D Sanctuary:</strong> A detached, powered garden office for high-performance remote work.</li>
    <li><strong>A Unique Income Stream:</strong> An Airbnb \u201Cunique stay\u201D micro-cabin with no rental restrictions.</li>
    <li><strong>A Creative Workshop:</strong> A powered space for hobbyists on unrestricted Town of Marvin land.</li>
  </ul>

  <p>This configuration is a legal anomaly that simply cannot be replicated by developers today.</p>

  <p style="margin-top: 28px;">Best,</p>
  <p><strong>Alex Purdy</strong><br/>Principal &amp; Steward<br/><a href="https://whitneysanctuary.com" style="color: #C4A35A;">whitneysanctuary.com</a><br/>704-989-9005</p>

  <div style="border-top: 1px solid #D4D0C8; margin-top: 28px; padding-top: 14px; font-size: 11px; color: #4A5568;">
    Offered at $2,195,000 | Two parcels conveying (06156102 + 06156006R) | Deed Book 8351, Page 858
  </div>
</div>`,
  },

  7: {
    day: 7,
    subject: "The $2.195M Window: Strategic Arbitrage",
    html: (name: string) => `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
  <div style="border-bottom: 2px solid #C4A35A; padding-bottom: 16px; margin-bottom: 20px;">
    <h1 style="font-size: 22px; color: #1B2A4A; margin: 0;">The Whitney Sanctuary</h1>
    <p style="font-size: 13px; color: #4A5568; margin: 4px 0 0;">7810 Stonehaven Drive | Waxhaw, NC 28173</p>
  </div>

  <p>Dear ${name},</p>

  <p>When we established the $2,195,000 anchor for this compound, it was based on forensic market data, not aspiration.</p>

  <p>Recent sales in our corridor have established a clear ceiling:</p>

  <ul style="color: #4A5568;">
    <li><strong>1008 Maxwell Ct:</strong> $3,473,395 (new construction ceiling)</li>
    <li><strong>1011 Helaina Ct:</strong> $2,732,000 (validates the $2M+ compound model)</li>
  </ul>

  <p>Against these figures, The Whitney Sanctuary represents a \u201CRelocation Arbitrage\u201D window for buyers exiting high-tax markets like Palo Alto, Scarsdale, or Austin. We are offering a 1.26-acre, two-parcel compound that is fully de-risked and ready for its next steward.</p>

  <p>This is not a negotiation about price; it is a conversation about what a buyer cannot find elsewhere in this region at any cost.</p>

  <p>Are you ready to see the Japanese garden and the Heritage Cabin in person? I would be happy to host you for a private walkthrough this week.</p>

  <p style="margin-top: 28px;"><strong>Alex Purdy</strong><br/>704-989-9005<br/><a href="mailto:alex@whitneysanctuary.com" style="color: #C4A35A;">alex@whitneysanctuary.com</a></p>

  <div style="border-top: 1px solid #D4D0C8; margin-top: 28px; padding-top: 14px; font-size: 11px; color: #4A5568;">
    Offered at $2,195,000 | Two parcels conveying (06156102 + 06156006R) | Deed Book 8351, Page 858
  </div>
</div>`,
  },
};
