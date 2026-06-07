<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingInfoGrid from "~/components/landing/landing-info-grid.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const {isMobile} = useDevice();
const contentKey = "pages.seminarsPage";
const tk = (path: string) => `${contentKey}.${path}`;

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

const activeStepper = ref(0);

onMounted(() => {
    setInterval(() => {
        activeStepper.value = (activeStepper.value + 1) % contentMethodSteps.value.length;
    }, 2000);
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

const whyDahabLinks = computed<ButtonProps[]>(() => [
    {
        label: t(tk("whyDahab.actions.apply")),
        to: localePath("/contact"),
        color: "primary",
        trailingIcon: "i-lucide-arrow-right"
    },
    {
        label: t(tk("whyDahab.actions.requestInformation")),
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
const heroImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";
const placeImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
</script>

<template>
    <div class="landing-page">
        <LandingHero
            :image-src="heroImage"
            :image-alt="t(tk('hero.imageAlt'))"
            :eyebrow="t(tk('hero.eyebrow'))"
            :title="t(tk('hero.title'))"
            :subheadline="t(tk('hero.subheadline'))"
            :supporting-text="t(tk('hero.supportingText'))"
            :meta-text="t(tk('hero.meta'))" />

        <UPageSection
            :ui="{
                container: 'px-0 sm:px-0 lg:px-0 py-0 sm:py-0 lg:py-0',
                wrapper: 'mx-auto max-w-5xl'
            }">
            <div class="p-6 sm:p-8 lg:p-10">
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

        <LandingTakeaways :content-key="contentKey" />

        <UPageSection :ui="{container: 'py-0 sm:py-0 lg:py-0'}">
            <NuxtImg
                :src="processImage"
                :alt="t(tk('image.imageAlt'))"
                width="1216"
                height="684"
                sizes="100vw sm:100vw lg:40vw"
                class="landing-section-spaced aspect-video w-full object-cover" />
        </UPageSection>

        <UPageSection
            :title="t(tk('stepper.title'))"
            class="landing-section landing-section-spaced"
            :ui="{
                container: 'py-4 sm:py-4 lg:py-4',
                wrapper: 'mx-auto max-w-2xl',
                header: 'text-center',
                title: 'landing-title',
                body: 'mt-8 space-y-6 sm:space-y-8'
            }">
            <div class="landing-section-muted p-4 sm:p-6 lg:p-8">
                <!-- eslint-disable vue/html-indent -->
                <UStepper
                    v-model="activeStepper"
                    :orientation="isMobile ? 'vertical' : 'horizontal'"
                    :items="contentMethodSteps"
                    size="xl"
                    :ui="
                        !isMobile
                            ? {
                                  root: 'w-full',
                                  header: 'gap-2 sm:gap-4',
                                  trigger: 'bg-elevated ring ring-primary/20',
                                  separator: 'bg-accented',
                                  item: 'text-center',
                                  title: 'text-highlighted text-xs font-semibold sm:text-sm',
                                  description: 'text-muted text-xs leading-5 sm:text-sm'
                              }
                            : {}
                    " />
                <!-- eslint-enable vue/html-indent -->
            </div>

            <div class="space-y-4">
                <UPageSection
                    :title="t(tk('contentMethods.methods.title'))"
                    orientation="horizontal"
                    :features="methodIncludesItems"
                    :ui="{
                        container:
                            'py-0 sm:py-0 lg:py-0 px-0 sm:px-0 lg:px-0 lg:gap-x-10 lg:[&>div:last-child]:flex'
                    }">
                    <aside
                        class="border-default flex h-full w-full flex-col justify-center lg:border-l lg:pl-12">
                        <div class="landing-panel p-5 sm:p-6">
                            <div class="flex items-start justify-between gap-5">
                                <div
                                    class="bg-primary/10 text-primary ring-primary/15 flex size-12 shrink-0 items-center justify-center rounded-md ring-1">
                                    <UIcon
                                        name="i-lucide-file-text"
                                        class="size-6" />
                                </div>

                                <span
                                    class="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
                                    PDF
                                </span>
                            </div>

                            <h3 class="text-highlighted mt-6 text-xl leading-7 font-semibold">
                                {{ t(tk("download.title")) }}
                            </h3>

                            <p class="text-muted mt-3 text-sm leading-7">
                                {{ t(tk("download.description")) }}
                            </p>

                            <div class="border-default mt-5 space-y-2 border-t pt-5">
                                <div class="bg-muted h-2 w-3/4 rounded-full" />
                                <div class="bg-muted h-2 w-5/6 rounded-full" />
                                <div class="bg-muted h-2 w-2/3 rounded-full" />
                            </div>

                            <UButton
                                to="/documents/sample.pdf"
                                target="_blank"
                                download="sample.pdf"
                                icon="i-lucide-download"
                                size="lg"
                                color="primary"
                                variant="solid"
                                block
                                class="mt-6">
                                {{ t(tk("download.label")) }}
                            </UButton>
                        </div>
                    </aside>
                </UPageSection>
            </div>
        </UPageSection>

        <UPageSection
            :title="t(tk('organization.title'))"
            class="landing-section-spaced"
            :ui="{
                container: 'px-0 sm:px-0 lg:px-0 py-0 sm:py-0 lg:py-0',
                wrapper: 'mx-auto max-w-6xl'
            }">
            <div class="p-5 sm:p-6 lg:p-8">
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
                wrapper: 'text-center',
                header: 'text-center',
                title: 'landing-title-compact',
                body: 'mt-8',
                footer: 'mt-8'
            }">
            <template #body>
                <div class="grid gap-4 sm:grid-cols-3">
                    <UCard
                        v-for="(card, index) in seminarSchedule"
                        :key="index"
                        variant="subtle"
                        class="landing-item-card h-full text-center"
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

                            <p class="text-muted mt-3 leading-6 whitespace-pre-line">
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
            reverse>
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

            <NuxtImg
                :src="processImage"
                :alt="t(tk('participants.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <LandingPageSection
            :eyebrow="t(tk('whyDahab.eyebrow'))"
            :title="t(tk('whyDahab.title'))"
            orientation="horizontal"
            :links="whyDahabLinks"
            class="landing-section-spaced">
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("whyDahab.description")) }}
                </p>
            </template>

            <NuxtImg
                :src="placeImage"
                :alt="t(tk('whyDahab.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <UPageSection
            :title="t(tk('cta.title'))"
            :description="t(tk('cta.description'))"
            :action-label="t(tk('cta.action'))"
            :links="contactCta"
            class="landing-section-spaced landing-section"
            icon="i-lucide-waves"
            :ui="{
                wrapper: 'mx-auto max-w-2xl',
                title: 'landing-title-compact text-center text-2xl sm:text-3xl',
                description: 'landing-description mx-auto mt-3 max-w-xl text-center text-base',
                leadingIcon: 'text-secondary size-9 opacity-80',
                links: 'justify-center'
            }" />
    </div>
</template>
