<script setup lang="ts">
type SectionOrientation = "horizontal" | "vertical";

interface Props {
    eyebrow?: string;
    title?: string;
    description?: string;
    orientation?: SectionOrientation;
    reverse?: boolean;
    muted?: boolean;
    class?: string;
}

const props = withDefaults(defineProps<Props>(), {
    eyebrow: undefined,
    title: undefined,
    description: undefined,
    orientation: "vertical",
    reverse: false,
    muted: false,
    class: undefined
});
</script>

<template>
    <UPageSection
        :headline="props.eyebrow"
        :title="props.title"
        :description="props.description"
        :orientation="props.orientation"
        :class="[props.muted && 'bg-muted/30', props.class]"
        :ui="{
            container: 'py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10 lg:gap-14',
            wrapper: ['max-w-2xl', props.reverse && 'lg:order-last'].filter(Boolean).join(' '),
            headline: 'text-secondary text-xs font-semibold uppercase tracking-[0.26em]',
            title: 'font-heading text-highlighted text-3xl font-semibold leading-tight text-pretty sm:text-4xl lg:text-5xl',
            description: 'text-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8',
            body: 'mt-8',
            features: 'gap-4'
        }">
        <template
            v-if="$slots.description"
            #description>
            <slot name="description" />
        </template>

        <template
            v-if="$slots.body"
            #body>
            <slot name="body" />
        </template>

        <template
            v-if="$slots.footer"
            #footer>
            <slot name="footer" />
        </template>

        <slot />
    </UPageSection>
</template>
