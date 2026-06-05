<script setup lang="ts">
interface Props {
    label: string;
    to: string;
    fileName: string;
}

defineProps<Props>();
</script>

<template>
    <UCard
        variant="subtle"
        class="border-default rounded-lg">
        <ULink
            :to="to"
            external
            :download="fileName"
            target="_blank"
            class="group flex items-center justify-between gap-5">
            <span class="flex min-w-0 items-center gap-4">
                <span class="text-muted flex size-11 shrink-0 items-center justify-center">
                    <UIcon
                        name="i-lucide-file-text"
                        class="size-8" />
                </span>

                <span class="text-muted text-lg font-semibold">
                    {{ label }}
                </span>
            </span>

            <UIcon
                name="i-lucide-download"
                class="text-secondary size-8 shrink-0 transition-transform group-hover:translate-x-1" />
        </ULink>
    </UCard>
</template>
