<script setup lang="ts">
interface Props {
    contentKey?: string;
}

const props = withDefaults(defineProps<Props>(), {
    contentKey: "pages.homePage"
});

const {t} = useI18n();

const tk = (path: string) => `${props.contentKey}.takeaways.${path}`;

const takeawayItems = computed(() => {
    return [
        {
            icon: "i-lucide-lightbulb",
            title: t(tk("items.clarity.title")),
            description: t(tk("items.clarity.description"))
        },
        {
            icon: "i-lucide-sun-medium",
            title: t(tk("items.stress.title")),
            description: t(tk("items.stress.description"))
        },
        {
            icon: "i-lucide-shield-check",
            title: t(tk("items.resilience.title")),
            description: t(tk("items.resilience.description"))
        },
        {
            icon: "i-lucide-calendar-check",
            title: t(tk("items.routines.title")),
            description: t(tk("items.routines.description"))
        },
        {
            icon: "i-lucide-waves",
            title: t(tk("items.balance.title")),
            description: t(tk("items.balance.description"))
        },
        {
            icon: "i-lucide-sprout",
            title: t(tk("items.impact.title")),
            description: t(tk("items.impact.description"))
        }
    ];
});
</script>

<template>
    <UPageSection
        :headline="t(tk('headline'))"
        :title="t(tk('title'))"
        :description="t(tk('description'))"
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
                    {{ t(tk("quote")) }}
                </p>
            </div>
        </div>
    </UPageSection>
</template>
