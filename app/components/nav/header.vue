<script setup lang="ts">
const {headerDesktop, headerMobile} = useNavItems();
const {t} = useI18n();
const localePath = useLocalePath();

const title = computed(() => t("site.name"));
</script>
<template>
    <UHeader
        class="h-17.5"
        mode="modal"
        :title="title"
        :to="localePath('/')"
        :menu="{transition: true}"
        :ui="{
            body: 'flex justify-center text-2xl'
        }">
        <template #title>
            <ColorScheme
                :placeholder="title"
                tag="span">
                <ClientOnly>
                    <AppLogo class="h-10 w-auto" />
                </ClientOnly>
            </ColorScheme>
        </template>

        <UNavigationMenu
            color="secondary"
            :highlight="true"
            highlight-color="secondary"
            :items="headerDesktop" />

        <template #right>
            <NavThemeToggle />
            <NavLanguageSelector />
        </template>

        <template #body>
            <UNavigationMenu
                color="secondary"
                :highlight="true"
                highlight-color="secondary"
                :items="headerMobile"
                orientation="vertical"
                :ui="{
                    list: 'flex flex-col gap-4',
                    linkLabel: 'text-2xl',
                    linkLeadingIcon: 'size-6'
                }" />
        </template>
    </UHeader>
</template>
