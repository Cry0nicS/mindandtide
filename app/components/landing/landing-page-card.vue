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
        class="border-default rounded-lg"
        :class="props.class"
        :ui="{body: 'p-5 sm:p-6'}">
        <div
            :class="[
                props.orientation === 'horizontal' ? 'flex gap-5' : 'space-y-5',
                props.orientation === 'horizontal' && props.reverse ? 'flex-row-reverse' : '',
                props.orientation === 'horizontal' ? 'items-start' : ''
            ]">
            <div
                v-if="props.icon"
                class="bg-primary/10 text-primary ring-primary/15 flex shrink-0 items-center justify-center rounded-full ring-1"
                :class="[
                    props.orientation === 'horizontal' ? 'size-14' : 'size-12',
                    props.iconClass
                ]">
                <UIcon
                    :name="props.icon"
                    :class="props.orientation === 'horizontal' ? 'size-7' : 'size-6'" />
            </div>

            <div class="min-w-0 space-y-2">
                <h3
                    v-if="props.title"
                    class="text-highlighted text-lg leading-7 font-semibold">
                    {{ props.title }}
                </h3>
                <p
                    v-if="props.description"
                    class="text-muted leading-7">
                    {{ props.description }}
                </p>
                <slot />
            </div>
        </div>
    </UCard>
</template>
