import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long")
    .regex(/^[A-Za-z\u00C0-\u024F\s'\-]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),

  phone: z
    .string()
    .max(20, "Phone number is too long")
    .regex(/^[\d\s\+\-\(\)\.]*$/, "Phone number contains invalid characters")
    .optional()
    .or(z.literal("")),

  interest: z.enum(
    ["guided-tour", "kayak-rental", "canoe-rental", "group-event", "other"],
    { error: "Please select an interest" }
  ),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),

  website: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
