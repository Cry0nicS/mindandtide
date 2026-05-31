<script setup lang="ts">
import {LOCALE_META} from "#shared/utils/constants";
import {extractLocaleCode} from "#shared/utils/helpers";

const {locale, setLocale, t} = useI18n();

const label = computed(() => t("language.label"));

const items = computed(() => [
    {
        icon: "circle-flags:en-us",
        label: t("language.en"),
        value: LOCALE_META.en,
        type: "checkbox" as const,
        checked: locale.value === LOCALE_META.en.code,
        onUpdateChecked: () => setLocale(extractLocaleCode(LOCALE_META.en))
    },
    {
        icon: "circle-flags:de",
        label: t("language.de"),
        value: LOCALE_META.de,
        type: "checkbox" as const,
        checked: locale.value === LOCALE_META.de.code,
        onUpdateChecked: () => setLocale(extractLocaleCode(LOCALE_META.de))
    }
]);
</script>

<template>
    <UDropdownMenu :items="items">
        <UButton
            :aria-label="label"
            icon="i-lucide-languages"
            color="neutral"
            variant="ghost">
            <span class="hidden lg:inline">{{ label }}</span>
        </UButton>
    </UDropdownMenu>
</template>
