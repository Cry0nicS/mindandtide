<script setup lang="ts">
import type {ButtonProps} from "@nuxt/ui";
import {
    COMPANY_ADDRESS_CITY,
    COMPANY_ADDRESS_STREET,
    COMPANY_COUNTRY,
    COMPANY_NAME,
    COMPANY_REPRESENTATIVE,
    COMPANY_VAT_ID,
    CONTACT_EMAIL_ADDRESS,
    CONTACT_PHONE
} from "#shared/utils/constants";

const {locale, t} = useI18n();
const localePath = useLocalePath();

const title = computed(() => t("pages.impressum.hero.title"));
const description = computed(() => t("pages.impressum.hero.intro"));

const heroLinks = computed<ButtonProps[]>(() => {
    void locale.value;

    return [
        {
            label: t("pages.contact"),
            to: localePath("/contact"),
            icon: "i-lucide-mail",
            color: "primary",
            variant: "solid"
        },
        {
            label: t("pages.privacy"),
            to: localePath("/privacy"),
            icon: "i-lucide-shield-user",
            color: "neutral",
            variant: "subtle"
        }
    ];
});

const cards = computed(() => {
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
            icon: "i-lucide-clipboard-signature",
            title: t("pages.impressum.sections.representedBy.title"),
            lines: [{label: COMPANY_REPRESENTATIVE}]
        },
        {
            icon: "i-lucide-building-2",
            title: t("pages.impressum.sections.provider.fields.vat"),
            lines: [{label: t("pages.impressum.sections.vat.text")}, {label: COMPANY_VAT_ID}]
        },
        {
            icon: "i-lucide-landmark",
            title: t("pages.impressum.sections.provider.fields.contentResponsible"),
            lines: [
                {label: t("pages.impressum.sections.contentResponsible.text")},
                {label: COMPANY_REPRESENTATIVE},
                {label: COMPANY_NAME},
                {label: COMPANY_ADDRESS_STREET},
                {label: COMPANY_ADDRESS_CITY}
            ]
        },
        {
            icon: "i-lucide-info",
            title: t("pages.impressum.sections.disputeResolution.title"),
            lines: [
                {label: t("pages.impressum.sections.disputeResolution.content")},
                {
                    label: t("pages.impressum.sections.disputeResolution.linkLabel"),
                    to: t("pages.impressum.sections.disputeResolution.linkUrl")
                }
            ]
        }
    ];
});

useSeoMeta({
    description: () => t("pages.impressum.meta.description"),
    ogDescription: () => t("pages.impressum.meta.description"),
    ogTitle: () => t("pages.impressum.meta.title"),
    title: () => t("pages.impressum.meta.title")
});
</script>

<template>
    <UPage>
        <UPageHero
            :headline="t('pages.imprint')"
            :title="title"
            :description="description"
            :links="heroLinks" />

        <UPageBody class="pb-0">
            <UPageSection>
                <div class="flex flex-col flex-wrap items-stretch gap-6 px-0 lg:flex-row">
                    <UPageCard
                        v-for="card in cards"
                        :key="card.title"
                        :title="card.title"
                        :icon="card.icon"
                        variant="subtle"
                        class="flex-1 basis-full lg:basis-[calc(50%-0.75rem)]">
                        <template #description>
                            <p
                                v-for="line in card.lines"
                                :key="line.label">
                                <NuxtLink
                                    v-if="line.to"
                                    :to="line.to"
                                    class="text-primary hover:text-primary/80 transition-colors">
                                    {{ line.label }}
                                </NuxtLink>
                                <span v-else>{{ line.label }}</span>
                            </p>
                        </template>
                    </UPageCard>
                </div>
            </UPageSection>

            <UPageSection>
                <UAlert
                    color="secondary"
                    variant="subtle"
                    icon="i-lucide-scale"
                    :title="t('pages.impressum.sections.legalReview.title')"
                    :description="t('pages.impressum.sections.legalReview.content')"
                    :ui="{
                        root: 'border-default rounded-lg',
                        title: 'font-serif text-lg text-highlighted',
                        description: 'text-muted'
                    }" />
            </UPageSection>
        </UPageBody>
    </UPage>
</template>
