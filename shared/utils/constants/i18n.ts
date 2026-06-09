import type {NuxtI18nOptions} from "@nuxtjs/i18n";
import type {LocaleCodes} from "../types";

/**
 * Mapping of existing page route keys to localized paths.
 * Add future pages here only when their page component exists.
 */
export const i18nPages = {
    "about-us/index": {
        en: "/about-us",
        de: "/ueber-uns"
    },
    "privacy/index": {
        en: "/privacy",
        de: "/datenschutz"
    },
    "privacy/imprint": {
        en: "/privacy/imprint",
        de: "/datenschutz/impressum"
    },
    "contact": {
        en: "/contact",
        de: "/kontakt"
    }
} as const satisfies NuxtI18nOptions["pages"];

export const i18nRouteNames = {
    aboutUs: "about-us",
    contact: "contact",
    imprint: "privacy-imprint",
    privacy: "privacy"
} as const;

export const LOCALE_CODES = ["en", "de"] as const;
export const DEFAULT_LOCALE: LocaleCodes = "de";

export const LOCALE_META = {
    en: {
        name: "English",
        code: "en",
        language: "en-US"
    },
    de: {
        name: "Deutsch",
        code: "de",
        language: "de-DE"
    }
} as const;
