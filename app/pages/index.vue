<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const title = computed(() => t("site.name"));
const description = computed(() => t("site.description"));

const links = computed<ButtonProps[]>(() => {
    void locale.value;

    return [
        {
            label: t("pages.contact"),
            to: localePath("/contact"),
            trailingIcon: "i-lucide-arrow-right",
            size: "xl"
        },
        {
            label: t("pages.privacy"),
            to: localePath("/privacy"),
            icon: "i-lucide-shield-user",
            size: "xl",
            color: "neutral",
            variant: "subtle"
        }
    ];
});
</script>

<template>
    <div>
        <UPageHero
            :title="title"
            :description="description"
            :links="links" />
    </div>
</template>
