<script setup lang="ts">
const colorMode = useColorMode();
const {locale, t} = useI18n();

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
            :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="isDark = !isDark" />

        <template #fallback>
            <div class="size-8" />
        </template>
    </ClientOnly>
</template>
