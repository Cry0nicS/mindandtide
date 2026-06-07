<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import {
    COMPANY_ADDRESS_CITY,
    COMPANY_ADDRESS_STREET,
    COMPANY_COUNTRY,
    COMPANY_NAME,
    CONTACT_EMAIL_ADDRESS,
    COOKIE_NOTICE_SHOW_EVENT,
    COOKIE_STORAGE_KEY
} from "#shared/utils/constants";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const controllerAddress = computed(() => [
    COMPANY_NAME,
    COMPANY_ADDRESS_STREET,
    COMPANY_ADDRESS_CITY,
    COMPANY_COUNTRY
]);

const heroLinks = computed<ButtonProps[]>(() => {
    void locale.value;

    return [
        {
            label: t("pages.privacyPage.cta.contact"),
            to: localePath("/contact"),
            color: "primary",
            trailingIcon: "i-lucide-arrow-right"
        },
        {
            label: t("pages.privacyPage.cta.email"),
            to: `mailto:${CONTACT_EMAIL_ADDRESS}`,
            color: "neutral",
            variant: "outline",
            trailingIcon: "i-lucide-mail",
            external: true
        }
    ];
});

const overviewItems = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-server",
            title: t("pages.privacyPage.overview.technical.title"),
            description: t("pages.privacyPage.overview.technical.description")
        },
        {
            icon: "i-lucide-mail",
            title: t("pages.privacyPage.overview.contact.title"),
            description: t("pages.privacyPage.overview.contact.description")
        },
        {
            icon: "i-lucide-settings-2",
            title: t("pages.privacyPage.overview.preferences.title"),
            description: t("pages.privacyPage.overview.preferences.description")
        }
    ];
});

const privacySections = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-server",
            title: t("pages.privacyPage.sections.hosting.title"),
            body: t("pages.privacyPage.sections.hosting.body")
        },
        {
            icon: "i-lucide-send",
            title: t("pages.privacyPage.sections.contactForm.title"),
            body: t("pages.privacyPage.sections.contactForm.body")
        },
        {
            icon: "i-lucide-mail",
            title: t("pages.privacyPage.sections.email.title"),
            body: t("pages.privacyPage.sections.email.body")
        },
        {
            icon: "i-lucide-cookie",
            title: t("pages.privacyPage.sections.cookies.title"),
            body: t("pages.privacyPage.sections.cookies.body"),
            action: t("pages.privacyPage.sections.cookies.action")
        },
        {
            icon: "i-lucide-chart-no-axes-column",
            title: t("pages.privacyPage.sections.analytics.title"),
            body: t("pages.privacyPage.sections.analytics.body")
        },
        {
            icon: "i-lucide-scale",
            title: t("pages.privacyPage.sections.legalBasis.title"),
            body: t("pages.privacyPage.sections.legalBasis.body")
        },
        {
            icon: "i-lucide-clock",
            title: t("pages.privacyPage.sections.retention.title"),
            body: t("pages.privacyPage.sections.retention.body")
        },
        {
            icon: "i-lucide-file-lock-2",
            title: t("pages.privacyPage.sections.processors.title"),
            body: t("pages.privacyPage.sections.processors.body")
        },
        {
            icon: "i-lucide-globe-2",
            title: t("pages.privacyPage.sections.transfers.title"),
            body: t("pages.privacyPage.sections.transfers.body")
        },
        {
            icon: "i-lucide-landmark",
            title: t("pages.privacyPage.sections.complaint.title"),
            body: t("pages.privacyPage.sections.complaint.body")
        },
        {
            icon: "i-lucide-refresh-cw",
            title: t("pages.privacyPage.sections.updates.title"),
            body: t("pages.privacyPage.sections.updates.body")
        }
    ];
});

const rights = computed(() => {
    void locale.value;

    return [
        {description: t("pages.privacyPage.rights.access")},
        {description: t("pages.privacyPage.rights.rectification")},
        {description: t("pages.privacyPage.rights.erasure")},
        {description: t("pages.privacyPage.rights.restriction")},
        {description: t("pages.privacyPage.rights.portability")},
        {description: t("pages.privacyPage.rights.objection")},
        {description: t("pages.privacyPage.rights.withdrawal")}
    ];
});

function showCookieBanner() {
    try {
        localStorage.removeItem(COOKIE_STORAGE_KEY);
    } catch {
        // The banner can still be reopened for the current session if storage is unavailable.
    }

    window.dispatchEvent(new Event(COOKIE_NOTICE_SHOW_EVENT));
}

useSeoMeta({
    title: () => t("pages.privacyPage.seo.title"),
    description: () => t("pages.privacyPage.seo.description"),
    ogTitle: () => t("pages.privacyPage.seo.title"),
    ogDescription: () => t("pages.privacyPage.seo.description")
});

const heroImage =
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=80";
const rightsImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";
</script>

