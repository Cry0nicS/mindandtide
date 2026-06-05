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
        class="border-default bg-elevated/70 rounded-lg border shadow-sm backdrop-blur"
        :ui="{body: 'p-0'}">
        <ULink
            :to="to"
            external
            :download="fileName"
            target="_blank"
            class="group hover:bg-muted/40 flex items-center justify-between gap-4 rounded-lg p-4 transition-colors sm:gap-5 sm:p-5">
            <span class="flex min-w-0 items-center gap-4">
                <span
                    class="bg-primary/10 text-primary ring-primary/20 flex size-11 shrink-0 items-center justify-center rounded-lg ring-1">
                    <UIcon
                        name="i-lucide-file-text"
                        class="size-5" />
                </span>

                <span class="text-highlighted text-base font-semibold sm:text-lg">
                    {{ label }}
                </span>
            </span>

            <UIcon
                name="i-lucide-download"
                class="text-secondary size-5 shrink-0 transition-transform group-hover:translate-x-1" />
        </ULink>
    </UCard>
</template>
