<script setup lang="ts">
import LandingPageCard from "./landing-page-card.vue";

interface InfoGridItem {
    icon: string;
    title: string;
    description: string;
}

interface Props {
    items: InfoGridItem[];
}

const props = defineProps<Props>();
</script>

<template>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <LandingPageCard
            v-for="item in props.items"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            class="bg-elevated/70 h-full"
            icon-class="rounded-md bg-transparent ring-0 text-primary size-10"
            orientation="vertical" />
    </div>
</template>
