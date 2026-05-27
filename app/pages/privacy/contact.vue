<script setup lang="ts">
import type {FormSubmitEvent} from "@nuxt/ui";
import type {ContactFormData, ContactFormState} from "~~/shared/utils/schemas";
import {CONTACT_EMAIL_ADDRESS} from "~~/shared/utils/constants";
import {
    contactFormSchema,
    contactSubjectValues,
    createContactFormInitialState
} from "~~/shared/utils/schemas";

const {locale, t} = useI18n();

const state = reactive<ContactFormState>(createContactFormInitialState());
const pending = ref(false);
const submissionState = ref<"error" | "success" | null>(null);

const subjectItems = computed(() => {
    void locale.value;

    return contactSubjectValues.map((value) => ({
        label: t(`contact.form.subject.options.${value}`),
        value
    }));
});

const contactCards = computed(() => {
    void locale.value;

    return [
        {
            icon: "i-lucide-share-2",
            title: t("contact.cards.social.title"),
            description: t("contact.cards.social.description")
        },
        {
            icon: "i-lucide-mail",
            title: t("contact.cards.email.title"),
            description: t("contact.cards.email.description")
        },
        {
            icon: "i-lucide-phone",
            title: t("contact.cards.phone.title"),
            description: t("contact.cards.phone.description")
        }
    ];
});

useSeoMeta({
    title: () => t("contact.meta.title"),
    ogTitle: () => t("contact.meta.title"),
    description: () => t("contact.meta.description"),
    ogDescription: () => t("contact.meta.description")
});

const resetForm = () => {
    Object.assign(state, createContactFormInitialState());
};

const onSubmit = async (event: FormSubmitEvent<ContactFormData>) => {
    pending.value = true;
    submissionState.value = null;

    try {
        await $fetch("/api/contact", {
            method: "POST",
            body: event.data
        });

        submissionState.value = "success";
        resetForm();
    } catch {
        submissionState.value = "error";
    } finally {
        pending.value = false;
    }
};
</script>

