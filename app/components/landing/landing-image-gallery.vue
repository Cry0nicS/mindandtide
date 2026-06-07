<script setup lang="ts">
interface GalleryImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface GalleryLabels {
    open: string;
    close: string;
    previous: string;
    next: string;
}

interface Props {
    images: GalleryImage[];
    labels?: Partial<GalleryLabels>;
}

const props = withDefaults(defineProps<Props>(), {
    labels: undefined
});

const fallbackLabels: GalleryLabels = {
    open: "Open image",
    close: "Close gallery",
    previous: "Previous image",
    next: "Next image"
};

const lightboxOpen = ref(false);
const activeIndex = ref(0);

const labels = computed<GalleryLabels>(() => ({
    ...fallbackLabels,
    ...props.labels
}));

const activeImage = computed(() => props.images[activeIndex.value]);
const hasMultipleImages = computed(() => props.images.length > 1);
const imageCounter = computed(() => `${activeIndex.value + 1} / ${props.images.length}`);

const masonryClasses = ["row-span-2", "", "", "row-span-2", "", "row-span-2", "md:col-span-2", ""];

function openImage(index: number) {
    activeIndex.value = index;
    lightboxOpen.value = true;
}

function showPrevious() {
    activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
}

function showNext() {
    activeIndex.value = (activeIndex.value + 1) % props.images.length;
}

function handleKeydown(event: KeyboardEvent) {
    if (!lightboxOpen.value || !hasMultipleImages.value) {
        return;
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
    }
}

watch(
    () => props.images.length,
    (length) => {
        if (length === 0) {
            lightboxOpen.value = false;
            activeIndex.value = 0;
            return;
        }

        if (activeIndex.value >= length) {
            activeIndex.value = length - 1;
        }
    }
);

onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
    <div class="landing-panel p-3 sm:p-4">
        <div
            class="grid grid-flow-dense auto-rows-[8.5rem] grid-cols-2 gap-3 sm:auto-rows-[10rem] md:grid-cols-3 lg:auto-rows-[11.5rem]">
            <button
                v-for="(image, index) in props.images"
                :key="image.src"
                type="button"
                class="group bg-muted ring-default focus-visible:ring-primary relative overflow-hidden rounded-lg text-left shadow-sm ring transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2"
                :class="masonryClasses[index % masonryClasses.length]"
                :aria-label="`${labels.open}: ${image.alt}`"
                @click="openImage(index)">
                <NuxtImg
                    :src="image.src"
                    :alt="image.alt"
                    :width="image.width"
                    :height="image.height"
                    :loading="index < 4 ? 'eager' : 'lazy'"
                    sizes="50vw sm:33vw lg:25vw"
                    class="size-full object-cover transition duration-500 group-hover:scale-105" />

                <span
                    class="from-coast-950/55 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100" />

                <span
                    class="text-coast-950 absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-white/90 opacity-100 shadow-sm transition sm:opacity-0 sm:group-hover:opacity-100">
                    <UIcon
                        name="i-lucide-maximize-2"
                        class="size-4" />
                </span>
            </button>
        </div>
    </div>

    <UModal
        v-model:open="lightboxOpen"
        fullscreen
        :close="false"
        :ui="{
            overlay: 'bg-coast-950/90 backdrop-blur-sm',
            content: 'bg-transparent shadow-none ring-0 outline-none'
        }">
        <template #content="{close}">
            <div class="bg-coast-950 relative flex h-dvh w-screen flex-col text-white">
                <div
                    class="absolute top-4 right-4 left-4 z-20 flex items-center justify-between gap-4 sm:top-6 sm:right-6 sm:left-6">
                    <p class="text-sm font-medium tracking-[0.16em] text-white/75 uppercase">
                        {{ imageCounter }}
                    </p>

                    <UButton
                        icon="i-lucide-x"
                        color="neutral"
                        variant="ghost"
                        size="xl"
                        :aria-label="labels.close"
                        class="text-white hover:bg-white/10 focus-visible:ring-white/40"
                        @click="close()" />
                </div>

                <UButton
                    v-if="hasMultipleImages"
                    icon="i-lucide-chevron-left"
                    color="neutral"
                    variant="ghost"
                    size="xl"
                    :aria-label="labels.previous"
                    class="absolute top-1/2 left-3 z-20 -translate-y-1/2 text-white hover:bg-white/10 focus-visible:ring-white/40 sm:left-6"
                    @click="showPrevious" />

                <figure
                    v-if="activeImage"
                    class="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-16 sm:px-16 sm:py-20">
                    <NuxtImg
                        :src="activeImage.src"
                        :alt="activeImage.alt"
                        :width="activeImage.width"
                        :height="activeImage.height"
                        sizes="100vw"
                        class="max-h-[calc(100dvh-15rem)] w-auto max-w-full rounded-lg object-contain shadow-2xl shadow-black/35" />
                </figure>

                <UButton
                    v-if="hasMultipleImages"
                    icon="i-lucide-chevron-right"
                    color="neutral"
                    variant="ghost"
                    size="xl"
                    :aria-label="labels.next"
                    class="absolute top-1/2 right-3 z-20 -translate-y-1/2 text-white hover:bg-white/10 focus-visible:ring-white/40 sm:right-6"
                    @click="showNext" />

                <div
                    v-if="hasMultipleImages"
                    class="absolute right-4 bottom-4 left-4 z-20 flex justify-center sm:bottom-6">
                    <div
                        class="flex max-w-full gap-2 overflow-x-auto rounded-lg bg-black/35 p-2 backdrop-blur">
                        <button
                            v-for="(image, index) in props.images"
                            :key="`thumb-${image.src}`"
                            type="button"
                            class="bg-muted size-14 shrink-0 overflow-hidden rounded-md ring-2 transition sm:size-16"
                            :class="
                                index === activeIndex
                                    ? 'ring-white'
                                    : 'opacity-60 ring-white/20 hover:opacity-100'
                            "
                            :aria-label="`${labels.open}: ${image.alt}`"
                            @click="activeIndex = index">
                            <NuxtImg
                                :src="image.src"
                                :alt="image.alt"
                                width="96"
                                height="96"
                                loading="lazy"
                                sizes="96px"
                                class="size-full object-cover" />
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </UModal>
</template>
