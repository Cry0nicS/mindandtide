import {i18nRouteNames} from "#shared/utils/constants";

// One content source for the homepage (reads the existing pages.seminarsPage.* copy).
const KEY = "pages.seminarsPage";

export function useHomeContent() {
    const {locale, t} = useI18n();
    const localePath = useLocalePath();

    return computed(() => {
        void locale.value;
        const s = (path: string) => t(`${KEY}.${path}`);
        const list = (base: string, keys: string[], fields: string[] = ["title", "description"]) =>
            keys.map((key) => Object.fromEntries(fields.map((f) => [f, s(`${base}.${key}.${f}`)])));

        // "Water: Floating and ..." -> {word: "Water", text: "Floating and ..."}
        const methods = ["water", "breath", "body", "senses", "photography", "walking"].map(
            (key) => {
                const [word, ...rest] = s(`contentMethods.methods.items.${key}`).split(": ");
                return {word, text: rest.join(": ")};
            }
        );

        return {
            // nav links come from useNavItems(); these are only for the logo and CTAs
            copyright: t("common.copyright", {year: new Date().getFullYear()}),
            to: {
                home: localePath("/"),
                contact: localePath(i18nRouteNames.contact)
            },
            hero: {
                title: s("hero.title"),
                supportingText: s("hero.supportingText"),
                meta: s("hero.meta"),
                imageAlt: s("hero.imageAlt")
            },
            about: {
                title: s("seminarAbout.title"),
                description: s("seminarAbout.description"),
                intro: s("seminarAbout.intro"),
                closing: s("seminarAbout.closing"),
                imageAlt: s("image.imageAlt")
            },
            takeaways: {
                headline: s("takeaways.headline"),
                title: s("takeaways.title"),
                items: list("takeaways.items", [
                    "clarity",
                    "stress",
                    "resilience",
                    "routines",
                    "balance",
                    "impact"
                ])
            },
            participants: {
                title: s("participants.title"),
                description: s("participants.description"),
                closing: s("participants.closing"),
                imageAlt: s("participants.imageAlt"),
                items: list("participants.items", [
                    "demandingEnvironment",
                    "stressRegulation",
                    "resilience",
                    "directExperience",
                    "naturalEnvironments",
                    "placeBasedLearning"
                ])
            },
            stepper: {
                title: s("stepper.title"),
                steps: list("stepper", ["understand", "experience", "transfer"])
            },
            methods: {title: s("contentMethods.methods.title"), items: methods},
            download: {
                title: s("download.title"),
                description: s("download.description"),
                label: s("download.label"),
                href: `/documents/${s("download.fileName")}`,
                fileName: s("download.fileName")
            },
            dahab: {
                title: s("whyDahab.title"),
                description: s("whyDahab.description"),
                imageAlt: s("whyDahab.imageAlt"),
                readMore: s("whyDahab.actions.apply"),
                request: s("whyDahab.actions.requestInformation")
            },
            organization: {
                title: s("organization.title"),
                note: s("organization.note"),
                items: list("organization.items", ["date", "group", "accommodation", "times"])
            },
            schedule: {
                title: s("seminarSchedule.title"),
                apply: s("seminarSchedule.actions.apply"),
                request: s("seminarSchedule.actions.requestInformation"),
                // status drives the visual state in every variant
                items: [
                    {key: "october2026", status: "closed"},
                    {key: "november2026", status: "closed"},
                    {key: "upcoming2027", status: "soon"}
                ].map(({key, status}) => ({
                    status,
                    title: s(`seminarSchedule.items.${key}.title`),
                    description: s(`seminarSchedule.items.${key}.description`)
                }))
            },
            cta: {
                title: s("cta.title"),
                description: s("cta.description"),
                action: s("cta.action")
            },
            // hero/solo/place are Unsplash photo ids, rendered with the NuxtImg "unsplash" provider
            img: {
                hero: "photo-1628238452386-b916aa9e4443",
                solo: "photo-1664230356137-aa946287917a",
                place: "photo-1581180938640-edde9a09a38d",
                process: "/seminars/process_image.png"
            }
        };
    });
}
