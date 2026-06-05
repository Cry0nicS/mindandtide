<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingDownloadCard from "~/components/landing/landing-download-card.vue";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingInfoGrid from "~/components/landing/landing-info-grid.vue";
import LandingPageCard from "~/components/landing/landing-page-card.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";

interface Props {
    contentKey: string;
    heroImage: string;
    processImage: string;
    placeImage: string;
}

const props = defineProps<Props>();

const {locale, t} = useI18n();
const localePath = useLocalePath();

const tk = (path: string) => `${props.contentKey}.${path}`;

const participantItems = computed(() => {
    void locale.value;

    return [
        {
            title: t(tk("participants.items.demandingEnvironment.title")),
            description: t(tk("participants.items.demandingEnvironment.description"))
        },
        {
            title: t(tk("participants.items.stressRegulation.title")),
            description: t(tk("participants.items.stressRegulation.description"))
        },
        {
            title: t(tk("participants.items.resilience.title")),
            description: t(tk("participants.items.resilience.description"))
        },
        {
            title: t(tk("participants.items.directExperience.title")),
            description: t(tk("participants.items.directExperience.description"))
        },
        {
            title: t(tk("participants.items.naturalEnvironments.title")),
            description: t(tk("participants.items.naturalEnvironments.description"))
        },
        {
            title: t(tk("participants.items.placeBasedLearning.title")),
            description: t(tk("participants.items.placeBasedLearning.description"))
        }
    ];
});

const methodIncludesItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-notebook-pen",
            description: t(tk("contentMethods.methods.items.reflection"))
        },
        {
            icon: "i-lucide-person-standing",
            description: t(tk("contentMethods.methods.items.body"))
        },
        {
            icon: "i-lucide-wind",
            description: t(tk("contentMethods.methods.items.breath"))
        },
        {
            icon: "i-lucide-camera",
            description: t(tk("contentMethods.methods.items.photography"))
        },
        {
            icon: "i-lucide-waves",
            description: t(tk("contentMethods.methods.items.floating"))
        }
    ];
});

const contentMethodSteps = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-search-check",
            title: t(tk("stepper.understand.title")),
            description: t(tk("stepper.understand.description"))
        },
        {
            icon: "i-lucide-hand-heart",
            title: t(tk("stepper.experience.title")),
            description: t(tk("stepper.experience.description"))
        },
        {
            icon: "i-lucide-send-to-back",
            title: t(tk("stepper.transfer.title")),
            description: t(tk("stepper.transfer.description"))
        }
    ];
});

const infoItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-calendar-days",
            title: t(tk("organization.items.date.title")),
            description: t(tk("organization.items.date.description"))
        },
        {
            icon: "i-lucide-map-pin",
            title: t(tk("organization.items.place.title")),
            description: t(tk("organization.items.place.description"))
        },
        {
            icon: "i-lucide-users-round",
            title: t(tk("organization.items.group.title")),
            description: t(tk("organization.items.group.description"))
        },
        {
            icon: "i-lucide-house",
            title: t(tk("organization.items.accommodation.title")),
            description: t(tk("organization.items.accommodation.description"))
        },
        {
            icon: "i-lucide-clock",
            title: t(tk("organization.items.times.title")),
            description: t(tk("organization.items.times.description"))
        }
    ];
});

const contactCta = computed<ButtonProps[]>(() => {
    return [
        {
            label: t(tk("cta.action")),
            to: localePath("/contact")
        }
    ];
});

const seminarSchedule = computed(() => [
    {
        title: t(tk("seminarSchedule.items.october2026.title")),
        description: t(tk("seminarSchedule.items.october2026.description")),
        icon: "i-lucide-calendar-x"
    },
    {
        title: t(tk("seminarSchedule.items.november2026.title")),
        description: t(tk("seminarSchedule.items.november2026.description")),
        icon: "i-lucide-calendar-check"
    },
    {
        title: t(tk("seminarSchedule.items.upcoming2027.title")),
        description: t(tk("seminarSchedule.items.upcoming2027.description")),
        icon: "i-lucide-mountain-snow"
    }
]);

