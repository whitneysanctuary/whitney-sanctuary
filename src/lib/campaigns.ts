export type RegionKey = "california" | "newyork" | "texas";

export interface ZipTarget {
  zip: string;
  market: string;
  profile: string;
}

export interface RegionCampaign {
  key: RegionKey;
  label: string;
  headlines: [string, string, string];
  zips: ZipTarget[];
  heroSubheadline: string;
  heroArbitrageTag: string;
}

export const regions: Record<RegionKey, RegionCampaign> = {
  california: {
    key: "california",
    label: "Palo Alto / Silicon Valley",
    headlines: [
      "Your $4M Buys a Lot in Palo Alto. Here, It Buys a Legacy.",
      "Trade the 101 Commute for a Japanese Garden. 1.26-Acre Compound, $2.195M.",
      "Zero State Income Tax. Zero Deferred Maintenance. One Private Zen Sanctuary.",
    ],
    zips: [
      { zip: "94301", market: "Palo Alto (Downtown)", profile: "Median home $4.2M. Extreme tax + density arbitrage." },
      { zip: "94306", market: "Palo Alto (South)", profile: "Family-oriented tech execs seeking school quality + space." },
      { zip: "94022", market: "Los Altos", profile: "Ultra-HNW enclave. $5M+ medians. Garden/compound seekers." },
      { zip: "95120", market: "San Jose (Almaden)", profile: "Senior tech families. Trading congestion for legacy space." },
    ],
    heroSubheadline: "Your $4M buys a lot in Palo Alto. Here, it buys a legacy.",
    heroArbitrageTag: "Silicon Valley \u2192 Carolina Piedmont",
  },
  newyork: {
    key: "newyork",
    label: "Scarsdale / Westchester",
    headlines: [
      "Scarsdale Gives You 2,500 Sq Ft for $2M. We Give You Two Parcels.",
      "Escape the $30K Tax Bill. A Fully Renewed Compound Awaits in Carolina.",
      "The Space Your Family Deserves\u2014With a Private Creek, Not a Shared Sidewalk.",
    ],
    zips: [
      { zip: "10583", market: "Scarsdale", profile: "Median $1.8M for 2,500 sq ft. Extreme space arbitrage." },
      { zip: "10804", market: "New Rochelle (Wykagyl)", profile: "Commuter families facing $30k+ property tax bills." },
      { zip: "10528", market: "Harrison/Purchase", profile: "Corporate-exec corridor. PepsiCo/Mastercard HQ adjacent." },
    ],
    heroSubheadline: "Scarsdale gives you 2,500 sq ft for $2M. We give you two parcels.",
    heroArbitrageTag: "Westchester \u2192 Carolina Piedmont",
  },
  texas: {
    key: "texas",
    label: "Austin / Dallas",
    headlines: [
      "Austin Built Your Career. Waxhaw Builds Your Legacy. 1.26-Acre Compound.",
      "Tired of 1.8% Property Tax on Rising Valuations? Meet North Carolina.",
      "Highland Park Prestige, Carolina Freedom. A Wolf/Sub-Zero Kitchen on a Non-HOA Acre.",
    ],
    zips: [
      { zip: "78731", market: "Austin (NW Hills)", profile: "Tech migration hub. High density, 1.8%+ property tax." },
      { zip: "78746", market: "Austin (Westlake Hills)", profile: "Luxury family market fleeing rising TX valuations." },
      { zip: "75205", market: "Dallas (Highland Park)", profile: "Old-money prestige corridor. Seeking legacy compounds." },
    ],
    heroSubheadline: "Austin built your career. Waxhaw builds your legacy.",
    heroArbitrageTag: "Texas \u2192 Carolina Piedmont",
  },
};

export const sitelinks = [
  { text: "View the Japanese Garden", anchor: "#garden" },
  { text: "Explore the Culinary Suite", anchor: "#culinary" },
  { text: "Download the Infrastructure Report", anchor: "#forensic" },
  { text: "Schedule a Private Tour", anchor: "#tour" },
] as const;

export function resolveRegionFromUTM(
  utmCampaign: string | null
): RegionKey | null {
  if (!utmCampaign) return null;
  const lower = utmCampaign.toLowerCase();
  if (
    lower.includes("california") ||
    lower.includes("paloalto") ||
    lower.includes("siliconvalley")
  )
    return "california";
  if (
    lower.includes("newyork") ||
    lower.includes("scarsdale") ||
    lower.includes("westchester")
  )
    return "newyork";
  if (
    lower.includes("texas") ||
    lower.includes("austin") ||
    lower.includes("dallas")
  )
    return "texas";
  return null;
}

export const allZips = Object.values(regions).flatMap((r) => r.zips);
