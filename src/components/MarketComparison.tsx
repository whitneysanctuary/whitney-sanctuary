const comparisons = [
  {
    market: "Palo Alto, CA",
    zip: "94301",
    title: "Ranch on Quarter Acre",
    sqft: "1,600",
    lot: "0.14 acres",
    bedBath: "3 BR / 2 BA",
    propertyTax: "$33,000/yr",
    highlighted: false,
  },
  {
    market: "Scarsdale, NY",
    zip: "10583",
    title: "Colonial in HOA",
    sqft: "3,200",
    lot: "0.25 acres",
    bedBath: "4 BR / 2.5 BA",
    propertyTax: "$48,300/yr",
    highlighted: false,
  },
  {
    market: "Waxhaw, NC",
    zip: "28173",
    title: "The Whitney Sanctuary",
    sqft: "5,454",
    lot: "1.26 acres (two parcels)",
    bedBath: "6 BR / 5 BA",
    propertyTax: "$13,122/yr",
    highlighted: true,
  },
];

export default function MarketComparison() {
  return (
    <section id="comparison" className="bg-linen px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          The Arbitrage
        </p>
        <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
          What $2,025,000 Buys.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate">
          Identical capital. Three markets. The geographic distribution of
          luxury value in the 2026 American real estate market.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {comparisons.map((comp, i) => (
            <div
              key={i}
              className={`p-8 ${
                comp.highlighted
                  ? "border-2 border-gold bg-navy text-white"
                  : "border border-navy/10 bg-white text-navy"
              }`}
            >
              <p
                className={`text-xs tracking-[0.25em] uppercase ${
                  comp.highlighted ? "text-gold" : "text-slate"
                }`}
              >
                {comp.market} &middot; {comp.zip}
              </p>
              <h3
                className={`mt-2 font-heading text-2xl font-semibold ${
                  comp.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {comp.title}
              </h3>

              <div className="mt-8 space-y-4 text-base">
                {[
                  ["Living Area", `${comp.sqft} sq ft`],
                  ["Lot", comp.lot],
                  ["Bed / Bath", comp.bedBath],
                  ["Property Tax", comp.propertyTax],
                ].map(([label, value], j) => (
                  <div
                    key={j}
                    className={`flex justify-between border-b pb-3 ${
                      comp.highlighted
                        ? "border-white/10"
                        : "border-navy/10"
                    } ${j === 3 ? "border-b-0 pb-0" : ""}`}
                  >
                    <span
                      className={
                        comp.highlighted ? "text-white/60" : "text-slate"
                      }
                    >
                      {label}
                    </span>
                    <span
                      className={`font-semibold ${
                        comp.highlighted && j === 3 ? "text-gold" : ""
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-slate">
          Comparable property data sourced from Zillow, Redfin, and local tax
          assessor records (2026). Property tax figures represent median annual
          tax on equivalent listings in each market.
        </p>
      </div>
    </section>
  );
}
