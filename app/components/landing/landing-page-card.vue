<script setup lang="ts">
type CardOrientation = "horizontal" | "vertical";
type CardVariant = "solid" | "outline" | "soft" | "subtle";

interface Props {
    icon?: string;
    title?: string;
    description?: string;
    orientation?: CardOrientation;
    variant?: CardVariant;
    reverse?: boolean;
    class?: string;
    iconClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: undefined,
    title: undefined,
    description: undefined,
    orientation: "vertical",
    variant: "subtle",
    reverse: false,
    class: undefined,
    iconClass: undefined
});
</script>

<template>
    <UCard
        :variant="props.variant"
        class="landing-card"
        :class="props.class"
        :ui="{body: 'p-5 sm:p-6 lg:p-7'}">
        <div
            :class="[
                props.orientation === 'horizontal' ? 'flex gap-5' : 'space-y-5',
                props.orientation === 'horizontal' && props.reverse ? 'flex-row-reverse' : '',
                props.orientation === 'horizontal' ? 'items-start' : ''
            ]">
            <div
                v-if="props.icon"
                class="landing-icon"
                :class="[
                    props.orientation === 'horizontal' ? 'size-12' : 'size-11',
                    props.iconClass
                ]">
                <UIcon
                    :name="props.icon"
                    :class="props.orientation === 'horizontal' ? 'size-6' : 'size-5'" />
            </div>

            <div class="min-w-0 space-y-2">
                <h3
                    v-if="props.title"
                    class="text-highlighted text-base leading-6 font-semibold text-pretty sm:text-lg sm:leading-7">
                    {{ props.title }}
                </h3>
                <p
                    v-if="props.description"
                    class="text-muted text-sm leading-6 sm:text-base sm:leading-7">
                    {{ props.description }}
                </p>
                <slot />
            </div>
        </div>
    </UCard>
</template>
