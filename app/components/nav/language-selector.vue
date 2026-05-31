<script setup lang="ts">
import type {LocaleCodes} from "#shared/utils/types";
import {LOCALE_META} from "#shared/utils/constants";
import {extractLocaleCode} from "#shared/utils/helpers";
import {useThemeTransition} from "~/composables/use-theme-transition";

const {locale, setLocale, t} = useI18n();
const {runWithTransition} = useThemeTransition();

const label = computed(() => t("language.label"));

const changeLocale = (nextLocale: LocaleCodes, event: Event) => {
    if (locale.value === nextLocale) {
        return;
    }

    return runWithTransition(() => setLocale(nextLocale), event);
};

const items = computed(() => [
    {
        type: "checkbox" as const,
        checked: locale.value === LOCALE_META.en.code,
        label: t("language.en"),
        value: LOCALE_META.en,
        onSelect: (event: Event) => changeLocale(extractLocaleCode(LOCALE_META.en), event)
    },
    {
        type: "checkbox" as const,
        checked: locale.value === LOCALE_META.de.code,
        label: t("language.de"),
        value: LOCALE_META.de,
        onSelect: (event: Event) => changeLocale(extractLocaleCode(LOCALE_META.de), event)
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
