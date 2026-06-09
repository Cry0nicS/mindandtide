import type {ContactFormData, ContactSubject} from "~~/shared/utils/schemas";
import Mailgun from "mailgun.js";
import {contactFormSchema} from "~~/shared/utils/schemas";
import {getPrettyPrintNow} from "#shared/utils/helpers";

const subjectLabels: Record<ContactSubject, string> = {
    seminars: "Seminars",
    groupOffers: "Group offers",
    general: "General enquiry"
};

const createTextBody = (message: ContactFormData) =>
    `
New contact message received at ${getPrettyPrintNow()}:

First name: ${message.firstName}
Last name: ${message.lastName}
Email: ${message.email}
Phone: ${message.phone || "-"}
Subject: ${subjectLabels[message.subject]}

Message:
${message.message}
`.trim();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid contact form payload"
        });
    }

    const config = useRuntimeConfig();
    const missingConfig = [
        ["mailgunBaseUrl", config.mailgunBaseUrl],
        ["mailgunDomain", config.mailgunDomain],
        ["mailgunKey", config.mailgunKey],
        ["mailgunRecipient", config.mailgunRecipient],
        ["mailgunSender", config.mailgunSender]
    ].filter(([, value]) => !value);

    if (missingConfig.length > 0) {
        console.error("Missing Mailgun contact form configuration", {
            keys: missingConfig.map(([key]) => key)
        });

        throw createError({
            statusCode: 500,
            statusMessage: "Contact form email is not configured"
        });
    }

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: "api",
        key: config.mailgunKey,
        url: config.mailgunBaseUrl,
        useFetch: true
    });

    try {
        await mg.messages.create(config.mailgunDomain, {
            "from": config.mailgunSender,
            "to": config.mailgunRecipient,
            ...(config.mailgunBcc ? {bcc: config.mailgunBcc} : {}),
            "subject": `${subjectLabels[parsed.data.subject]} request from ${parsed.data.firstName} ${parsed.data.lastName}`,
            "text": createTextBody(parsed.data),
            "h:Reply-To": parsed.data.email
        });

        return {success: true};
    } catch (error) {
        console.error("Error sending contact email", error);

        throw createError({
            statusCode: 502,
            statusMessage: "Unable to send contact message"
        });
    }
});
