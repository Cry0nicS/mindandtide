<script setup lang="ts">
import {
    COMPANY_ADDRESS_CITY,
    COMPANY_ADDRESS_STREET,
    COMPANY_COUNTRY,
    COMPANY_NAME,
    CONTACT_EMAIL_ADDRESS,
    COOKIE_NOTICE_SHOW_EVENT,
    COOKIE_STORAGE_KEY
} from "#shared/utils/constants";

const {t} = useI18n();

const localePath = useLocalePath();

const controllerAddress = computed(() => [
    COMPANY_NAME,
    COMPANY_ADDRESS_STREET,
    COMPANY_ADDRESS_CITY,
    COMPANY_COUNTRY
]);

function showCookieBanner() {
    try {
        localStorage.removeItem(COOKIE_STORAGE_KEY);
    } catch {
        // The banner can still be reopened for the current session if storage is unavailable.
    }

    window.dispatchEvent(new Event(COOKIE_NOTICE_SHOW_EVENT));
}

const overviewItems = computed(() => [
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
]);

const privacySections = computed(() => [
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
]);

const rights = computed(() => [
    t("pages.privacyPage.rights.access"),
    t("pages.privacyPage.rights.rectification"),
    t("pages.privacyPage.rights.erasure"),
    t("pages.privacyPage.rights.restriction"),
    t("pages.privacyPage.rights.portability"),
    t("pages.privacyPage.rights.objection"),
    t("pages.privacyPage.rights.withdrawal")
]);

useSeoMeta({
    title: () => t("pages.privacyPage.seo.title"),
    description: () => t("pages.privacyPage.seo.description"),
    ogTitle: () => t("pages.privacyPage.seo.title"),
    ogDescription: () => t("pages.privacyPage.seo.description"),
    ogImage: "/images/hero.png"
});
</script>

<template>
    <UPage>
        <UPageHero>
            <template #headline>
                <UBadge
                    color="primary"
                    variant="subtle"
                    size="lg">
                    {{ t("pages.privacyPage.hero.badge") }}
                </UBadge>
            </template>

            <template #title>
                <span class="text-highlighted">{{ t("pages.privacyPage.hero.title") }}</span>
            </template>

            <template #description>
                <p>{{ t("pages.privacyPage.hero.description") }}</p>
                <p class="text-muted text-sm">
                    {{ t("pages.privacyPage.hero.lastUpdated") }}
                </p>
            </template>
        </UPageHero>

        <UPageBody>
            <UPageSection
                :title="t('pages.privacyPage.controller.title')"
                :description="t('pages.privacyPage.controller.intro')">
                <div class="flex flex-wrap items-stretch gap-6">
                    <UPageCard
                        :title="COMPANY_NAME"
                        icon="i-lucide-shield-check"
                        variant="subtle"
                        class="flex-1 basis-full lg:basis-[calc(50%-0.75rem)]">
                        <template #description>
                            <div class="flex h-full flex-col">
                                <div class="text-muted mt-2 flex-1 space-y-1 text-sm">
                                    <p
                                        v-for="line in controllerAddress"
                                        :key="line">
                                        {{ line }}
                                    </p>
                                </div>

                                <div class="mt-6">
                                    <UButton
                                        :href="`mailto:${CONTACT_EMAIL_ADDRESS}`"
                                        variant="soft"
                                        color="primary"
                                        icon="i-lucide-mail"
                                        trailing-icon="i-lucide-arrow-up-right"
                                        external>
                                        {{ t("pages.privacyPage.controller.mailLabel") }}
                                    </UButton>
                                </div>
                            </div>
                        </template>
                    </UPageCard>

                    <UPageCard
                        v-for="item in overviewItems"
                        :key="item.title"
                        :title="item.title"
                        :description="item.description"
                        :icon="item.icon"
                        variant="subtle"
                        class="flex-1 basis-full lg:basis-[calc(50%-0.75rem)]" />
                </div>
            </UPageSection>

            <UPageSection
                :title="t('pages.privacyPage.overview.title')"
                :description="t('pages.privacyPage.overview.description')"
                :headline="t('pages.privacyPage.overview.eyebrow')">
                <div class="flex flex-wrap items-stretch gap-6">
                    <UPageCard
                        v-for="section in privacySections"
                        :key="section.title"
                        :title="section.title"
                        :icon="section.icon"
                        variant="subtle"
                        class="flex-1 basis-full lg:basis-[calc(50%-0.75rem)]">
                        <template #description>
                            <div class="space-y-4">
                                <p>{{ section.body }}</p>

                                <UButton
                                    v-if="section.action"
                                    icon="i-lucide-cookie"
                                    @click="showCookieBanner">
                                    {{ section.action }}
                                </UButton>
                            </div>
                        </template>
                    </UPageCard>
                </div>
            </UPageSection>

            <UPageSection
                :title="t('pages.privacyPage.rights.title')"
                :description="t('pages.privacyPage.rights.description')"
                :headline="t('pages.privacyPage.rights.eyebrow')">
                <UCard variant="soft">
                    <ul class="grid gap-3 md:grid-cols-2">
                        <li
                            v-for="right in rights"
                            :key="right"
                            class="border-default bg-default/40 flex gap-3 rounded-lg border p-4">
                            <UIcon
                                name="i-lucide-check"
                                class="text-primary mt-0.5 size-5 shrink-0" />
                            <span class="text-muted text-sm leading-6">{{ right }}</span>
                        </li>
                    </ul>
                </UCard>
            </UPageSection>

            <UPageSection>
                <UCard
                    variant="subtle"
                    :ui="{body: 'p-6 sm:p-8'}">
                    <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                        <div class="space-y-2">
                            <h2 class="text-highlighted text-2xl font-semibold sm:text-3xl">
                                {{ t("pages.privacyPage.cta.title") }}
                            </h2>
                            <p class="text-muted max-w-2xl">
                                {{ t("pages.privacyPage.cta.description") }}
                            </p>
                        </div>

                        <div class="flex flex-col gap-3 sm:flex-row md:justify-end">
                            <UButton
                                :to="localePath('/contact')"
                                color="primary"
                                variant="solid"
                                icon="i-lucide-message-circle">
                                {{ t("pages.privacyPage.cta.contact") }}
                            </UButton>
                            <UButton
                                :href="`mailto:${CONTACT_EMAIL_ADDRESS}`"
                                color="neutral"
                                variant="soft"
                                icon="i-lucide-mail"
                                external>
                                {{ t("pages.privacyPage.cta.email") }}
                            </UButton>
                        </div>
                    </div>
                </UCard>
            </UPageSection>
        </UPageBody>
    </UPage>
</template>
