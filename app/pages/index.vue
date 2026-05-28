<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingDownloadCard from "~/components/landing/landing-download-card.vue";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingIconFeature from "~/components/landing/landing-icon-feature.vue";
import LandingInfoGrid from "~/components/landing/landing-info-grid.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";
import LandingSchedule from "~/components/landing/landing-schedule.vue";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const heroImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";

const introParagraphs = computed(() => {
    void locale.value;

    return [
        t("pages.homePage.intro.paragraphs.first"),
        t("pages.homePage.intro.paragraphs.second"),
        t("pages.homePage.intro.paragraphs.third"),
        t("pages.homePage.intro.paragraphs.fourth")
    ];
});

const introFeatures = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-waves",
            title: t("pages.homePage.intro.features.experiential.title"),
            description: t("pages.homePage.intro.features.experiential.description")
        },
        {
            icon: "i-lucide-leaf",
            title: t("pages.homePage.intro.features.holistic.title"),
            description: t("pages.homePage.intro.features.holistic.description")
        },
        {
            icon: "i-lucide-users-round",
            title: t("pages.homePage.intro.features.personal.title"),
            description: t("pages.homePage.intro.features.personal.description")
        },
        {
            icon: "i-lucide-sun",
            title: t("pages.homePage.intro.features.nature.title"),
            description: t("pages.homePage.intro.features.nature.description")
        }
    ];
});

const goals = computed(() => {
    void locale.value;

    return [
        {description: t("pages.homePage.goals.items.patterns")},
        {description: t("pages.homePage.goals.items.resources")},
        {description: t("pages.homePage.goals.items.resilience")},
        {description: t("pages.homePage.goals.items.strategies")},
        {description: t("pages.homePage.goals.items.clarity")},
        {description: t("pages.homePage.goals.items.selfCare")},
        {description: t("pages.homePage.goals.items.capacity")}
    ];
});

const processItems = computed(() => {
    void locale.value;

    return [
        {
            title: t("pages.homePage.process.items.selfKnowledge.title"),
            description: t("pages.homePage.process.items.selfKnowledge.description")
        },
        {
            title: t("pages.homePage.process.items.resources.title"),
            description: t("pages.homePage.process.items.resources.description")
        },
        {
            title: t("pages.homePage.process.items.methods.title"),
            description: t("pages.homePage.process.items.methods.description")
        },
        {
            title: t("pages.homePage.process.items.resilience.title"),
            description: t("pages.homePage.process.items.resilience.description")
        },
        {
            title: t("pages.homePage.process.items.transfer.title"),
            description: t("pages.homePage.process.items.transfer.description")
        }
    ];
});

const infoItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-calendar-days",
            title: t("pages.homePage.organization.items.date.title"),
            description: t("pages.homePage.organization.items.date.description")
        },
        {
            icon: "i-lucide-map-pin",
            title: t("pages.homePage.organization.items.place.title"),
            description: t("pages.homePage.organization.items.place.description")
        },
        {
            icon: "i-lucide-users-round",
            title: t("pages.homePage.organization.items.group.title"),
            description: t("pages.homePage.organization.items.group.description")
        },
        {
            icon: "i-lucide-house",
            title: t("pages.homePage.organization.items.accommodation.title"),
            description: t("pages.homePage.organization.items.accommodation.description")
        },
        {
            icon: "i-lucide-clock",
            title: t("pages.homePage.organization.items.times.title"),
            description: t("pages.homePage.organization.items.times.description")
        }
    ];
});

const contactCta = computed<ButtonProps[]>(() => {
    return [
        {
            label: t("pages.homePage.cta.action"),
            to: localePath("/contact")
        }
    ];
});

useSeoMeta({
    title: () => t("pages.homePage.seo.title"),
    ogTitle: () => t("pages.homePage.seo.title"),
    description: () => t("pages.homePage.seo.description"),
    ogDescription: () => t("pages.homePage.seo.description")
});
</script>

