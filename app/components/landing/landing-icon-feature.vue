<script setup lang="ts">
import LandingPageCard from "./landing-page-card.vue";

interface Props {
    icon: string;
    title: string;
    description: string;
    reverse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    reverse: false
});
</script>

<template>
    <LandingPageCard
        :icon="props.icon"
        :title="props.title"
        :description="props.description"
        orientation="horizontal"
        :reverse="props.reverse"
        class="h-full" />
</template>
