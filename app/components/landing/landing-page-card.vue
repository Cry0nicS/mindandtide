<script setup lang="ts">
type CardOrientation = "horizontal" | "vertical";

interface Props {
    icon?: string;
    title?: string;
    description?: string;
    orientation?: CardOrientation;
    reverse?: boolean;
    class?: string;
    iconClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: undefined,
    title: undefined,
    description: undefined,
    orientation: "vertical",
    reverse: false,
    class: undefined,
    iconClass: undefined
});
</script>

<template>
    <UCard
        variant="subtle"
        class="border-default bg-elevated/70 rounded-lg border shadow-sm backdrop-blur"
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
                class="bg-primary/10 text-primary ring-primary/20 flex shrink-0 items-center justify-center rounded-lg ring-1"
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
