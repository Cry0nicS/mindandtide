<script setup lang="ts">
definePageMeta({layout: "home"});

const {t} = useI18n();

const tk = (path: string) => `pages.seminarsPage.${path}`;
useSeoMeta({
    title: () => t(tk("seo.title")),
    ogTitle: () => t(tk("seo.title")),
    description: () => t(tk("seo.description")),
    ogDescription: () => t(tk("seo.description"))
});
</script>

<template>
    <HomeDescent />
</template>
