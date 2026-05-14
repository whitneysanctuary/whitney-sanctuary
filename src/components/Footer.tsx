import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top row: brand + contact */}
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-heading text-sm font-semibold text-navy">
              The Whitney Sanctuary
            </p>
            <p className="mt-1 text-xs text-slate">
              7810 Stonehaven Drive &middot; Waxhaw, NC 28173
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-xs text-slate sm:flex-row sm:gap-5">
            <a
              href="mailto:alex@whitneysanctuary.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-navy"
            >
              <Mail className="size-3.5" strokeWidth={1.5} />
              alex@whitneysanctuary.com
            </a>
            <a
              href="tel:+17049899005"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-navy"
            >
              <Phone className="size-3.5" strokeWidth={1.5} />
              704-989-9005
            </a>
          </div>
        </div>

        {/* Parcel disclosure */}
        <p className="mt-6 text-center text-[11px] leading-relaxed text-slate/60">
          Sale includes two parcels: 06156102 (Weddington Chase HOA, 0.475 ac)
          and 06156006R (non-HOA, 0.784 ac). Both parcels convey on a single
          deed (Book 8351, Page 858). Listing price $2,195,000. Contact Alex
          Purdy for details. 37-unit fenestration package and grand entry
          renewal installed 2026 by West Shore Home (GC License #L.81059).
          Market replacement range $85,000&ndash;$135,000, validated by
          independent contractor estimates. All documentation available upon
          request.
        </p>

        <p className="mt-4 text-center text-[11px] text-slate/40">
          &copy; {new Date().getFullYear()} The Whitney Sanctuary. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