const seminarScheduleLinks = computed<ButtonProps[]>(() => [
    {
        label: t(tk("seminarSchedule.actions.apply")),
        to: localePath("/contact"),
        color: "primary",
        trailingIcon: "i-lucide-arrow-right"
    },
    {
        label: t(tk("seminarSchedule.actions.requestInformation")),
        to: localePath("/contact"),
        color: "neutral",
        variant: "outline",
        trailingIcon: "i-lucide-arrow-right"
    }
]);

useSeoMeta({
    title: () => t(tk("seo.title")),
    ogTitle: () => t(tk("seo.title")),
    description: () => t(tk("seo.description")),
    ogDescription: () => t(tk("seo.description"))
});
</script>

<template>
    <div class="pb-4">
        <LandingHero
            :image-src="props.heroImage"
            :image-alt="t(tk('hero.imageAlt'))"
            :eyebrow="t(tk('hero.eyebrow'))"
            :title="t(tk('hero.title'))"
            :subheadline="t(tk('hero.subheadline'))"
            :supporting-text="t(tk('hero.supportingText'))"
            :meta-text="t(tk('hero.meta'))" />

        <UPageSection
            :ui="{
                container: 'px-0 sm:px-0 lg:px-0 py-12 sm:py-16 lg:py-20',
                wrapper: 'mx-auto max-w-5xl'
            }">
            <div class="landing-section-strong p-6 sm:p-8 lg:p-10">
                <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p class="landing-eyebrow">
                            {{ t(tk("seminarAbout.eyebrow")) }}
                        </p>

                        <h2 class="landing-title mt-4">
                            {{ t(tk("seminarAbout.title")) }}
                        </h2>
                    </div>

                    <div class="border-default space-y-5 lg:border-l lg:pl-10">
                        <p class="landing-description text-base">
                            {{ t(tk("seminarAbout.intro")) }}
                        </p>

                        <p class="landing-description">
                            {{ t(tk("seminarAbout.closing")) }}
                        </p>
                    </div>
                </div>
            </div>
        </UPageSection>

        <LandingTakeaways :content-key="props.contentKey" />

        <UPageSection
            :title="t(tk('stepper.title'))"
            class="landing-section landing-section-spaced"
            :ui="{
                container: 'py-8 sm:py-10 lg:py-12',
                wrapper: 'mx-auto max-w-2xl',
                header: 'text-center',
                title: 'landing-title',
                body: 'mt-8 space-y-6 sm:space-y-8'
            }">
            <div class="landing-panel mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
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
                <LandingPageCard :title="t(tk('contentMethods.methods.title'))">
                    <LandingFeatureList
                        :items="methodIncludesItems"
                        compact />
                </LandingPageCard>

                <LandingDownloadCard
                    :label="t(tk('download.label'))"
                    :file-name="t(tk('download.fileName'))"
                    to="/documents/sample.pdf" />
            </div>
        </UPageSection>

        <LandingPageSection
            :title="t(tk('stepper.title'))"
            orientation="horizontal"
            reverse
            class="landing-section landing-section-spaced">
            <ol
                class="landing-panel mx-auto flex h-full max-w-[440px] flex-col justify-center gap-8 p-5 sm:p-6">
                <li
                    v-for="(item, index) in contentMethodSteps"
                    :key="item.title"
                    class="relative flex gap-4">
                    <div
                        v-if="index !== contentMethodSteps.length - 1"
                        class="bg-accented absolute top-10 left-5 h-[calc(100%+2rem)] w-px" />

                    <div class="landing-icon z-10 size-10 rounded-full">
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
                    <LandingPageCard :title="t(tk('contentMethods.methods.title'))">
                        <LandingFeatureList
                            :items="methodIncludesItems"
                            compact />
                    </LandingPageCard>
                </div>
            </template>

            <template #footer>
                <LandingDownloadCard
                    :label="t(tk('download.label'))"
                    :file-name="t(tk('download.fileName'))"
                    to="/documents/sample.pdf" />
            </template>
        </LandingPageSection>

        <UPageSection
            :ui="{
                container: 'px-0 sm:px-0 lg:px-0 py-12 sm:py-16 lg:py-20',
                wrapper: 'mx-auto max-w-6xl'
            }">
            <div class="landing-section-strong p-5 sm:p-6 lg:p-8">
                <LandingInfoGrid :items="infoItems" />

                <div class="border-default mt-6 flex gap-3 border-t pt-5 sm:mt-8 sm:pt-6">
                    <UIcon
                        name="i-lucide-info"
                        class="text-primary mt-1 size-5 shrink-0" />
                    <p class="text-muted text-sm leading-6 sm:text-base sm:leading-7">
                        {{ t(tk("organization.note")) }}
                    </p>
                </div>
            </div>
        </UPageSection>

        <UPageSection
            :title="t(tk('seminarSchedule.title'))"
            :links="seminarScheduleLinks"
            class="landing-section"
            :ui="{
                container: 'py-8 sm:py-10 lg:py-12',
                wrapper: 'mx-auto max-w-2xl text-center',
                header: 'text-center',
                title: 'landing-title-compact',
                body: 'mt-8',
                footer: 'mt-8',
                links: 'justify-center gap-3'
            }">
            <template #body>
                <div class="grid gap-4 sm:grid-cols-3">
                    <UCard
                        v-for="(card, index) in seminarSchedule"
                        :key="index"
                        variant="subtle"
                        class="landing-card h-full text-center"
                        :ui="{body: 'flex h-full flex-col items-center p-5 sm:p-6'}">
                        <template #default>
                            <div class="landing-icon landing-icon-secondary size-12">
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
                        </template>
                    </UCard>
                </div>
            </template>
        </UPageSection>

        <LandingPageSection
            :eyebrow="t(tk('participants.eyebrow'))"
            :title="t(tk('participants.title'))"
            orientation="horizontal"
            reverse
            class="landing-section landing-section-spaced">
            <template #description>
                <p class="landing-description">
                    {{ t(tk("participants.description")) }}
                </p>
            </template>

            <template #body>
                <div class="space-y-6">
                    <LandingFeatureList :items="participantItems" />
                    <p class="landing-description">
                        {{ t(tk("participants.closing")) }}
                    </p>
                </div>
            </template>

            <div class="landing-media-frame mx-auto w-full max-w-md">
                <NuxtImg
                    :src="props.processImage"
                    :alt="t(tk('participants.imageAlt'))"
                    width="800"
                    height="1000"
                    sizes="100vw sm:100vw lg:40vw"
                    class="aspect-[4/5] w-full object-cover" />
            </div>
        </LandingPageSection>

        <LandingPageSection
            :eyebrow="t(tk('whyDahab.eyebrow'))"
            :title="t(tk('whyDahab.title'))"
            orientation="horizontal"
            class="landing-section landing-section-spaced">
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("whyDahab.description")) }}
                </p>
            </template>

            <div class="landing-media-frame mx-auto w-full max-w-md">
                <NuxtImg
                    :src="props.placeImage"
                    :alt="t(tk('whyDahab.imageAlt'))"
                    width="800"
                    height="1000"
                    sizes="100vw sm:100vw lg:40vw"
                    class="aspect-[4/5] w-full object-cover" />
            </div>
        </LandingPageSection>

        <UPageSection
            :title="t(tk('cta.title'))"
            :description="t(tk('cta.description'))"
            :action-label="t(tk('cta.action'))"
            :links="contactCta"
            class="landing-section-strong landing-section-spaced"
            icon="i-lucide-waves"
            :ui="{
                container: 'py-12 sm:py-14 lg:py-16',
                wrapper: 'mx-auto max-w-2xl',
                title: 'landing-title-compact text-center text-2xl sm:text-3xl',
                description: 'landing-description mx-auto mt-3 max-w-xl text-center text-base',
                leadingIcon: 'text-secondary size-9 opacity-80',
                links: 'justify-center'
            }" />
    </div>
</template>
