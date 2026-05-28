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
    <ul :class="props.compact ? 'space-y-2.5' : 'space-y-3.5'">
        <li
            v-for="item in props.items"
            :key="`${item.title ?? item.description}`"
            class="flex gap-3">
            <span
                class="text-primary ring-primary/30 mt-1 flex size-5 shrink-0 items-center justify-center rounded-full ring-1">
                <UIcon
                    :name="item.icon ?? 'i-lucide-check'"
                    class="size-3.5" />
            </span>
            <span class="text-muted leading-7">
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
