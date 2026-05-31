<script setup lang="ts">
import {useThemeTransition} from "~/composables/use-theme-transition";

const colorMode = useColorMode();
const {locale, t} = useI18n();
const {nextTheme, toggleThemeWithTransition} = useThemeTransition();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
    }
});

const label = computed(() => {
    void locale.value;

    return t(isDark.value ? "theme.switchToLight" : "theme.switchToDark");
});
</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :aria-label="label"
            :icon="`i-lucide-${nextTheme === 'light' ? 'sun' : 'moon'}`"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="toggleThemeWithTransition" />

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>
