import type {NavigationMenuItem} from "@nuxt/ui";
import {computed} from "vue";

export const useNavItems = () => {
    const {t, locale} = useI18n();
    const localePath = useLocalePath();

    const navigationItems = computed<
        Record<"contact" | "home" | "imprint" | "privacy", NavigationMenuItem>
    >(() => {
        void locale.value;

        return {
            contact: {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "i-lucide-mail"
            },
            home: {
                label: t("pages.home"),
                to: localePath("/"),
                icon: "i-lucide-house"
            },
            imprint: {
                label: t("pages.imprint"),
                to: localePath("/privacy/imprint"),
                icon: "i-lucide-info"
            },
            privacy: {
                label: t("pages.privacy"),
                to: localePath("/privacy"),
                icon: "i-lucide-shield-user"
            }
        };
    });

    const headerDesktop = computed<NavigationMenuItem[]>(() => [
        navigationItems.value.home,
        navigationItems.value.contact
    ]);

    const headerMobile = computed<NavigationMenuItem[]>(() => [
        navigationItems.value.home,
        navigationItems.value.contact,
        navigationItems.value.imprint,
        navigationItems.value.privacy
    ]);

    const footer = computed<NavigationMenuItem[]>(() => [
        navigationItems.value.contact,
        navigationItems.value.imprint,
        navigationItems.value.privacy
    ]);

    return {footer, headerDesktop, headerMobile};
};
