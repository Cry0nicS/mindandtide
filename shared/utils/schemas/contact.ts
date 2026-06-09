import {z} from "zod";

export const contactSubjectValues = ["seminars", "groupOffers", "general"] as const;

const requiredString = z.string().trim().min(1);

export const contactFormSchema = z
    .object({
        firstName: requiredString,
        lastName: requiredString,
        email: z.string().trim().email(),
        phone: z.preprocess(
            (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
            z.string().trim().optional()
        ),
        subject: z.enum(contactSubjectValues),
        message: z.string().trim().min(10),
        privacyConsent: z.boolean().refine((value) => value, {
            params: {
                i18n: "contact.validation.privacyAccepted"
            }
        })
    })
    .strict();

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormData = z.output<typeof contactFormSchema>;
export type ContactSubject = (typeof contactSubjectValues)[number];

export type ContactFormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject?: ContactSubject;
    message: string;
    privacyConsent: boolean;
};

export const createContactFormInitialState = (): ContactFormState => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: undefined,
    message: "",
    privacyConsent: false
});
