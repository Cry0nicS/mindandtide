<script setup lang="ts">
import LandingHero from "~/components/landing/landing-hero.vue";
import LandingPageSection from "~/components/landing/landing-page-section.vue";

const {locale, t} = useI18n();

const contentKey = "pages.aboutUsPage";
const tk = (path: string) => `${contentKey}.${path}`;

const teamMembers = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-user-round",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
            name: t(tk("team.members.silvia.name")),
            role: t(tk("team.members.silvia.role")),
            imageAlt: t(tk("team.members.silvia.imageAlt"))
        },
        {
            icon: "i-lucide-wind",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
            name: t(tk("team.members.marcus.name")),
            role: t(tk("team.members.marcus.role")),
            imageAlt: t(tk("team.members.marcus.imageAlt"))
        },
        {
            icon: "i-lucide-waves",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
            name: t(tk("team.members.ahmad.name")),
            role: t(tk("team.members.ahmad.role")),
            imageAlt: t(tk("team.members.ahmad.imageAlt"))
        }
    ];
});

useSeoMeta({
    title: () => t(tk("seo.title")),
    ogTitle: () => t(tk("seo.title")),
    description: () => t(tk("seo.description")),
    ogDescription: () => t(tk("seo.description"))
});

const heroImage =
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=80";
const projectImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";
const egyptImage =
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80";
const dahabImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";
const nuweibaaImage =
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

        <LandingPageSection
            :eyebrow="t(tk('project.eyebrow'))"
            :title="t(tk('project.title'))"
            orientation="horizontal"
            :ui="{container: 'py-10 sm:py-12 lg:py-14'}">
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("project.description")) }}
                </p>
            </template>

            <NuxtImg
                :src="projectImage"
                :alt="t(tk('project.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <LandingPageSection
            :eyebrow="t(tk('whyEgypt.eyebrow'))"
            :title="t(tk('whyEgypt.title'))"
            orientation="horizontal"
            reverse>
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("whyEgypt.description")) }}
                </p>
            </template>

            <NuxtImg
                :src="egyptImage"
                :alt="t(tk('whyEgypt.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <LandingPageSection
            :eyebrow="t(tk('whyDahab.eyebrow'))"
            :title="t(tk('whyDahab.title'))"
            orientation="horizontal">
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("whyDahab.description")) }}
                </p>
            </template>

            <NuxtImg
                :src="dahabImage"
                :alt="t(tk('whyDahab.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <LandingPageSection
            :eyebrow="t(tk('whyNuweibaa.eyebrow'))"
            :title="t(tk('whyNuweibaa.title'))"
            orientation="horizontal"
            reverse>
            <template #description>
                <p class="landing-description whitespace-pre-line">
                    {{ t(tk("whyNuweibaa.description")) }}
                </p>
            </template>

            <NuxtImg
                :src="nuweibaaImage"
                :alt="t(tk('whyNuweibaa.imageAlt'))"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <UPageSection
            :title="t(tk('team.title'))"
            :description="t(tk('team.description'))"
            class="landing-section-spaced"
            :ui="{
                container: 'py-0 sm:py-0 lg:py-0',
                wrapper: 'mx-auto max-w-2xl',
                header: 'text-center',
                title: 'landing-title',
                description: 'landing-description mx-auto mt-5 max-w-2xl text-base',
                body: 'mt-10'
            }">
            <template #headline>
                <span class="landing-eyebrow">
                    {{ t(tk("team.eyebrow")) }}
                </span>
            </template>

            <div class="grid gap-5 pb-4 md:grid-cols-3">
                <UCard
                    v-for="member in teamMembers"
                    :key="member.name"
                    variant="subtle"
                    class="border-default overflow-hidden rounded-lg"
                    :ui="{body: 'p-0'}">
                    <template #default>
                        <div class="relative">
                            <NuxtImg
                                :src="member.image"
                                :alt="member.imageAlt"
                                width="720"
                                height="540"
                                sizes="100vw sm:50vw lg:33vw"
                                class="aspect-[4/3] w-full object-cover opacity-80" />

                            <div
                                class="absolute inset-0 bg-gradient-to-t from-(--ui-bg)/95 via-(--ui-bg)/45 to-transparent" />

                            <div
                                class="bg-primary/10 text-primary ring-primary/15 absolute top-5 left-5 flex size-11 items-center justify-center rounded-md ring-1 backdrop-blur">
                                <UIcon
                                    :name="member.icon"
                                    class="size-5" />
                            </div>
                        </div>

                        <div class="space-y-2 p-5 sm:p-6">
                            <h3 class="text-highlighted text-xl leading-7 font-semibold">
                                {{ member.name }}
                            </h3>

                            <p class="text-muted leading-7">
                                {{ member.role }}
                            </p>
                        </div>
                    </template>
                </UCard>
            </div>
        </UPageSection>
    </div>
</template>
