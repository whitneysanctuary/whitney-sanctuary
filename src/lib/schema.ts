import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .regex(/^[\d\s\-+()]+$/, "Enter a valid phone number"),
  currentCity: z.string().min(2, "Current city is required"),
  timeline: z.string().min(1, "Please select a timeline"),
  source: z.enum(["showing", "report"]).optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
