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
const roadImage =
    "https://images.unsplash.com/photo-1556969061-34c2abcf2b93?auto=format&fit=crop&w=600&q=80";
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
            :description="t(tk('project.description.intro'))"
            orientation="horizontal"
            reverse
            class="landing-section"
            :ui="{
                container: 'py-10 sm:py-12 lg:py-16',
                wrapper: 'mx-auto max-w-5xl',
                body: 'mt-0'
            }">
            <NuxtImg
                src="/about-us/silvia.png"
                :alt="t(tk('project.imageAlt'))"
                width="544"
                height="435"
                sizes="100vw sm:100vw lg:45vw"
                class="aspect-5/4 w-full rounded-lg object-cover" />
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
                        <p
                            class="text-muted text-base leading-8 whitespace-pre-line sm:text-lg sm:leading-9">
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

                        <blockquote class="landing-panel p-6 text-center sm:p-8">
                            <p
                                class="text-highlighted text-2xl leading-tight font-semibold sm:text-3xl">
                                {{ t(tk("project.description.statement")) }}
                            </p>
                        </blockquote>
                    </div>
                </section>

                <section class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                        <NuxtImg
                            :src="roadImage"
                            :alt="t(tk('project.imageAlt'))"
                            width="900"
                            height="640"
                            sizes="100vw sm:50vw lg:40vw"
                            class="aspect-4/3 w-full rounded-lg object-cover" />
                    </div>

                    <div class="space-y-5 lg:pl-6">
                        <p
                            class="text-muted text-base leading-8 whitespace-pre-line sm:text-lg sm:leading-9">
                            {{ t(tk("project.description.closing")) }}
                        </p>
                    </div>
                </section>
            </article>
        </UPageSection>
    </div>
</template>
