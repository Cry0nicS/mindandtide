<script setup lang="ts">
const {t} = useI18n();

const contentKey = "pages.aboutUsPage";
const tk = (path: string) => `${contentKey}.${path}`;

useSeoMeta({
    title: () => t(tk("seo.title")),
    ogTitle: () => t(tk("seo.title")),
    description: () => t(tk("seo.description")),
    ogDescription: () => t(tk("seo.description"))
});

const heroImage =
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=80";
const desertImage =
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
            :supporting-text="t(tk('hero.supportingText'))" />

        <UPageSection
            :headline="t(tk('project.eyebrow'))"
            :title="t(tk('project.title'))"
            orientation="horizontal"
            reverse
            class="landing-section"
            :ui="{
                container: 'py-10 sm:py-12 lg:py-16',
                wrapper: 'mx-auto max-w-5xl',
                body: 'mt-0'
            }">
            <template #description>
                <div class="space-y-6">
                    <p class="landing-description">{{ t(tk("project.description.intro")) }}</p>

                    <blockquote class="border-accented border-s-4 ps-4 italic">
                        {{ t(tk("project.description.quote")) }}
                    </blockquote>
                </div>
            </template>
            <div>
                <NuxtImg
                    src="/about-us/silvia.png"
                    :alt="t(tk('project.imageAlt'))"
                    width="544"
                    height="435"
                    sizes="100vw sm:100vw lg:45vw"
                    class="aspect-5/4 w-full rounded-lg object-cover" />
            </div>
        </UPageSection>

        <UPageSection
            class="landing-section"
            :ui="{
                container: 'py-10 sm:py-12 lg:py-16',
                wrapper: 'mx-auto max-w-5xl',
                body: 'mt-0'
            }">
            <article class="space-y-14 sm:space-y-16 lg:space-y-20">
                <section class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div class="space-y-5">
                        <p class="landing-description whitespace-pre-line">
                            {{ t(tk("project.description.turningPoint")) }}
                        </p>
                    </div>

                    <div class="space-y-6 lg:sticky lg:top-24">
                        <NuxtImg
                            :src="desertImage"
                            :alt="t(tk('project.imageAlt'))"
                            width="720"
                            height="900"
                            sizes="100vw sm:100vw lg:35vw"
                            class="aspect-4/5 w-full rounded-lg object-cover" />
                    </div>
                </section>
                <blockquote class="landing-panel p-6 text-center sm:p-8">
                    <p class="text-highlighted text-2xl leading-tight font-semibold sm:text-3xl">
                        {{ t(tk("project.description.statement")) }}
                    </p>
                </blockquote>
            </article>
        </UPageSection>
        <UPageSection
            :title="t(tk('team.title'))"
            :description="t(tk('team.description'))"
            :ui="{
                title: 'text-left lg:text-center',
                description: 'text-left lg:text-center'
            }">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div class="space-y-4">
                    <h2 class="landing-title mt-4">
                        {{ t(tk("team.marcus.title")) }}
                    </h2>
                    <p class="landing-description whitespace-pre-line">
                        {{ t(tk("team.marcus.description")) }}
                    </p>
                </div>
                <NuxtImg
                    src="/about-us/marcus.png"
                    alt="Marcus Blacker"
                    width="370"
                    height="502"
                    sizes="100vw sm:100vw lg:45vw"
                    class="aspect-4/5 w-full rounded-lg object-cover" />
            </div>
        </UPageSection>
    </div>
</template>
