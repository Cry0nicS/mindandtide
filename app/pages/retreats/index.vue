<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import LandingFeatureList from "~/components/landing/landing-feature-list.vue";
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingInfoGrid from "~/components/landing/landing-info-grid.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const contentKey = "pages.retreatsPage";
const tk = (path: string) => `${contentKey}.${path}`;

const heroLinks = computed<ButtonProps[]>(() => [
    {
        label: t(tk("hero.actions.apply")),
        to: localePath("/contact"),
        color: "primary",
        trailingIcon: "i-lucide-arrow-right"
    },
    {
        label: t(tk("hero.actions.requestInformation")),
        to: localePath("/contact"),
        color: "neutral",
        variant: "outline",
        trailingIcon: "i-lucide-arrow-right"
    }
]);

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

const activityItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-waves",
            title: t(tk("activities.items.scuba.title")),
            description: t(tk("activities.items.scuba.description"))
        },
        {
            icon: "i-lucide-footprints",
            title: t(tk("activities.items.camel.title")),
            description: t(tk("activities.items.camel.description"))
        },
        {
            icon: "i-lucide-mountain",
            title: t(tk("activities.items.safari.title")),
            description: t(tk("activities.items.safari.description"))
        },
        {
            icon: "i-lucide-fish",
            title: t(tk("activities.items.snorkeling.title")),
            description: t(tk("activities.items.snorkeling.description"))
        },
        {
            icon: "i-lucide-flame",
            title: t(tk("activities.items.bedouinDinner.title")),
            description: t(tk("activities.items.bedouinDinner.description"))
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

const whyNuweibaaLinks = computed<ButtonProps[]>(() => [
    {
        label: t(tk("whyNuweibaa.actions.apply")),
        to: localePath("/contact"),
        color: "primary",
        trailingIcon: "i-lucide-arrow-right"
    },
    {
        label: t(tk("whyNuweibaa.actions.requestInformation")),
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
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80";
const placeImage =
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80";
</script>

<template>
    <div class="landing-page">
        <LandingHero
            :image-src="heroImage"
            :image-alt="t(tk('hero.imageAlt'))"
            :eyebrow="t(tk('hero.eyebrow'))"
            :title="t(tk('hero.title'))"
            :subheadline="t(tk('hero.subheadline'))"
            :links="heroLinks"
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

        <NuxtImg
            :src="processImage"
            :alt="t(tk('image.imageAlt'))"
            width="1216"
            height="684"
            sizes="100vw sm:100vw lg:40vw"
            class="landing-section-spaced aspect-video w-full object-cover" />

        <LandingTakeaways :content-key="contentKey" />

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

        <LandingPageSection
            :eyebrow="t(tk('whyNuweibaa.eyebrow'))"
            :title="t(tk('whyNuweibaa.title'))"
            orientation="horizontal"
            :links="whyNuweibaaLinks"
            class="landing-section-spaced">
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("whyNuweibaa.description")) }}
                </p>
            </template>

            <NuxtImg
                :src="placeImage"
                :alt="t(tk('whyNuweibaa.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <UPageSection
            :title="t(tk('activities.title'))"
            :description="t(tk('activities.description'))"
            orientation="horizontal"
            reverse
            :features="activityItems">
            <NuxtImg
                :src="placeImage"
                :alt="t(tk('whyNuweibaa.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </UPageSection>

        <UPageSection
            :title="t(tk('cta.title'))"
            :description="t(tk('cta.description'))"
            :action-label="t(tk('cta.action'))"
            :links="contactCta"
            class="landing-section-spaced"
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
