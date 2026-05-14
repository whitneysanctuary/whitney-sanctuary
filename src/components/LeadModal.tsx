"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { leadFormSchema, type LeadFormData } from "@/lib/schema";
import { submitLeadForm } from "@/lib/actions";
import { getStoredUTM } from "@/hooks/useUTM";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadSource = "showing" | "report";

export function LeadModal({
  isOpen,
  onClose,
  source = "showing",
}: {
  isOpen: boolean;
  onClose: () => void;
  source?: LeadSource;
}) {
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const downloadAfterSubmit = source === "report";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";

      setValue("source", source);

      const utm = getStoredUTM();
      if (utm.utm_source) setValue("utmSource", utm.utm_source);
      if (utm.utm_medium) setValue("utmMedium", utm.utm_medium);
      if (utm.utm_campaign) setValue("utmCampaign", utm.utm_campaign);
      if (utm.utm_term) setValue("utmTerm", utm.utm_term);
      if (utm.utm_content) setValue("utmContent", utm.utm_content);
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, setValue, source]);

  const handleClose = useCallback(() => {
    setSubmitted(false);
    reset();
    onClose();
  }, [onClose, reset]);

  async function onSubmit(data: LeadFormData) {
    const result = await submitLeadForm(data);
    if (result.success) {
      setSubmitted(true);

      window.dataLayer?.push({
        event: source === "report" ? "report_download" : "showing_request",
        lead_name: data.fullName,
        lead_city: data.currentCity,
      });

      window.gtag?.("event", "conversion", {
        send_to: "AW-XXXXXXX/YYYYYY",
      });

      window.fbq?.("track", "Lead", {
        content_name:
          source === "report"
            ? "Infrastructure Report"
            : "Whitney Sanctuary Private Showing",
      });

      if (downloadAfterSubmit) {
        const link = document.createElement("a");
        link.href = "/infrastructure-report.pdf";
        link.download = "Whitney-Sanctuary-Infrastructure-Report.pdf";
        link.click();
      }
    }
  }

  if (!isOpen) return null;

  const isReport = source === "report";

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="fixed inset-0 z-50 m-auto w-full max-w-lg rounded-lg bg-white p-0 shadow-2xl backdrop:bg-navy/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-8 md:p-10">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-slate transition-colors hover:text-navy"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <h3 className="mb-3 font-heading text-2xl font-semibold text-navy">
              {isReport ? "Your Report Is Downloading" : "Thank You"}
            </h3>
            <p className="text-slate">
              {isReport
                ? "Your report is downloading. We\u2019ll be in touch shortly."
                : "Thank you. Alex will contact you within 24 hours."}
            </p>
            <button
              onClick={handleClose}
              className="mt-8 inline-block h-12 rounded-sm bg-gold px-8 font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="mb-1 font-heading text-2xl font-semibold text-navy">
              {isReport
                ? "Download Infrastructure Report"
                : "Request a Private Showing"}
            </h3>
            <p className="mb-6 text-sm text-slate">
              {isReport
                ? "Enter your details to receive the full Zero-CapEx audit."
                : "7810 Stonehaven Drive \u00B7 Waxhaw, NC 28173"}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Field label="Full Name" error={errors.fullName?.message}>
                <input
                  {...register("fullName")}
                  className="form-input"
                  placeholder="James & Sarah Mitchell"
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  className="form-input"
                  placeholder="james@example.com"
                />
              </Field>

              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  type="tel"
                  className="form-input"
                  placeholder="(650) 555-0123"
                />
              </Field>

              <Field label="Current City" error={errors.currentCity?.message}>
                <input
                  {...register("currentCity")}
                  className="form-input"
                  placeholder="Palo Alto, CA"
                />
              </Field>

              <Field label="Timeline" error={errors.timeline?.message}>
                <select {...register("timeline")} className="form-input">
                  <option value="">When are you looking to move?</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3 months">1-3 Months</option>
                  <option value="3-6 months">3-6 Months</option>
                  <option value="6-12 months">6-12 Months</option>
                  <option value="just exploring">Just Exploring</option>
                </select>
              </Field>

              <input type="hidden" {...register("source")} />
              <input type="hidden" {...register("utmSource")} />
              <input type="hidden" {...register("utmMedium")} />
              <input type="hidden" {...register("utmCampaign")} />
              <input type="hidden" {...register("utmTerm")} />
              <input type="hidden" {...register("utmContent")} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 h-12 w-full rounded-sm bg-gold font-semibold text-navy transition-colors hover:bg-gold-dark disabled:opacity-50"
              >
                {isSubmitting
                  ? "Submitting\u2026"
                  : isReport
                    ? "Download Report"
                    : "Request Private Showing"}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