<template>
    <UContainer class="py-12 sm:py-16 lg:py-20">
        <div class="space-y-12 lg:space-y-16">
            <section
                class="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:items-start">
                <div class="space-y-8">
                    <div class="space-y-5">
                        <p class="text-primary text-sm font-semibold">
                            {{ t("pages.contact") }}
                        </p>
                        <h1 class="text-highlighted text-4xl font-semibold text-pretty sm:text-5xl">
                            {{ t("contact.title") }}
                        </h1>
                        <p class="text-muted max-w-2xl text-lg leading-8">
                            {{ t("contact.intro") }}
                        </p>
                    </div>

                    <div class="border-default bg-muted/30 rounded-lg border p-6">
                        <h2 class="text-highlighted text-xl font-semibold">
                            {{ t("contact.details.heading") }}
                        </h2>
                        <dl class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                            <div class="flex gap-4">
                                <div
                                    class="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-md">
                                    <UIcon
                                        name="i-lucide-mail"
                                        class="size-5" />
                                </div>
                                <div>
                                    <dt class="text-muted text-sm">
                                        {{ t("contact.details.emailLabel") }}
                                    </dt>
                                    <dd class="text-highlighted font-medium">
                                        <ULink
                                            :to="`mailto:${CONTACT_EMAIL_ADDRESS}`"
                                            class="hover:text-primary">
                                            {{ CONTACT_EMAIL_ADDRESS }}
                                        </ULink>
                                    </dd>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div
                                    class="bg-secondary/20 text-highlighted flex size-10 shrink-0 items-center justify-center rounded-md">
                                    <UIcon
                                        name="i-lucide-phone"
                                        class="size-5" />
                                </div>
                                <div>
                                    <dt class="text-muted text-sm">
                                        {{ t("contact.details.phoneLabel") }}
                                    </dt>
                                    <dd class="text-highlighted font-medium">
                                        {{ t("contact.details.phoneValue") }}
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>

                <UCard
                    id="contact-form"
                    variant="subtle"
                    :ui="{body: 'space-y-6'}">
                    <template #header>
                        <div class="space-y-2">
                            <h2 class="text-highlighted text-2xl font-semibold">
                                {{ t("contact.form.title") }}
                            </h2>
                            <p class="text-muted">
                                {{ t("contact.form.description") }}
                            </p>
                        </div>
                    </template>

                    <UAlert
                        v-if="submissionState === 'success'"
                        color="success"
                        variant="soft"
                        icon="i-lucide-circle-check"
                        :title="t('contact.form.success.title')"
                        :description="t('contact.form.success.description')" />

                    <UAlert
                        v-if="submissionState === 'error'"
                        color="error"
                        variant="soft"
                        icon="i-lucide-circle-alert"
                        :title="t('contact.form.error.title')"
                        :description="t('contact.form.error.description')" />

                    <UForm
                        :schema="contactFormSchema"
                        :state="state"
                        :disabled="pending"
                        class="space-y-5"
                        @submit="onSubmit">
                        <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField
                                name="firstName"
                                required
                                :label="t('contact.form.firstName.label')">
                                <UInput
                                    v-model="state.firstName"
                                    class="w-full"
                                    :placeholder="t('contact.form.firstName.placeholder')" />
                            </UFormField>

                            <UFormField
                                name="lastName"
                                required
                                :label="t('contact.form.lastName.label')">
                                <UInput
                                    v-model="state.lastName"
                                    class="w-full"
                                    :placeholder="t('contact.form.lastName.placeholder')" />
                            </UFormField>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField
                                name="email"
                                required
                                :label="t('contact.form.email.label')">
                                <UInput
                                    v-model="state.email"
                                    class="w-full"
                                    type="email"
                                    :placeholder="t('contact.form.email.placeholder')" />
                            </UFormField>

                            <UFormField
                                name="phone"
                                :label="t('contact.form.phone.label')"
                                :help="t('contact.form.phone.help')">
                                <UInput
                                    v-model="state.phone"
                                    class="w-full"
                                    type="tel"
                                    :placeholder="t('contact.form.phone.placeholder')" />
                            </UFormField>
                        </div>

                        <UFormField
                            name="subject"
                            required
                            :label="t('contact.form.subject.label')">
                            <USelect
                                v-model="state.subject"
                                class="w-full"
                                :items="subjectItems"
                                :placeholder="t('contact.form.subject.placeholder')" />
                        </UFormField>

                        <UFormField
                            name="message"
                            required
                            :label="t('contact.form.message.label')"
                            :help="t('contact.form.message.help')">
                            <UTextarea
                                v-model="state.message"
                                class="w-full"
                                :rows="6"
                                :placeholder="t('contact.form.message.placeholder')" />
                        </UFormField>

                        <UFormField name="privacyConsent">
                            <UCheckbox
                                v-model="state.privacyConsent"
                                :label="t('contact.form.privacyConsent.label')"
                                :description="t('contact.form.privacyConsent.help')" />
                        </UFormField>

                        <UButton
                            type="submit"
                            block
                            size="lg"
                            icon="i-lucide-send"
                            :loading="pending"
                            :disabled="pending"
                            :label="t('contact.form.submit')" />
                    </UForm>
                </UCard>
            </section>

            <section class="space-y-5">
                <h2 class="text-highlighted text-2xl font-semibold">
                    {{ t("contact.cards.heading") }}
                </h2>
                <div class="grid gap-4 md:grid-cols-3">
                    <UCard
                        v-for="card in contactCards"
                        :key="card.title"
                        variant="subtle"
                        :ui="{body: 'space-y-4'}">
                        <div
                            class="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-md">
                            <UIcon
                                :name="card.icon"
                                class="size-5" />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-highlighted text-lg font-semibold">
                                {{ card.title }}
                            </h3>
                            <p class="text-muted leading-7">
                                {{ card.description }}
                            </p>
                        </div>
                    </UCard>
                </div>
            </section>
        </div>
    </UContainer>
</template>
