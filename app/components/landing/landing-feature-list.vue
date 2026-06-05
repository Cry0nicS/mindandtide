<script setup lang="ts">
interface FeatureListItem {
    icon?: string;
    title?: string;
    description: string;
}

interface Props {
    items: FeatureListItem[];
    compact?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    compact: false
});
</script>

<template>
    <ul :class="props.compact ? 'space-y-3' : 'space-y-4'">
        <li
            v-for="item in props.items"
            :key="`${item.title ?? item.description}`"
            class="flex gap-3.5">
            <span
                class="bg-primary/10 text-primary ring-primary/20 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ring-1">
                <UIcon
                    :name="item.icon ?? 'i-lucide-check'"
                    class="size-3.5" />
            </span>
            <span class="text-muted text-sm leading-6 sm:text-base sm:leading-7">
                <strong
                    v-if="item.title"
                    class="text-highlighted font-semibold">
                    {{ item.title }}:
                </strong>
                {{ item.description }}
            </span>
        </li>
    </ul>
</template>
