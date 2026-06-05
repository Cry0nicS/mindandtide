<script setup lang="ts">
const {t} = useI18n();

const takeawayItems = computed(() => {
    return [
        {
            icon: "i-lucide-lightbulb",
            title: t("pages.homePage.takeaways.items.clarity.title"),
            description: t("pages.homePage.takeaways.items.clarity.description")
        },
        {
            icon: "i-lucide-sun-medium",
            title: t("pages.homePage.takeaways.items.stress.title"),
            description: t("pages.homePage.takeaways.items.stress.description")
        },
        {
            icon: "i-lucide-shield-check",
            title: t("pages.homePage.takeaways.items.resilience.title"),
            description: t("pages.homePage.takeaways.items.resilience.description")
        },
        {
            icon: "i-lucide-calendar-check",
            title: t("pages.homePage.takeaways.items.routines.title"),
            description: t("pages.homePage.takeaways.items.routines.description")
        },
        {
            icon: "i-lucide-waves",
            title: t("pages.homePage.takeaways.items.balance.title"),
            description: t("pages.homePage.takeaways.items.balance.description")
        },
        {
            icon: "i-lucide-sprout",
            title: t("pages.homePage.takeaways.items.impact.title"),
            description: t("pages.homePage.takeaways.items.impact.description")
        }
    ];
});
</script>

<template>
    <UPageSection
        :headline="t('pages.homePage.takeaways.headline')"
        :title="t('pages.homePage.takeaways.title')"
        :description="t('pages.homePage.takeaways.description')"
        :ui="{
            container: 'py-8 sm:py-10 lg:py-12',
            wrapper: 'mx-auto max-w-2xl text-center',
            headline: 'landing-eyebrow',
            title: 'landing-title mx-auto max-w-2xl',
            description: 'landing-description mx-auto max-w-2xl',
            body: 'mt-8'
        }"
        class="landing-section-strong text-center">
        <div class="space-y-5 sm:space-y-6">
            <div class="grid gap-4 sm:grid-cols-2">
                <div
                    v-for="item in takeawayItems"
                    :key="item.title"
                    class="landing-item-card flex gap-4 p-4 text-left sm:p-5">
                    <div class="landing-icon size-11">
                        <UIcon
                            :name="item.icon"
                            class="size-5"
                            aria-hidden="true" />
                    </div>

                    <div>
                        <h3 class="text-highlighted text-base font-semibold">
                            {{ item.title }}
                        </h3>

                        <p class="text-muted mt-1 text-sm leading-6">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="landing-item-card flex flex-col gap-4 p-5 text-left sm:flex-row sm:items-center sm:p-6">
                <div class="landing-icon landing-icon-solid size-11 rounded-full">
                    <UIcon
                        name="i-lucide-quote"
                        class="size-5"
                        aria-hidden="true" />
                </div>

                <p class="text-highlighted text-base leading-7">
                    {{ t("pages.homePage.takeaways.quote") }}
                </p>
            </div>
        </div>
    </UPageSection>
</template>
