<script setup lang="ts">
const {themedIcon} = useUtils();
const {footer: navItems} = useNavItems();
</script>

<template>
    <div class="flex min-h-svh flex-col">
        <NavHeader />

        <UMain class="grow">
            <UContainer>
                <slot />
            </UContainer>
        </UMain>

        <ClientOnly>
            <USeparator
                orientation="horizontal"
                :avatar="{
                    src: themedIcon,
                    ui: {
                        image: 'object-fill'
                    }
                }" />
        </ClientOnly>

        <NavFooter>
            <template #navigation>
                <UNavigationMenu
                    class="hidden md:flex"
                    color="secondary"
                    :highlight="true"
                    highlight-color="secondary"
                    :items="navItems" />
            </template>
            <template #social>
                <NavThemeToggle />
                <NavLanguageSelector />
            </template>
        </NavFooter>
    </div>
</template>
