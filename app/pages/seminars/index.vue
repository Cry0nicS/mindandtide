<script setup lang="ts">
const heroImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";
const placeImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";
</script>

<template>
    <LandingOfferPage
        content-key="pages.homePage"
        :hero-image="heroImage"
        :process-image="processImage"
        :place-image="placeImage" />
</template>
