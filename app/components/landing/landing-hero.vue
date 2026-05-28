<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";

interface Props {
    imageSrc: string;
    imageAlt: string;
    eyebrow?: string;
    title: string;
    subheadline?: string;
    supportingText?: string;
    metaText?: string;
    metaIcon?: string;
    links?: ButtonProps[];
}

const props = withDefaults(defineProps<Props>(), {
    eyebrow: undefined,
    subheadline: undefined,
    supportingText: undefined,
    metaText: undefined,
    metaIcon: "i-lucide-map-pin",
    links: undefined
});
</script>

<template>
    <UPageHero
        :headline="props.eyebrow"
        :title="props.title"
        :links="props.links"
        class="relative isolate overflow-hidden"
        :ui="{
            container:
                'relative z-10 flex min-h-[32rem] items-center py-24 sm:py-28 lg:min-h-[42rem] lg:py-32',
            wrapper: 'max-w-3xl',
            header: 'items-start text-left',
            headline: 'text-secondary text-xs font-semibold uppercase tracking-[0.28em]',
            title: 'font-heading text-highlighted text-4xl font-semibold leading-tight tracking-tight text-pretty sm:text-5xl lg:text-6xl',
            description: 'mt-5 max-w-2xl text-left',
            footer: 'mt-8',
            links: 'justify-start'
        }">
        <template #top>
            <NuxtImg
                :src="props.imageSrc"
                :alt="props.imageAlt"
                width="2400"
                height="1400"
                sizes="100vw"
                class="absolute inset-0 -z-20 size-full object-cover" />
            <div
                class="from-sand-50/95 via-sand-50/78 to-coast-50/20 dark:from-coast-950/95 dark:via-coast-900/78 dark:to-coast-900/30 absolute inset-0 -z-10 bg-linear-to-r" />
            <div
                class="to-sand-50/55 dark:from-coast-950/20 dark:to-coast-950/60 absolute inset-0 -z-10 bg-linear-to-b from-white/20 via-transparent" />
        </template>

        <template #description>
            <div class="space-y-4">
                <p
                    v-if="props.subheadline"
                    class="text-primary text-xl leading-8 font-semibold sm:text-2xl">
                    {{ props.subheadline }}
                </p>
                <p
                    v-if="props.supportingText"
                    class="text-muted max-w-xl text-lg leading-8 sm:text-xl">
                    {{ props.supportingText }}
                </p>
            </div>
        </template>

        <template
            v-if="props.metaText"
            #body>
            <div class="text-highlighted flex items-center gap-3 text-base font-semibold">
                <span
                    class="bg-secondary/25 text-secondary flex size-9 items-center justify-center rounded-full">
                    <UIcon
                        :name="props.metaIcon"
                        class="size-5" />
                </span>
                <span>{{ props.metaText }}</span>
            </div>
        </template>
    </UPageHero>
</template>
