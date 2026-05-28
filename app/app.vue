<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const {themedFavicon} = useUtils();
const {locale, t} = useI18n();
const i18nHead = useLocaleHead({seo: true});

const uiLocale = computed(() => (locale.value === "de" ? locales.de : locales.en));

const baseTitle = computed(() => t("site.name"));
const description = computed(() => t("site.description"));

useSeoMeta({
    description: () => description.value,
    ogDescription: () => description.value,
    ogTitle: () => baseTitle.value,
    ogType: "website",
    title: () => baseTitle.value,
    twitterCard: "summary"
});

useHead(() => ({
    htmlAttrs: i18nHead.value.htmlAttrs,
    link: [...(i18nHead.value.link ?? []), {rel: "icon", href: themedFavicon.value}],
    meta: [...(i18nHead.value.meta ?? [])],
    titleTemplate: (titleChunk) =>
        titleChunk && titleChunk !== baseTitle.value
            ? `${titleChunk} | ${baseTitle.value}`
            : baseTitle.value
}));
</script>

<template>
    <UApp :locale="uiLocale">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <CookieBanner />
    </UApp>
</template>
