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
            headline: 'text-secondary text-xs font-semibold uppercase tracking-[0.26em]',
            title: 'font-heading mx-auto max-w-2xl text-3xl font-semibold leading-tight text-highlighted sm:text-4xl lg:text-5xl',
            description: 'mx-auto max-w-2xl text-muted leading-7 sm:text-lg sm:leading-8',
            body: 'mt-8'
        }"
        class="border-default bg-elevated/55 w-full rounded-lg border text-center shadow-sm backdrop-blur">
        <div class="space-y-5 sm:space-y-6">
            <div class="grid gap-4 sm:grid-cols-2">
                <div
                    v-for="item in takeawayItems"
                    :key="item.title"
                    class="border-default bg-muted/35 flex gap-4 rounded-lg border p-4 text-left sm:p-5">
                    <div
                        class="bg-primary/10 text-primary ring-primary/20 flex size-11 shrink-0 items-center justify-center rounded-lg ring-1">
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
                class="border-primary/20 bg-primary/10 flex flex-col gap-4 rounded-lg border p-5 text-left sm:flex-row sm:items-center sm:p-6">
                <div
                    class="bg-primary text-inverted flex size-11 shrink-0 items-center justify-center rounded-full">
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
