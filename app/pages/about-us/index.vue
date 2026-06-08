<script setup lang="ts">
const {locale, t} = useI18n();

const contentKey = "pages.aboutUsPage";
const tk = (path: string) => `${contentKey}.${path}`;

const teamMembers = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-graduation-cap",
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
const seaImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=80";
const desertImage =
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80";
const roadImage =
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
                :src="seaImage"
                :alt="t(tk('project.imageAlt'))"
                width="900"
                height="720"
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

        <UPageSection
            :headline="t(tk('team.eyebrow'))"
            :title="t(tk('team.title'))"
            :description="t(tk('team.description'))"
            class="landing-section-spaced"
            :ui="{
                container: 'py-8 sm:py-10 lg:py-12',
                wrapper: 'mx-auto max-w-xl',
                header: 'text-center',
                headline: 'landing-eyebrow',
                title: 'landing-title-compact',
                description: 'landing-description mx-auto mt-4 max-w-xl text-sm sm:text-base',
                body: 'mt-8'
            }">
            <div class="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
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
                                width="520"
                                height="440"
                                sizes="100vw sm:320px"
                                class="aspect-5/4 w-full object-cover opacity-80" />

                            <div
                                class="absolute inset-0 bg-linear-to-t from-(--ui-bg)/95 via-(--ui-bg)/35 to-transparent" />

                            <div
                                class="bg-primary/10 text-primary ring-primary/15 absolute top-4 left-4 flex size-9 items-center justify-center rounded-md ring-1 backdrop-blur">
                                <UIcon
                                    :name="member.icon"
                                    class="size-4" />
                            </div>
                        </div>

                        <div class="space-y-1.5 p-4 sm:p-5">
                            <h3
                                class="text-highlighted text-base leading-6 font-semibold sm:text-lg">
                                {{ member.name }}
                            </h3>

                            <p class="text-muted text-sm leading-6">
                                {{ member.role }}
                            </p>
                        </div>
                    </template>
                </UCard>
            </div>
        </UPageSection>
    </div>
</template>
