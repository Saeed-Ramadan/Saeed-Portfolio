import { z } from "zod";

// RATIONALE: Zod validation schema for the contact form. Error messages are translation keys to facilitate multilingual validation.
export const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "contact.errors.name_min" }),
  email: z
    .string()
    .email({ message: "contact.errors.email_invalid" }),
  project: z
    .string()
    .min(10, { message: "contact.errors.project_min" }),
});

export type ContactInput = z.infer<typeof contactSchema>;