<template>
    <div class="landing-page pb-4">
        <LandingHero
            :image-src="heroImage"
            :image-alt="t('pages.privacyPage.hero.imageAlt')"
            :eyebrow="t('pages.privacyPage.hero.eyebrow')"
            :title="t('pages.privacyPage.hero.title')"
            :subheadline="t('pages.privacyPage.hero.subheadline')"
            :supporting-text="t('pages.privacyPage.hero.supportingText')"
            :meta-text="t('pages.privacyPage.hero.meta')"
            meta-icon="i-lucide-shield-user"
            :links="heroLinks" />

        <UPageSection
            :ui="{
                container: 'px-0 sm:px-0 lg:px-0 py-0 sm:py-0 lg:py-0',
                wrapper: 'mx-auto max-w-5xl'
            }">
            <div class="p-6 sm:p-8 lg:p-10">
                <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p class="landing-eyebrow">
                            {{ t("pages.privacyPage.controller.eyebrow") }}
                        </p>

                        <h2 class="landing-title mt-4">
                            {{ t("pages.privacyPage.controller.title") }}
                        </h2>
                        <p class="landing-description text-base">
                            {{ t("pages.privacyPage.controller.intro") }}
                        </p>
                    </div>

                    <div class="border-default space-y-5 lg:border-l lg:pl-10">
                        <div class="p-5 sm:p-6">
                            <div class="flex gap-4">
                                <span class="landing-icon landing-icon-secondary size-11">
                                    <UIcon
                                        name="i-lucide-building-2"
                                        class="size-5" />
                                </span>

                                <div class="min-w-0">
                                    <h3 class="text-highlighted text-lg font-semibold">
                                        {{ COMPANY_NAME }}
                                    </h3>

                                    <div class="text-muted mt-3 space-y-1 text-sm leading-6">
                                        <p
                                            v-for="line in controllerAddress"
                                            :key="line">
                                            {{ line }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UPageSection>

        <UPageSection
            :headline="t('pages.privacyPage.overview.eyebrow')"
            :title="t('pages.privacyPage.overview.title')"
            :description="t('pages.privacyPage.overview.description')"
            class="landing-section-spaced"
            :ui="{
                container: 'py-8 sm:py-10 lg:py-12',
                wrapper: 'mx-auto max-w-4xl text-center',
                header: 'text-center',
                headline: 'landing-eyebrow',
                title: 'landing-title',
                description: 'landing-description mx-auto mt-5 max-w-5xl text-base',
                body: 'mt-8'
            }">
            <div class="grid gap-4 md:grid-cols-3">
                <LandingPageCard
                    v-for="item in overviewItems"
                    :key="item.title"
                    :icon="item.icon"
                    :title="item.title"
                    :description="item.description"
                    class="h-full" />
            </div>
        </UPageSection>

        <UPageSection
            :headline="t('pages.privacyPage.details.eyebrow')"
            :title="t('pages.privacyPage.details.title')"
            :description="t('pages.privacyPage.details.description')"
            class="landing-section landing-section-spaced">
            <template #body>
                <div class="grid gap-4 lg:grid-cols-2">
                    <LandingPageCard
                        v-for="section in privacySections"
                        :key="section.title"
                        :icon="section.icon"
                        :title="section.title"
                        orientation="horizontal"
                        class="h-full">
                        <p class="text-muted text-sm leading-6 sm:text-base sm:leading-7">
                            {{ section.body }}
                        </p>

                        <UButton
                            v-if="section.action"
                            color="primary"
                            variant="subtle"
                            icon="i-lucide-cookie"
                            class="mt-5"
                            @click="showCookieBanner">
                            {{ section.action }}
                        </UButton>
                    </LandingPageCard>
                </div>
            </template>
        </UPageSection>

        <LandingPageSection
            :eyebrow="t('pages.privacyPage.rights.eyebrow')"
            :title="t('pages.privacyPage.rights.title')"
            orientation="horizontal"
            reverse
            class="landing-section-spaced">
            <template #description>
                <p class="landing-description">
                    {{ t("pages.privacyPage.rights.description") }}
                </p>
            </template>

            <template #body>
                <LandingFeatureList
                    :items="rights"
                    compact />
            </template>

            <NuxtImg
                :src="rightsImage"
                :alt="t('pages.privacyPage.rights.imageAlt')"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <UPageSection
            :title="t('pages.privacyPage.cta.title')"
            :description="t('pages.privacyPage.cta.description')"
            :links="heroLinks"
            class="landing-section-spaced"
            icon="i-lucide-shield-check"
            :ui="{
                wrapper: 'mx-auto max-w-2xl',
                title: 'landing-title-compact text-center text-2xl sm:text-3xl',
                description: 'landing-description mx-auto mt-3 max-w-xl text-center text-base',
                leadingIcon: 'text-secondary size-9 opacity-80',
                links: 'justify-center'
            }" />
    </div>
</template>
