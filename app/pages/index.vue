<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingDownloadCard from "~/components/landing/landing-download-card.vue";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingIconFeature from "~/components/landing/landing-icon-feature.vue";
import LandingPageCard from "~/components/landing/landing-page-card.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";
import LandingSchedule from "~/components/landing/landing-schedule.vue";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const heroImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";
const placeImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

const summaryHighlights = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-map",
            title: t("pages.homePage.writerSummary.highlights.place.title"),
            description: t("pages.homePage.writerSummary.highlights.place.description")
        },
        {
            icon: "i-lucide-route",
            title: t("pages.homePage.writerSummary.highlights.method.title"),
            description: t("pages.homePage.writerSummary.highlights.method.description")
        },
        {
            icon: "i-lucide-briefcase-business",
            title: t("pages.homePage.writerSummary.highlights.transfer.title"),
            description: t("pages.homePage.writerSummary.highlights.transfer.description")
        }
    ];
});

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

const contentIncludesItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-brain",
            description: t("pages.homePage.contentMethods.content.items.stressDevelopment")
        },
        {
            icon: "i-lucide-activity",
            description: t("pages.homePage.contentMethods.content.items.nervousSystem")
        },
        {
            icon: "i-lucide-fingerprint",
            description: t("pages.homePage.contentMethods.content.items.personalPatterns")
        },
        {
            icon: "i-lucide-map-pin",
            description: t("pages.homePage.contentMethods.content.items.environment")
        },
        {
            icon: "i-lucide-arrow-right-left",
            description: t("pages.homePage.contentMethods.content.items.transfer")
        }
    ];
});

const methodIncludesItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-notebook-pen",
            description: t("pages.homePage.contentMethods.methods.items.reflection")
        },
        {
            icon: "i-lucide-person-standing",
            description: t("pages.homePage.contentMethods.methods.items.body")
        },
        {
            icon: "i-lucide-wind",
            description: t("pages.homePage.contentMethods.methods.items.breath")
        },
        {
            icon: "i-lucide-camera",
            description: t("pages.homePage.contentMethods.methods.items.photography")
        },
        {
            icon: "i-lucide-waves",
            description: t("pages.homePage.contentMethods.methods.items.floating")
        }
    ];
});

const contentMethodSteps = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-search-check",
            title: t("pages.homePage.contentMethods.steps.understand.title"),
            description: t("pages.homePage.contentMethods.steps.understand.description")
        },
        {
            icon: "i-lucide-hand-heart",
            title: t("pages.homePage.contentMethods.steps.experience.title"),
            description: t("pages.homePage.contentMethods.steps.experience.description")
        },
        {
            icon: "i-lucide-send-to-back",
            title: t("pages.homePage.contentMethods.steps.transfer.title"),
            description: t("pages.homePage.contentMethods.steps.transfer.description")
        }
    ];
});

const formatEssentials = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-calendar-days",
            title: t("pages.homePage.programEssentials.items.duration.title"),
            description: t("pages.homePage.programEssentials.items.duration.description")
        },
        {
            icon: "i-lucide-clock-3",
            title: t("pages.homePage.programEssentials.items.units.title"),
            description: t("pages.homePage.programEssentials.items.units.description")
        },
        {
            icon: "i-lucide-users-round",
            title: t("pages.homePage.programEssentials.items.group.title"),
            description: t("pages.homePage.programEssentials.items.group.description")
        },
        {
            icon: "i-lucide-map-pin",
            title: t("pages.homePage.programEssentials.items.location.title"),
            description: t("pages.homePage.programEssentials.items.location.description")
        },
        {
            icon: "i-lucide-languages",
            title: t("pages.homePage.programEssentials.items.language.title"),
            description: t("pages.homePage.programEssentials.items.language.description")
        },
        {
            icon: "i-lucide-files",
            title: t("pages.homePage.programEssentials.items.materials.title"),
            description: t("pages.homePage.programEssentials.items.materials.description")
        }
    ];
});

const submittedGoalItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-chart-no-axes-combined",
            description: t("pages.homePage.additionalGoals.items.models")
        },
        {
            icon: "i-lucide-scan-heart",
            description: t("pages.homePage.additionalGoals.items.patterns")
        },
        {
            icon: "i-lucide-tool-case",
            description: t("pages.homePage.additionalGoals.items.methods")
        },
        {
            icon: "i-lucide-sprout",
            description: t("pages.homePage.additionalGoals.items.resources")
        },
        {
            icon: "i-lucide-map-plus",
            description: t("pages.homePage.additionalGoals.items.strategies")
        },
        {
            icon: "i-lucide-clipboard-check",
            description: t("pages.homePage.additionalGoals.items.evaluation")
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

const organizationPrimaryItems = computed(() => infoItems.value.slice(0, 3));
const organizationSupportItems = computed(() => infoItems.value.slice(3));

const teamItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-circle-user-round",
            title: t("pages.homePage.team.items.silvia.title"),
            description: t("pages.homePage.team.items.silvia.description")
        },
        {
            icon: "i-lucide-wind",
            title: t("pages.homePage.team.items.marcus.title"),
            description: t("pages.homePage.team.items.marcus.description")
        },
        {
            icon: "i-lucide-waves",
            title: t("pages.homePage.team.items.ahmad.title"),
            description: t("pages.homePage.team.items.ahmad.description")
        }
    ];
});

