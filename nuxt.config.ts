// https://nuxt.com/docs/api/configuration/nuxt-config
import {DEFAULT_LOCALE, i18nPages, LOCALE_META} from "./shared/utils/constants";

export default defineNuxtConfig({
    colorMode: {
        fallback: "light",
        preference: "system"
    },
    compatibilityDate: "2025-07-15",
    css: ["~/assets/css/main.css"],
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config.
        }
    },
    i18n: {
        baseUrl: "https://mindandtide.de",
        // Disable custom route with page components.
        customRoutes: "config",
        defaultLocale: DEFAULT_LOCALE,
        detectBrowserLanguage: {
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            useCookie: true
        },
        langDir: "locales/",
        locales: [
            {
                code: LOCALE_META.en.code,
                file: "en.ts",
                language: LOCALE_META.en.language,
                name: LOCALE_META.en.name
            },
            {
                code: LOCALE_META.de.code,
                file: "de.ts",
                language: LOCALE_META.de.language,
                name: LOCALE_META.de.name
            }
        ],
        pages: i18nPages,
        strategy: "prefix_except_default",
        vueI18n: "./i18n.config.ts"
    },
    image: {
        format: ["webp"],
        quality: 80,
        screens: {
            1: 1,
            2: 2,
            10: 10,
            410: 410,
            820: 820,
            icon: 20,
            icon2x: 40,
            lg: 1024,
            md: 768,
            sm: 640,
            xl: 1280
        }
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/ui",
        "@nuxt/image",
        "nuxt-zod-i18n",
        "@nuxtjs/i18n",
        "@nuxtjs/seo",
        "@nuxtjs/device"
    ],
    ogImage: {
        enabled: false
    },
    routeRules: {
        "/": {prerender: true},
        "/en": {prerender: true},
        "/en/about-us": {prerender: true},
        "/ueber-uns": {prerender: true}
    },
    runtimeConfig: {
        mailgunBaseUrl: process.env.NUXT_MAILGUN_BASE_URL || "",
        mailgunBcc: process.env.NUXT_MAILGUN_BCC || "",
        mailgunDomain: process.env.NUXT_MAILGUN_DOMAIN || "",
        mailgunKey: process.env.NUXT_MAILGUN_KEY || "",
        mailgunRecipient: process.env.NUXT_MAILGUN_RECIPIENT || "",
        mailgunSender: process.env.NUXT_MAILGUN_SENDER || "",
        public: {
            nodeEnv: process.env.NUXT_PUBLIC_NODE_ENV || "development"
        }
    },
    site: {
        description: "Welcome to Mind and Tide.",
        name: "Mind and Tide",
        url: "https://mindandtide.de"
    },
    sitemap: {
        zeroRuntime: true
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    ui: {
        colorMode: true
    },
    zodI18n: {
        localeCodesMapping: {
            "de-DE": "de",
            "en-GB": "en"
        }
    }
});
