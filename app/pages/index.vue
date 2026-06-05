<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingDownloadCard from "~/components/landing/landing-download-card.vue";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingPageCard from "~/components/landing/landing-page-card.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const heroImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";
const placeImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

const participantItems = computed(() => {
    void locale.value;

    return [
        {
            title: t("pages.homePage.participants.items.demandingEnvironment.title"),
            description: t("pages.homePage.participants.items.demandingEnvironment.description")
        },
        {
            title: t("pages.homePage.participants.items.stressRegulation.title"),
            description: t("pages.homePage.participants.items.stressRegulation.description")
        },
        {
            title: t("pages.homePage.participants.items.resilience.title"),
            description: t("pages.homePage.participants.items.resilience.description")
        },
        {
            title: t("pages.homePage.participants.items.directExperience.title"),
            description: t("pages.homePage.participants.items.directExperience.description")
        },
        {
            title: t("pages.homePage.participants.items.naturalEnvironments.title"),
            description: t("pages.homePage.participants.items.naturalEnvironments.description")
        },
        {
            title: t("pages.homePage.participants.items.placeBasedLearning.title"),
            description: t("pages.homePage.participants.items.placeBasedLearning.description")
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
            title: t("pages.homePage.stepper.understand.title"),
            description: t("pages.homePage.stepper.understand.description")
        },
        {
            icon: "i-lucide-hand-heart",
            title: t("pages.homePage.stepper.experience.title"),
            description: t("pages.homePage.stepper.experience.description")
        },
        {
            icon: "i-lucide-send-to-back",
            title: t("pages.homePage.stepper.transfer.title"),
            description: t("pages.homePage.stepper.transfer.description")
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

const seminarSchedule = computed(() => [
    {
        title: t("pages.homePage.seminarSchedule.items.october2026.title"),
        description: t("pages.homePage.seminarSchedule.items.october2026.description"),
        icon: "i-lucide-calendar-x"
    },
    {
        title: t("pages.homePage.seminarSchedule.items.november2026.title"),
        description: t("pages.homePage.seminarSchedule.items.november2026.description"),
        icon: "i-lucide-calendar-check"
    },
    {
        title: t("pages.homePage.seminarSchedule.items.upcoming2027.title"),
        description: t("pages.homePage.seminarSchedule.items.upcoming2027.description"),
        icon: "i-lucide-mountain-snow"
    }
]);

const seminarScheduleLinks = computed<ButtonProps[]>(() => [
    {
        label: t("pages.homePage.seminarSchedule.actions.apply"),
        to: localePath("/contact"),
        color: "primary",
        trailingIcon: "i-lucide-arrow-right"
    },
    {
        label: t("pages.homePage.seminarSchedule.actions.requestInformation"),
        to: localePath("/contact"),
        color: "neutral",
        variant: "outline",
        trailingIcon: "i-lucide-arrow-right"
    }
]);

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

        <UPageSection
            :ui="{
                container: 'py-10 sm:py-14 lg:py-16',
                wrapper: 'mx-auto max-w-5xl'
            }">
            <div class="border-default rounded-lg border p-6 sm:p-8 lg:p-10">
                <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p class="text-secondary text-xs font-semibold tracking-[0.28em] uppercase">
                            {{ t("pages.homePage.seminarAbout.eyebrow") }}
                        </p>

                        <h2
                            class="text-highlighted mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                            {{ t("pages.homePage.seminarAbout.title") }}
                        </h2>
                    </div>

                    <div class="border-default space-y-5 lg:border-l lg:pl-8">
                        <p class="text-muted text-lg leading-8">
                            {{ t("pages.homePage.seminarAbout.intro") }}
                        </p>

                        <p class="text-muted leading-8">
                            {{ t("pages.homePage.seminarAbout.closing") }}
                        </p>
                    </div>
                </div>
            </div>
        </UPageSection>

        <UContainer>
            <LandingTakeaways />
        </UContainer>

        <UPageSection
            :title="t('pages.homePage.stepper.title')"
            :ui="{
                container: 'py-12 sm:py-16 lg:py-20',
                wrapper: 'mx-auto max-w-5xl',
                header: 'text-center',
                title: 'text-4xl sm:text-5xl',
                body: 'mt-10 space-y-8'
            }">
            <div class="mx-auto max-w-4xl">
                <UStepper
                    :items="contentMethodSteps"
                    :ui="{
                        root: 'w-full',
                        item: 'text-center',
                        title: 'text-highlighted text-sm font-semibold',
                        description: 'text-muted text-sm leading-5'
                    }" />
            </div>

            <div class="space-y-4">
                <LandingPageCard
                    :title="t('pages.homePage.contentMethods.methods.title')"
                    class="bg-elevated/70">
                    <LandingFeatureList
                        :items="methodIncludesItems"
                        compact />
                </LandingPageCard>

                <LandingDownloadCard
                    :label="t('pages.homePage.download.label')"
                    :file-name="t('pages.homePage.download.fileName')"
                    to="/documents/sample.pdf" />
            </div>
        </UPageSection>

        <LandingPageSection
            :title="t('pages.homePage.stepper.title')"
            orientation="horizontal"
            reverse>
            <ol class="mx-auto flex h-full max-w-[420px] flex-col justify-center gap-8">
                <li
                    v-for="(item, index) in contentMethodSteps"
                    :key="item.title"
                    class="relative flex gap-4">
                    <div
                        v-if="index !== contentMethodSteps.length - 1"
                        class="bg-border absolute top-10 left-5 h-[calc(100%+2rem)] w-px" />

                    <div
                        class="bg-primary/15 text-primary ring-primary/20 z-10 flex size-10 shrink-0 items-center justify-center rounded-full ring-1">
                        <UIcon
                            :name="item.icon"
                            class="size-5" />
                    </div>

                    <div>
                        <h3 class="text-highlighted text-sm font-semibold">
                            {{ item.title }}
                        </h3>

                        <p class="text-muted mt-1 text-sm leading-6">
                            {{ item.description }}
                        </p>
                    </div>
                </li>
            </ol>

            <template #body>
                <div class="flex h-full flex-col justify-center gap-4">
                    <LandingPageCard
                        :title="t('pages.homePage.contentMethods.methods.title')"
                        class="bg-elevated/70">
                        <LandingFeatureList
                            :items="methodIncludesItems"
                            compact />
                    </LandingPageCard>
                </div>
            </template>

            <template #footer>
                <LandingDownloadCard
                    :label="t('pages.homePage.download.label')"
                    :file-name="t('pages.homePage.download.fileName')"
                    to="/documents/sample.pdf" />
            </template>
        </LandingPageSection>

        <UPageSection
            class="m-0 p-0"
            :ui="{container: 'p-0 m-0'}">
            <div class="border-default bg-elevated/75 rounded-lg border p-5 sm:p-6 lg:p-8">
                <div class="grid gap-4 sm:grid-cols-5">
                    <div
                        v-for="item in infoItems"
                        :key="item.title"
                        class="border-default rounded-lg border bg-white/55 p-4 dark:bg-white/5">
                        <div
                            class="bg-primary/10 text-primary ring-primary/15 flex size-9 items-center justify-center rounded-md ring-1">
                            <UIcon
                                :name="item.icon"
                                class="text-primary size-6" />
                        </div>
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
        </UPageSection>

        <UPageSection
            title="Seminar Dates"
            :links="seminarScheduleLinks"
            :ui="{wrapper: 'flex flex-col gap-8'}">
            <template #body>
                <UPageGrid>
                    <UPageCard
                        v-for="(card, index) in seminarSchedule"
                        :key="index"
                        v-bind="card"
                        :ui="{
                            wrapper: 'flex flex-col flex-none items-center text-center',
                            leading: 'flex flex-row justify-center w-full',
                            leadingIcon: 'size-12 text-secondary',
                            body: 'flex flex-col gap-2 justify-center text-center',
                            title: 'whitespace-pre-line text-3xl font-semibold',
                            description: 'whitespace-pre-line text-muted'
                        }" />
                </UPageGrid>
            </template>
        </UPageSection>

        <LandingPageSection
            :eyebrow="t('pages.homePage.participants.eyebrow')"
            :title="t('pages.homePage.participants.title')"
            orientation="horizontal"
            reverse>
            <template #description>
                <p class="text-muted leading-8">
                    {{ t("pages.homePage.participants.description") }}
                </p>
            </template>

            <template #body>
                <div class="space-y-6">
                    <LandingFeatureList :items="participantItems" />
                    <p class="text-muted leading-8">
                        {{ t("pages.homePage.participants.closing") }}
                    </p>
                </div>
            </template>

            <div class="border-default bg-muted/40 overflow-hidden rounded-lg border">
                <NuxtImg
                    :src="processImage"
                    :alt="t('pages.homePage.participants.imageAlt')"
                    width="960"
                    height="720"
                    sizes="100vw sm:100vw lg:50vw"
                    class="aspect-[4/3] w-full object-cover" />
            </div>
        </LandingPageSection>

        <UPageSection
            :headline="t('pages.homePage.whyDahab.eyebrow')"
            :title="t('pages.homePage.whyDahab.title')"
            :description="t('pages.homePage.whyDahab.description')"
            orientation="horizontal"
            :ui="{
                description: 'whitespace-pre-line '
            }">
            <NuxtImg
                :src="placeImage"
                :alt="t('pages.homePage.whyDahab.imageAlt')"
                width="960"
                height="540"
                sizes="100vw sm:100vw lg:45vw"
                class="aspect-[16/9] w-full object-cover" />
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
    </div>
</template>
