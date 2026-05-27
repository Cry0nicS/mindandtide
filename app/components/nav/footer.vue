<script setup lang="ts">
const slots = useSlots();
const {locale, t} = useI18n();

const currentYear = computed(() => new Date().getFullYear());
const copyright = computed(() => {
    void locale.value;

    return t("common.copyright", {year: currentYear.value});
});
</script>

<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">{{ copyright }}</p>
        </template>
        <template
            v-if="slots.navigation"
            #default>
            <slot name="navigation" />
        </template>
        <template
            v-if="slots.social"
            #right>
            <slot name="social" />
        </template>
    </UFooter>
</template>