const teamImages = [
    "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=368&q=80",
    "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=368&q=80",
    "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=368&q=80"
];

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
            <LandingPageSection class="pb-0">
                <div
                    class="border-default bg-elevated/80 overflow-hidden rounded-lg border shadow-sm">
                    <div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                        <div class="p-6 sm:p-8 lg:p-10">
                            <p
                                class="text-secondary text-xs font-semibold tracking-[0.26em] uppercase">
                                {{ t("pages.homePage.writerSummary.eyebrow") }}
                            </p>

                            <h2
                                class="font-heading text-highlighted mt-4 max-w-2xl text-3xl leading-tight font-semibold text-pretty sm:text-4xl">
                                {{ t("pages.homePage.writerSummary.title") }}
                            </h2>

                            <p class="text-muted mt-5 max-w-2xl text-base leading-8 sm:text-lg">
                                {{ t("pages.homePage.writerSummary.text") }}
                            </p>
                        </div>

                        <div
                            class="border-default bg-muted/40 grid border-t lg:border-t-0 lg:border-l">
                            <div
                                v-for="item in summaryHighlights"
                                :key="item.title"
                                class="border-default flex items-center gap-4 border-b p-5 last:border-b-0 sm:p-6">
                                <span
                                    class="bg-primary/10 text-primary ring-primary/15 flex size-11 shrink-0 items-center justify-center rounded-md ring-1">
                                    <UIcon
                                        :name="item.icon"
                                        class="size-5" />
                                </span>

                                <span>
                                    <span class="text-highlighted block font-semibold">
                                        {{ item.title }}
                                    </span>
                                    <span class="text-muted mt-1 block text-sm leading-6">
                                        {{ item.description }}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </LandingPageSection>

            <LandingPageSection
                :eyebrow="t('pages.homePage.intro.eyebrow')"
                :title="t('pages.homePage.intro.title')"
                orientation="horizontal"
                :reverse="true">
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

            <UPageSection
                :title="t('pages.homePage.seminarAbout.title')"
                :description="t('pages.homePage.seminarAbout.description')" />

            <UContainer>
                <LandingTakeaways />
            </UContainer>

            <UPageSection
                :headline="t('pages.homePage.contentMethods.eyebrow')"
                :title="t('pages.homePage.contentMethods.title')"
                :description="t('pages.homePage.contentMethods.description')"
                :ui="{
                    headline: 'text-secondary text-xs font-semibold uppercase tracking-[0.26em]',
                    title: 'font-heading text-highlighted text-3xl font-semibold leading-tight tracking-tight text-pretty sm:text-4xl lg:text-5xl',
                    description: 'text-muted text-base leading-8 sm:text-lg',
                    body: 'mt-6',
                    features: 'gap-4'
                }">
                <div class="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                    <div
                        class="border-default bg-elevated/70 flex h-full items-center rounded-lg border p-5 sm:p-6 lg:p-8">
                        <div class="space-y-5">
                            <div
                                v-for="(step, index) in contentMethodSteps"
                                :key="step.title"
                                class="grid grid-cols-[auto_1fr] gap-4">
                                <div class="flex flex-col items-center">
                                    <span
                                        class="bg-primary/10 text-primary ring-primary/15 flex size-12 items-center justify-center rounded-full ring-1">
                                        <UIcon
                                            :name="step.icon"
                                            class="size-6" />
                                    </span>
                                    <span
                                        v-if="index < contentMethodSteps.length - 1"
                                        class="mt-3 h-full w-px bg-[var(--ui-border)]" />
                                </div>

                                <div class="pb-5 last:pb-0">
                                    <p
                                        class="text-secondary text-xs font-semibold tracking-[0.18em] uppercase">
                                        {{ String(index + 1).padStart(2, "0") }}
                                    </p>
                                    <h3
                                        class="text-highlighted mt-1 text-lg leading-7 font-semibold">
                                        {{ step.title }}
                                    </h3>
                                    <p class="text-muted mt-2 leading-7">
                                        {{ step.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid h-full gap-4 lg:grid-rows-2">
                        <LandingPageCard
                            :title="t('pages.homePage.contentMethods.content.title')"
                            class="bg-elevated/70">
                            <LandingFeatureList
                                :items="contentIncludesItems"
                                compact />
                        </LandingPageCard>

                        <LandingPageCard
                            :title="t('pages.homePage.contentMethods.methods.title')"
                            class="bg-elevated/70">
                            <LandingFeatureList
                                :items="methodIncludesItems"
                                compact />
                        </LandingPageCard>
                    </div>
                </div>
            </UPageSection>

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

            <UPageSection
                :title="t('pages.homePage.programEssentials.title')"
                class="pt-0">
                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <LandingPageCard
                        v-for="item in formatEssentials"
                        :key="item.title"
                        :icon="item.icon"
                        :title="item.title"
                        :description="item.description"
                        class="bg-elevated/70 h-full"
                        icon-class="rounded-md bg-transparent ring-0 text-primary size-10" />
                </div>
            </UPageSection>

            <UPageSection
                :headline="t('pages.homePage.organization.eyebrow')"
                :title="t('pages.homePage.organization.title')"
                class="pt-0">
                <div class="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                    <div class="border-default bg-elevated/75 rounded-lg border p-5 sm:p-6 lg:p-8">
                        <div class="grid gap-4 sm:grid-cols-3">
                            <div
                                v-for="item in organizationPrimaryItems"
                                :key="item.title"
                                class="border-default rounded-lg border bg-white/55 p-4 dark:bg-white/5">
                                <UIcon
                                    :name="item.icon"
                                    class="text-primary size-6" />
                                <h3 class="text-highlighted mt-4 text-lg font-semibold">
                                    {{ item.title }}
                                </h3>
                                <p class="text-muted mt-2 text-sm leading-6">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>

                        <div class="border-default mt-6 flex gap-3 border-t pt-5">
                            <UIcon
                                name="i-lucide-info"
                                class="text-primary mt-1 size-5 shrink-0" />
                            <p class="text-muted leading-7">
                                {{ t("pages.homePage.organization.note") }}
                            </p>
                        </div>
                    </div>

                    <div class="grid gap-4">
                        <LandingPageCard
                            v-for="item in organizationSupportItems"
                            :key="item.title"
                            :icon="item.icon"
                            :title="item.title"
                            :description="item.description"
                            class="bg-elevated/70 h-full"
                            icon-class="rounded-md bg-transparent ring-0 text-primary size-10"
                            orientation="horizontal" />
                    </div>
                </div>
            </UPageSection>

            <UPageSection
                :title="t('pages.homePage.schedule.title')"
                :description="t('pages.homePage.schedule.description')"
                class="pt-0">
                <LandingSchedule />
                <LandingDownloadCard
                    :label="t('pages.homePage.download.label')"
                    :file-name="t('pages.homePage.download.fileName')"
                    to="/documents/sample.pdf" />
            </UPageSection>

            <LandingPageSection class="pt-0">
                <div class="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
                    <div class="border-default bg-elevated/75 rounded-lg border p-5 sm:p-6 lg:p-8">
                        <p class="text-secondary text-xs font-semibold tracking-[0.24em] uppercase">
                            {{ t("pages.homePage.additionalGoals.eyebrow") }}
                        </p>
                        <h2
                            class="font-heading text-highlighted mt-3 text-3xl leading-tight font-semibold text-pretty sm:text-4xl">
                            {{ t("pages.homePage.additionalGoals.title") }}
                        </h2>

                        <div class="mt-6 grid gap-3 sm:grid-cols-2">
                            <div
                                v-for="item in submittedGoalItems"
                                :key="item.description"
                                class="flex gap-3 rounded-lg bg-white/55 p-3 dark:bg-white/5">
                                <UIcon
                                    :name="item.icon"
                                    class="text-primary mt-1 size-5 shrink-0" />
                                <p class="text-muted text-sm leading-6">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="border-default bg-elevated/75 overflow-hidden rounded-lg border">
                        <NuxtImg
                            :src="placeImage"
                            :alt="t('pages.homePage.whyDahab.imageAlt')"
                            width="960"
                            height="540"
                            sizes="100vw sm:100vw lg:45vw"
                            class="aspect-[16/9] w-full object-cover" />

                        <div class="p-5 sm:p-6 lg:p-8">
                            <p
                                class="text-secondary text-xs font-semibold tracking-[0.24em] uppercase">
                                {{ t("pages.homePage.whyDahab.eyebrow") }}
                            </p>
                            <h2
                                class="font-heading text-highlighted mt-3 text-3xl leading-tight font-semibold">
                                {{ t("pages.homePage.whyDahab.title") }}
                            </h2>
                            <p class="text-muted mt-4 leading-7">
                                {{ t("pages.homePage.whyDahab.description") }}
                            </p>
                        </div>
                    </div>
                </div>
            </LandingPageSection>

            <UPageSection
                :title="t('pages.homePage.team.title')"
                class="pt-0"
                :ui="{
                    title: 'font-heading text-highlighted text-4xl font-semibold tracking-tight sm:text-5xl',
                    body: 'mt-8'
                }">
                <div class="grid gap-5 md:grid-cols-3">
                    <article
                        v-for="(item, index) in teamItems"
                        :key="item.title"
                        class="border-default bg-elevated/70 group overflow-hidden rounded-lg border">
                        <div class="bg-primary/5 relative aspect-[4/3] overflow-hidden">
                            <NuxtImg
                                :src="teamImages[index]"
                                :alt="item.title"
                                class="size-full object-cover opacity-80 saturate-[0.85] transition duration-500 group-hover:scale-105 group-hover:opacity-90" />

                            <div
                                class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-elevated)/90 via-(--ui-bg-elevated)/20 to-transparent" />

                            <div
                                class="bg-primary/10 text-primary ring-primary/15 absolute top-5 left-5 flex size-12 items-center justify-center rounded-md ring-1 backdrop-blur">
                                <UIcon
                                    :name="item.icon"
                                    class="size-6" />
                            </div>
                        </div>

                        <div class="p-5 sm:p-6">
                            <h3 class="text-highlighted text-xl leading-7 font-semibold">
                                {{ item.title }}
                            </h3>

                            <p class="text-muted mt-2 leading-7">
                                {{ item.description }}
                            </p>
                        </div>
                    </article>
                </div>
            </UPageSection>

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
