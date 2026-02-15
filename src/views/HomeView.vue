<template>
  <CountDown />

  <!-- <v-container>
        <h1>Bienvenue à notre mariage 💍</h1>
    </v-container> -->
</template>

<script setup>
import CountDown from '../components/CountDown.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Notre Mariage - Elyne & Benoît',
  meta: [
    { name: 'description', content: 'Tous les détails de notre union le 1er juin 2026.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'structured-data', // Clé unique pour éviter les doublons
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Mariage d'Elyne et Benoît",
        "startDate": "2026-06-01T14:00:00+02:00",
        "location": {
          "@type": "Place",
          "name": "Château de la Mariée",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lille",
            "addressCountry": "FR"
          }
        }
      })
    }
  ]
});



</script>