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
            wrapper: 'text-center',
            headline: 'font-semibold uppercase tracking-[0.28em] text-secondary',
            title: 'mx-auto max-w-2xl text-4xl text-highlighted sm:text-5xl',
            description: 'mx-auto max-w-2xl text-muted'
        }"
        class="border-default w-full rounded-lg border text-center">
        <UPageCard
            variant="ghost"
            :ui="{
                body: 'p-5 sm:p-8 lg:p-10'
            }">
            <div class="grid gap-4 sm:grid-cols-2">
                <div
                    v-for="item in takeawayItems"
                    :key="item.title"
                    class="border-default flex gap-4 rounded-lg border bg-white/60 p-4 text-left dark:bg-white/5">
                    <div
                        class="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-md">
                        <UIcon
                            :name="item.icon"
                            class="size-6"
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
                class="border-default mt-6 flex flex-col gap-4 rounded-lg border bg-white/70 p-5 text-left sm:flex-row sm:items-center sm:p-6 dark:bg-white/5">
                <div
                    class="bg-primary text-inverted flex size-12 shrink-0 items-center justify-center rounded-full">
                    <UIcon
                        name="i-lucide-quote"
                        class="size-6"
                        aria-hidden="true" />
                </div>

                <p class="text-highlighted text-base leading-7">
                    {{ t("pages.homePage.takeaways.quote") }}
                </p>
            </div>
        </UPageCard>
    </UPageSection>
</template>
