<script setup lang="ts">
import {
    COOKIE_NOTICE_SHOW_EVENT,
    COOKIE_STORAGE_KEY,
    i18nRouteNames
} from "#shared/utils/constants";

const showCookieBanner = ref(false);
const localePath = useLocalePath();
const {t} = useI18n();

function hasDismissedCookieBanner() {
    try {
        return localStorage.getItem(COOKIE_STORAGE_KEY) === "true";
    } catch {
        return false;
    }
}

function rememberCookieBannerDismissal() {
    try {
        localStorage.setItem(COOKIE_STORAGE_KEY, "true");
    } catch {
        // The notice can still be dismissed for the current session if storage is unavailable.
    }
}

function show() {
    showCookieBanner.value = true;
}

function dismiss() {
    showCookieBanner.value = false;
    rememberCookieBannerDismissal();
}

onMounted(() => {
    showCookieBanner.value = !hasDismissedCookieBanner();

    window.addEventListener(COOKIE_NOTICE_SHOW_EVENT, show);
});

onBeforeUnmount(() => {
    window.removeEventListener(COOKIE_NOTICE_SHOW_EVENT, show);
});
</script>

<template>
    <div
        v-if="showCookieBanner"
        class="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl sm:right-6 sm:left-auto sm:mx-0 sm:max-w-lg">
        <UCard
            variant="subtle"
            :ui="{
                root: 'border-default shadow-xl shadow-black/10 backdrop-blur',
                body: 'p-4 sm:p-5'
            }">
            <div class="flex gap-4">
                <UIcon
                    name="i-lucide-cookie"
                    class="text-primary mt-1 size-5 shrink-0" />

                <div class="min-w-0 flex-1 space-y-3">
                    <div class="space-y-1">
                        <h2 class="text-highlighted text-base font-semibold">
                            {{ t("cookieBanner.title") }}
                        </h2>
                        <p class="text-muted text-sm leading-6">
                            {{ t("cookieBanner.description") }}
                        </p>
                    </div>

                    <div class="flex flex-col gap-2 sm:flex-row sm:justify-end">
                        <UButton
                            :to="localePath(i18nRouteNames.privacy)"
                            color="neutral"
                            variant="outline"
                            icon="i-lucide-shield-user">
                            {{ t("cookieBanner.privacy") }}
                        </UButton>
                        <UButton
                            icon="i-lucide-check"
                            @click="dismiss">
                            {{ t("cookieBanner.accept") }}
                        </UButton>
                    </div>
                </div>
            </div>
        </UCard>
    </div>
</template>
