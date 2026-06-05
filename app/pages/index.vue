<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const heroImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80";
const seminarImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";
const retreatImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";

const heroLinks = computed<ButtonProps[]>(() => {
    void locale.value;

    return [
        {
            label: t("pages.indexPage.hero.seminarsAction"),
            to: localePath("/seminars"),
            color: "primary",
            trailingIcon: "i-lucide-arrow-right"
        },
        {
            label: t("pages.indexPage.hero.retreatsAction"),
            to: localePath("/retreats"),
            color: "neutral",
            variant: "outline",
            trailingIcon: "i-lucide-arrow-right"
        }
    ];
});

const storyItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-compass",
            title: t("pages.indexPage.story.items.place.title"),
            description: t("pages.indexPage.story.items.place.description")
        },
        {
            icon: "i-lucide-hand-heart",
            title: t("pages.indexPage.story.items.practice.title"),
            description: t("pages.indexPage.story.items.practice.description")
        },
        {
            icon: "i-lucide-sprout",
            title: t("pages.indexPage.story.items.transfer.title"),
            description: t("pages.indexPage.story.items.transfer.description")
        }
    ];
});

const pathwayCards = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-graduation-cap",
            image: seminarImage,
            alt: t("pages.indexPage.pathways.seminars.imageAlt"),
            eyebrow: t("pages.indexPage.pathways.seminars.eyebrow"),
            title: t("pages.indexPage.pathways.seminars.title"),
            description: t("pages.indexPage.pathways.seminars.description"),
            meta: t("pages.indexPage.pathways.seminars.meta"),
            action: t("pages.indexPage.pathways.seminars.action"),
            to: localePath("/seminars")
        },
        {
            icon: "i-lucide-waves",
            image: retreatImage,
            alt: t("pages.indexPage.pathways.retreats.imageAlt"),
            eyebrow: t("pages.indexPage.pathways.retreats.eyebrow"),
            title: t("pages.indexPage.pathways.retreats.title"),
            description: t("pages.indexPage.pathways.retreats.description"),
            meta: t("pages.indexPage.pathways.retreats.meta"),
            action: t("pages.indexPage.pathways.retreats.action"),
            to: localePath("/retreats")
        }
    ];
});

const contactLinks = computed<ButtonProps[]>(() => [
    {
        label: t("pages.indexPage.cta.action"),
        to: localePath("/contact"),
        color: "primary",
        trailingIcon: "i-lucide-arrow-right"
    }
]);

useSeoMeta({
    title: () => t("pages.indexPage.seo.title"),
    ogTitle: () => t("pages.indexPage.seo.title"),
    description: () => t("pages.indexPage.seo.description"),
    ogDescription: () => t("pages.indexPage.seo.description")
});
</script>

<template>
    <div class="pb-4">
        <LandingHero
            :image-src="heroImage"
            :image-alt="t('pages.indexPage.hero.imageAlt')"
            :eyebrow="t('pages.indexPage.hero.eyebrow')"
            :title="t('pages.indexPage.hero.title')"
            :subheadline="t('pages.indexPage.hero.subheadline')"
            :supporting-text="t('pages.indexPage.hero.supportingText')"
            :meta-text="t('pages.indexPage.hero.meta')"
            meta-icon="i-lucide-compass"
            :links="heroLinks" />

        <UPageSection
            :headline="t('pages.indexPage.story.eyebrow')"
            :title="t('pages.indexPage.story.title')"
            :description="t('pages.indexPage.story.description')"
            class="landing-section-strong landing-section-spaced"
            :ui="{
                container: 'py-12 sm:py-14 lg:py-16',
                wrapper: 'mx-auto max-w-3xl text-center',
                headline: 'landing-eyebrow',
                title: 'landing-title mx-auto max-w-3xl',
                description: 'landing-description mx-auto mt-5 max-w-3xl',
                body: 'mt-8'
            }">
            <div class="grid gap-4 lg:grid-cols-3">
                <LandingPageCard
                    v-for="item in storyItems"
                    :key="item.title"
                    :icon="item.icon"
                    :title="item.title"
                    :description="item.description"
                    class="h-full text-left" />
            </div>
        </UPageSection>

        <UPageSection
            :headline="t('pages.indexPage.pathways.eyebrow')"
            :title="t('pages.indexPage.pathways.title')"
            :description="t('pages.indexPage.pathways.description')"
            class="landing-section landing-section-spaced"
            :ui="{
                container: 'py-12 sm:py-16 lg:py-20',
                wrapper: 'mx-auto max-w-3xl text-center',
                headline: 'landing-eyebrow',
                title: 'landing-title mx-auto max-w-3xl',
                description: 'landing-description mx-auto mt-5 max-w-3xl',
                body: 'mt-8'
            }">
            <div class="grid gap-5 lg:grid-cols-2">
                <UCard
                    v-for="card in pathwayCards"
                    :key="card.title"
                    variant="subtle"
                    class="landing-card overflow-hidden text-left"
                    :ui="{body: 'p-0'}">
                    <NuxtImg
                        :src="card.image"
                        :alt="card.alt"
                        width="900"
                        height="560"
                        sizes="100vw lg:50vw"
                        class="aspect-[16/10] w-full object-cover" />

                    <div class="p-5 sm:p-6 lg:p-7">
                        <div class="flex items-start gap-4">
                            <div class="landing-icon landing-icon-secondary size-12">
                                <UIcon
                                    :name="card.icon"
                                    class="size-6" />
                            </div>

                            <div class="min-w-0">
                                <p class="landing-eyebrow">
                                    {{ card.eyebrow }}
                                </p>

                                <h2 class="landing-title-compact mt-3 text-2xl sm:text-3xl">
                                    {{ card.title }}
                                </h2>
                            </div>
                        </div>

                        <p class="landing-description mt-5 text-base">
                            {{ card.description }}
                        </p>

                        <p class="text-secondary mt-5 text-sm font-semibold">
                            {{ card.meta }}
                        </p>

                        <UButton
                            :to="card.to"
                            color="primary"
                            variant="subtle"
                            trailing-icon="i-lucide-arrow-right"
                            class="mt-6">
                            {{ card.action }}
                        </UButton>
                    </div>
                </UCard>
            </div>
        </UPageSection>

        <LandingPageSection
            :eyebrow="t('pages.indexPage.bridge.eyebrow')"
            :title="t('pages.indexPage.bridge.title')"
            orientation="horizontal"
            class="landing-section landing-section-spaced">
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t("pages.indexPage.bridge.description") }}
                </p>
            </template>

            <div class="landing-media-frame mx-auto w-full max-w-md">
                <NuxtImg
                    :src="retreatImage"
                    :alt="t('pages.indexPage.bridge.imageAlt')"
                    width="800"
                    height="1000"
                    sizes="100vw lg:40vw"
                    class="aspect-[4/5] w-full object-cover" />
            </div>
        </LandingPageSection>

        <UPageSection
            :title="t('pages.indexPage.cta.title')"
            :description="t('pages.indexPage.cta.description')"
            :links="contactLinks"
            class="landing-section-strong landing-section-spaced"
            icon="i-lucide-send"
            :ui="{
                container: 'py-12 sm:py-14 lg:py-16',
                wrapper: 'mx-auto max-w-2xl text-center',
                title: 'landing-title-compact text-center text-2xl sm:text-3xl',
                description: 'landing-description mx-auto mt-3 max-w-xl text-center text-base',
                leadingIcon: 'text-secondary size-9 opacity-80',
                links: 'justify-center'
            }" />
    </div>
</template>
