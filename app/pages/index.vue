<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingDownloadCard from "~/components/landing/landing-download-card.vue";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingInfoGrid from "~/components/landing/landing-info-grid.vue";
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
    <div class="pb-4">
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
                container: 'px-0 sm:px-0 lg:px-0 py-12 sm:py-16 lg:py-20',
                wrapper: 'mx-auto max-w-5xl'
            }">
            <div
                class="border-default bg-elevated/55 rounded-lg border p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
                <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p class="text-secondary text-xs font-semibold tracking-[0.28em] uppercase">
                            {{ t("pages.homePage.seminarAbout.eyebrow") }}
                        </p>

                        <h2
                            class="text-highlighted mt-4 text-3xl leading-tight font-semibold text-pretty sm:text-4xl lg:text-5xl">
                            {{ t("pages.homePage.seminarAbout.title") }}
                        </h2>
                    </div>

                    <div class="border-default space-y-5 lg:border-l lg:pl-10">
                        <p class="text-muted text-base leading-7 sm:text-lg sm:leading-8">
                            {{ t("pages.homePage.seminarAbout.intro") }}
                        </p>

                        <p class="text-muted leading-7 sm:leading-8">
                            {{ t("pages.homePage.seminarAbout.closing") }}
                        </p>
                    </div>
                </div>
            </div>
        </UPageSection>

        <LandingTakeaways />

        <UPageSection
            :title="t('pages.homePage.stepper.title')"
            class="border-default bg-elevated/45 mt-10 rounded-lg border shadow-sm backdrop-blur sm:mt-12 lg:mt-14"
            :ui="{
                container: 'py-8 sm:py-10 lg:py-12',
                wrapper: 'mx-auto max-w-2xl',
                header: 'text-center',
                title: 'font-heading text-highlighted text-3xl font-semibold leading-tight text-pretty sm:text-4xl lg:text-5xl',
                body: 'mt-8 space-y-6 sm:space-y-8'
            }">
            <div
                class="border-default bg-muted/30 mx-auto max-w-4xl rounded-lg border p-4 sm:p-6 lg:p-8">
                <UStepper
                    :items="contentMethodSteps"
                    :ui="{
                        root: 'w-full',
                        header: 'gap-2 sm:gap-4',
                        trigger: 'bg-elevated ring ring-primary/20',
                        separator: 'bg-accented',
                        item: 'text-center',
                        title: 'text-highlighted text-xs font-semibold sm:text-sm',
                        description: 'text-muted text-xs leading-5 sm:text-sm'
                    }" />
            </div>

            <div class="space-y-4">
                <LandingPageCard :title="t('pages.homePage.contentMethods.methods.title')">
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
            reverse
            class="border-default bg-elevated/45 mt-10 rounded-lg border shadow-sm backdrop-blur sm:mt-12 lg:mt-14">
            <ol
                class="border-default bg-muted/30 mx-auto flex h-full max-w-[440px] flex-col justify-center gap-8 rounded-lg border p-5 sm:p-6">
                <li
                    v-for="(item, index) in contentMethodSteps"
                    :key="item.title"
                    class="relative flex gap-4">
                    <div
                        v-if="index !== contentMethodSteps.length - 1"
                        class="bg-accented absolute top-10 left-5 h-[calc(100%+2rem)] w-px" />

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
                    <LandingPageCard :title="t('pages.homePage.contentMethods.methods.title')">
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
            :ui="{
                container: 'px-0 sm:px-0 lg:px-0 py-12 sm:py-16 lg:py-20',
                wrapper: 'mx-auto max-w-6xl'
            }">
            <div
                class="border-default bg-elevated/55 rounded-lg border p-5 shadow-sm backdrop-blur sm:p-6 lg:p-8">
                <LandingInfoGrid :items="infoItems" />

                <div class="border-default mt-6 flex gap-3 border-t pt-5 sm:mt-8 sm:pt-6">
                    <UIcon
                        name="i-lucide-info"
                        class="text-primary mt-1 size-5 shrink-0" />
                    <p class="text-muted text-sm leading-6 sm:text-base sm:leading-7">
                        {{ t("pages.homePage.organization.note") }}
                    </p>
                </div>
            </div>
        </UPageSection>

        <UPageSection
            title="Seminar Dates"
            :links="seminarScheduleLinks"
            class="border-default bg-elevated/45 rounded-lg border shadow-sm backdrop-blur"
            :ui="{
                container: 'py-8 sm:py-10 lg:py-12',
                wrapper: 'mx-auto max-w-2xl text-center',
                header: 'text-center',
                title: 'font-heading text-highlighted text-3xl font-semibold leading-tight text-pretty sm:text-4xl',
                body: 'mt-8',
                footer: 'mt-8',
                links: 'justify-center gap-3'
            }">
            <template #body>
                <div class="grid gap-4 sm:grid-cols-3">
                    <div
                        v-for="(card, index) in seminarSchedule"
                        :key="index"
                        class="border-default bg-muted/30 flex h-full flex-col items-center rounded-lg border p-5 text-center sm:p-6">
                        <div
                            class="bg-secondary/10 text-secondary ring-secondary/20 flex size-12 items-center justify-center rounded-lg ring-1">
                            <UIcon
                                :name="card.icon"
                                class="size-6" />
                        </div>

                        <h3
                            class="text-highlighted mt-4 text-2xl leading-tight font-semibold whitespace-pre-line">
                            {{ card.title }}
                        </h3>

                        <p class="text-muted mt-3 text-sm leading-6 whitespace-pre-line">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </template>
        </UPageSection>

        <LandingPageSection
            :eyebrow="t('pages.homePage.participants.eyebrow')"
            :title="t('pages.homePage.participants.title')"
            orientation="horizontal"
            reverse
            class="border-default bg-elevated/45 mt-10 rounded-lg border shadow-sm backdrop-blur sm:mt-12 lg:mt-14">
            <template #description>
                <p class="text-muted leading-7 sm:text-lg sm:leading-8">
                    {{ t("pages.homePage.participants.description") }}
                </p>
            </template>

            <template #body>
                <div class="space-y-6">
                    <LandingFeatureList :items="participantItems" />
                    <p class="text-muted leading-7 sm:leading-8">
                        {{ t("pages.homePage.participants.closing") }}
                    </p>
                </div>
            </template>

            <div class="mx-auto w-full max-w-md">
                <NuxtImg
                    :src="processImage"
                    :alt="t('pages.homePage.participants.imageAlt')"
                    width="800"
                    height="1000"
                    sizes="100vw sm:100vw lg:40vw"
                    class="aspect-[4/5] w-full rounded-lg object-cover" />
            </div>
        </LandingPageSection>

        <LandingPageSection
            :eyebrow="t('pages.homePage.whyDahab.eyebrow')"
            :title="t('pages.homePage.whyDahab.title')"
            orientation="horizontal"
            class="border-default bg-elevated/45 mt-10 rounded-lg border shadow-sm backdrop-blur sm:mt-12 lg:mt-14">
            <template #description>
                <p class="text-muted leading-7 whitespace-pre-line sm:text-lg sm:leading-8">
                    {{ t("pages.homePage.whyDahab.description") }}
                </p>
            </template>

            <div class="mx-auto w-full max-w-md">
                <NuxtImg
                    :src="placeImage"
                    :alt="t('pages.homePage.whyDahab.imageAlt')"
                    width="800"
                    height="1000"
                    sizes="100vw sm:100vw lg:40vw"
                    class="aspect-[4/5] w-full rounded-lg object-cover" />
            </div>
        </LandingPageSection>

        <UPageSection
            :title="t('pages.homePage.cta.title')"
            :description="t('pages.homePage.cta.description')"
            :action-label="t('pages.homePage.cta.action')"
            :links="contactCta"
            class="border-default bg-elevated/55 mt-10 rounded-lg border shadow-sm backdrop-blur sm:mt-12 lg:mt-14"
            icon="i-lucide-waves"
            :ui="{
                container: 'py-12 sm:py-14 lg:py-16',
                wrapper: 'mx-auto max-w-2xl',
                title: 'font-heading text-highlighted text-center text-2xl leading-tight font-semibold sm:text-3xl',
                description: 'text-muted mx-auto mt-3 max-w-xl text-center leading-7',
                leadingIcon: 'text-secondary size-9 opacity-80',
                links: 'justify-center'
            }" />
    </div>
</template>