<template>
    <div>
        <LandingHero
            :image-src="heroImage"
            :image-alt="t('pages.homePage.hero.imageAlt')"
            :eyebrow="t('pages.homePage.hero.eyebrow')"
            :title="t('pages.homePage.hero.title')"
            :subheadline="t('pages.homePage.hero.subheadline')"
            :supporting-text="t('pages.homePage.hero.supportingText')"
            :meta-text="t('pages.homePage.hero.meta')" />

        <UPageBody class="py-0">
            <LandingPageSection
                :eyebrow="t('pages.homePage.intro.eyebrow')"
                :title="t('pages.homePage.intro.title')"
                orientation="horizontal">
                <template #description>
                    <div class="space-y-5">
                        <p
                            v-for="paragraph in introParagraphs"
                            :key="paragraph"
                            class="text-muted leading-8">
                            {{ paragraph }}
                        </p>
                    </div>
                </template>

                <div class="grid gap-4">
                    <LandingIconFeature
                        v-for="feature in introFeatures"
                        :key="feature.title"
                        :icon="feature.icon"
                        :title="feature.title"
                        :description="feature.description" />
                </div>
            </LandingPageSection>

            <LandingPageSection
                :eyebrow="t('pages.homePage.goals.eyebrow')"
                :title="t('pages.homePage.goals.title')"
                orientation="horizontal"
                muted>
                <template #body>
                    <LandingFeatureList
                        :items="goals"
                        compact />
                </template>

                <div class="flex min-h-64 items-center justify-center">
                    <div
                        class="text-primary/70 border-primary/20 bg-elevated/35 flex size-48 items-center justify-center rounded-full border sm:size-56">
                        <UIcon
                            name="i-lucide-sunrise"
                            class="size-28 stroke-1 sm:size-36" />
                    </div>
                </div>
            </LandingPageSection>

            <LandingPageSection
                :eyebrow="t('pages.homePage.process.eyebrow')"
                :title="t('pages.homePage.process.title')"
                orientation="horizontal"
                reverse>
                <template #description>
                    <p class="text-muted leading-8">
                        {{ t("pages.homePage.process.description") }}
                    </p>
                </template>

                <template #body>
                    <div class="space-y-6">
                        <LandingFeatureList :items="processItems" />
                        <p class="text-muted leading-8">
                            {{ t("pages.homePage.process.closing") }}
                        </p>
                    </div>
                </template>

                <div class="border-default bg-muted/40 overflow-hidden rounded-lg border">
                    <NuxtImg
                        :src="processImage"
                        :alt="t('pages.homePage.process.imageAlt')"
                        width="960"
                        height="720"
                        sizes="100vw sm:100vw lg:50vw"
                        class="aspect-[4/3] w-full object-cover" />
                </div>
            </LandingPageSection>

            <LandingPageSection
                :eyebrow="t('pages.homePage.organization.eyebrow')"
                :title="t('pages.homePage.organization.title')"
                class="pt-0">
                <LandingInfoGrid :items="infoItems" />

                <div class="border-default mt-8 flex gap-3 border-t pt-6">
                    <UIcon
                        name="i-lucide-info"
                        class="text-primary mt-1 size-5 shrink-0" />
                    <p class="text-muted leading-7">
                        {{ t("pages.homePage.organization.note") }}
                    </p>
                </div>
            </LandingPageSection>

            <LandingSchedule />

            <LandingDownloadCard
                :label="t('pages.homePage.download.label')"
                :file-name="t('pages.homePage.download.fileName')"
                to="/documents/sample.pdf" />

            <UPageSection
                :title="t('pages.homePage.cta.title')"
                :description="t('pages.homePage.cta.description')"
                :action-label="t('pages.homePage.cta.action')"
                :links="contactCta"
                class="bg-muted/50"
                icon="i-lucide-waves"
                :ui="{
                    container: 'py-12 sm:py-14 lg:py-16',
                    wrapper: 'mx-auto max-w-2xl',
                    title: 'font-heading text-highlighted text-center text-2xl font-semibold tracking-tight sm:text-3xl',
                    description: 'text-muted mx-auto mt-3 max-w-xl text-center leading-7',
                    leadingIcon: 'text-secondary size-9 opacity-70'
                }" />
        </UPageBody>
    </div>
</template>
