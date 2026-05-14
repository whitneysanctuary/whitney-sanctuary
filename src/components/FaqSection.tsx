"use client";

const faqs = [
  {
    question: "Is the rear parcel really non-HOA?",
    answer:
      "Yes. Parcel #06156006R (0.784 acres) is a remainder parcel from the original pre-subdivision tract. It predates the Weddington Chase plat and was never absorbed into the HOA. Zoning authority rests with the Town of Marvin. Both parcels convey under a single deed (Book 8351, Page 858).",
  },
  {
    question: "What are the property taxes on this compound?",
    answer:
      "Annual property tax is approximately $14,223 at the Town of Marvin tax rate of 0.648% applied to the $2,195,000 listing price. North Carolina has no estate tax and a flat 3.99% income tax rate (2026), creating substantial savings versus high-tax states like California, New York, and New Jersey.",
  },
  {
    question:
      "Can the Heritage Cabin be used as an Airbnb or short-term rental?",
    answer:
      "The 150 sq ft Heritage Cabin sits on the non-HOA rear parcel (06156006R), which is governed by Town of Marvin zoning rather than the Weddington Chase HOA. There are no HOA covenant restrictions on short-term rental of the cabin. Local Town of Marvin regulations should be reviewed for current short-term rental requirements.",
  },
  {
    question: "What schools serve 7810 Stonehaven Drive?",
    answer:
      "The property is zoned for Marvin Ridge High School, one of the top-rated public high schools in North Carolina. Marvin Elementary and Marvin Ridge Middle School complete the K-12 pathway. All three schools are within the Union County Public Schools system, consistently ranked in the top tier statewide.",
  },
  {
    question:
      "What\u2019s included in the $201,000-$337,000 in system renewals?",
    answer:
      "The fourteen renewed systems include: architectural roof (2025), HVAC & heat pump (2026), complete 37-window fenestration package (2026, West Shore Home GC #L.81059), grand entry door (2026), 6-inch seamless gutters (2026), crawlspace vapor barrier (2026), pool heater plus salt cell and LED lights (2026), plumbing and electrical remediation (2026), Wolf/Sub-Zero appliance servicing (2026), full landscaping overhaul and lighting (2026), interior and exterior touch-up paint (2026), and a completed pre-inspection with all findings resolved (2026). Full documentation is available in the Infrastructure Integrity Report.",
  },
  {
    question:
      "When does the listing become officially active on MLS?",
    answer:
      "The Whitney Sanctuary is currently in Coming Soon status on MLS #4362179. Active status begins June 1, 2026, at which point the property becomes searchable on Zillow, Realtor.com, Redfin, and other syndication platforms with full showing availability.",
  },
  {
    question: "Is this sold by owner or with a listing agent?",
    answer:
      "The Whitney Sanctuary is a principal-led sale conducted directly by the property owner via a flat-fee MLS listing through Chosen Realty of NC LLC. Buyer\u2019s agents are welcome and standard commission terms apply. Direct inquiries from buyers are responded to by Alex Purdy at 704-989-9005 or alex@whitneysanctuary.com.",
  },
  {
    question:
      "How far is the property from Charlotte and the airport?",
    answer:
      "Charlotte Douglas International Airport is approximately 35 minutes by car. Uptown Charlotte is approximately 30 minutes. I-485, the Charlotte outer loop, is approximately 10 minutes from the property, providing rapid access to the entire metro area.",
  },
  {
    question:
      "What\u2019s the difference between this property and standard Weddington Chase homes?",
    answer:
      "Standard Weddington Chase lots are 0.3 to 0.5 acres on a single platted lot under full HOA covenants. The Whitney Sanctuary conveys two parcels totaling 1.26 acres: the primary residence on its HOA lot, plus an adjacent 0.784-acre non-HOA remainder parcel zoned via Town of Marvin. This configuration is irreplaceable \u2014 no developer, adjacent owner, or HOA action can recreate it.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section id="faq" className="bg-linen py-20 px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Frequently Asked
        </p>
        <h2 className="text-center font-heading text-3xl font-semibold text-navy md:text-4xl">
          Common Questions
        </h2>

        <div className="mt-12 space-y-0">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-navy/10 py-6 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <h3 className="pr-8 font-heading text-lg font-semibold text-navy md:text-xl">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 text-2xl text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
