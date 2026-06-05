<script setup lang="ts">
const heroImage =
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2400&q=80";
const processImage =
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80";
const placeImage =
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80";
</script>

<template>
    <LandingOfferPage
        content-key="pages.retreatsPage"
        :hero-image="heroImage"
        :process-image="processImage"
        :place-image="placeImage" />
</template>
