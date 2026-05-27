<script setup lang="ts">
const colorMode = useColorMode();
const {t} = useI18n();

const logoSrc = computed(() => {
    return colorMode.value === "dark" ? "/dark-logo.svg" : "/light-logo.svg";
});

const alt = computed(() => t("site.logoAlt"));
</script>

<template>
    <img
        :src="logoSrc"
        :alt="alt" />
</template>
