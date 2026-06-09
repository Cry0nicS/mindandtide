<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import {
    COMPANY_ADDRESS_CITY,
    COMPANY_ADDRESS_STREET,
    COMPANY_COUNTRY,
    COMPANY_NAME,
    CONTACT_EMAIL_ADDRESS,
    CONTACT_PHONE
} from "#shared/utils/constants";

interface LegalCardLine {
    label: string;
    to?: string;
    external?: boolean;
}

interface LegalCard {
    icon: string;
    title: string;
    lines: LegalCardLine[];
}

const {locale, t} = useI18n();
const localePath = useLocalePath();

const heroLinks = computed<ButtonProps[]>(() => {
    void locale.value;

    return [
        {
            label: t("pages.contact"),
            to: localePath("/contact"),
            color: "primary",
            trailingIcon: "i-lucide-arrow-right"
        },
        {
            label: t("pages.privacy"),
            to: localePath("/privacy"),
            color: "neutral",
            variant: "outline",
            trailingIcon: "i-lucide-shield-user"
        }
    ];
});

const legalCards = computed<LegalCard[]>(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-user-round",
            title: t("pages.impressum.sections.provider.title"),
            lines: [
                {label: COMPANY_NAME},
                {label: COMPANY_ADDRESS_STREET},
                {label: COMPANY_ADDRESS_CITY},
                {label: COMPANY_COUNTRY}
            ]
        },
        {
            icon: "i-lucide-phone",
            title: t("pages.impressum.sections.contact.title"),
            lines: [
                {label: CONTACT_PHONE, to: `tel:${CONTACT_PHONE.replace(/\s+/g, "")}`},
                {label: CONTACT_EMAIL_ADDRESS, to: `mailto:${CONTACT_EMAIL_ADDRESS}`}
            ]
        },
        {
            icon: "i-lucide-landmark",
            title: t("pages.impressum.sections.provider.fields.contentResponsible"),
            lines: [
                {label: t("pages.impressum.sections.contentResponsible.text")},
                {label: COMPANY_NAME},
                {label: COMPANY_ADDRESS_STREET},
                {label: COMPANY_ADDRESS_CITY}
            ]
        },
        {
            icon: "i-lucide-scale",
            title: t("pages.impressum.sections.disputeResolution.title"),
            lines: [
                {label: t("pages.impressum.sections.disputeResolution.content")},
                {
                    label: t("pages.impressum.sections.disputeResolution.linkLabel"),
                    to: t("pages.impressum.sections.disputeResolution.linkUrl"),
                    external: true
                }
            ]
        }
    ];
});

const ctaLinks = computed<ButtonProps[]>(() => {
    void locale.value;

    return [
        {
            label: t("pages.impressum.cta.action"),
            to: localePath("/contact"),
            color: "primary",
            trailingIcon: "i-lucide-arrow-right"
        }
    ];
});

useSeoMeta({
    description: () => t("pages.impressum.meta.description"),
    ogDescription: () => t("pages.impressum.meta.description"),
    ogTitle: () => t("pages.impressum.meta.title"),
    title: () => t("pages.impressum.meta.title")
});

const heroImage =
    "https://images.unsplash.com/photo-1572422071265-8e53a20366da?auto=format&fit=crop&w=1200&q=80";
const reviewImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
</script>

<template>
    <div class="landing-page pb-4">
        <LandingHero
            :image-src="heroImage"
            :image-alt="t('pages.impressum.hero.imageAlt')"
            :eyebrow="t('pages.impressum.hero.eyebrow')"
            :title="t('pages.impressum.hero.title')"
            :subheadline="t('pages.impressum.hero.subheadline')"
            :supporting-text="t('pages.impressum.hero.intro')"
            :meta-text="t('pages.impressum.hero.meta')"
            meta-icon="i-lucide-scale"
            :links="heroLinks" />

        <UPageSection
            :headline="t('pages.impressum.sections.provider.eyebrow')"
            :title="t('pages.impressum.sections.provider.title')"
            :description="t('pages.impressum.sections.provider.description')"
            class="landing-section-spaced">
            <template #body>
                <div class="grid gap-4 lg:grid-cols-2">
                    <LandingPageCard
                        v-for="card in legalCards"
                        :key="card.title"
                        :icon="card.icon"
                        :title="card.title"
                        orientation="horizontal"
                        class="h-full">
                        <div
                            class="text-muted space-y-2 text-sm leading-6 sm:text-base sm:leading-7">
                            <p
                                v-for="line in card.lines"
                                :key="line.label">
                                <NuxtLink
                                    v-if="line.to"
                                    :to="line.to"
                                    :external="line.external"
                                    class="text-primary hover:text-primary/80 transition-colors">
                                    {{ line.label }}
                                </NuxtLink>
                                <span v-else>{{ line.label }}</span>
                            </p>
                        </div>
                    </LandingPageCard>
                </div>
            </template>
        </UPageSection>

        <LandingPageSection
            :eyebrow="t('pages.impressum.sections.legalReview.eyebrow')"
            :title="t('pages.impressum.sections.legalReview.title')"
            orientation="horizontal"
            class="landing-section-spaced">
            <template #description>
                <p class="landing-description">
                    {{ t("pages.impressum.sections.legalReview.content") }}
                </p>
            </template>

            <template #body>
                <div class="landing-panel p-5 sm:p-6 lg:p-7">
                    <div class="flex gap-4">
                        <span class="landing-icon landing-icon-secondary size-11">
                            <UIcon
                                name="i-lucide-file-check-2"
                                class="size-5" />
                        </span>

                        <div>
                            <h3 class="text-highlighted text-lg font-semibold">
                                {{ t("pages.impressum.sections.legalReview.cardTitle") }}
                            </h3>
                            <p class="text-muted mt-2 text-sm leading-6 sm:text-base sm:leading-7">
                                {{ t("pages.impressum.sections.legalReview.cardDescription") }}
                            </p>
                        </div>
                    </div>
                </div>
            </template>

            <NuxtImg
                :src="reviewImage"
                :alt="t('pages.impressum.sections.legalReview.imageAlt')"
                width="800"
                height="1000"
                sizes="100vw sm:100vw lg:40vw"
                class="aspect-4/5 w-full object-cover" />
        </LandingPageSection>

        <UPageSection
            :title="t('pages.impressum.cta.title')"
            :description="t('pages.impressum.cta.description')"
            :links="ctaLinks"
            class="landing-section-spaced"
            icon="i-lucide-mail"
            :ui="{
                wrapper: 'mx-auto max-w-2xl',
                title: 'landing-title-compact text-center text-2xl sm:text-3xl',
                description: 'landing-description mx-auto mt-3 max-w-xl text-center text-base',
                leadingIcon: 'text-secondary size-9 opacity-80',
                links: 'justify-center'
            }" />
    </div>
</template>
