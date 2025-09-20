<template>
  <v-app-bar flat color="white" elevation="1">
    <v-toolbar-title class="text-h6 font-weight-light">Notre Mariage</v-toolbar-title>

    <v-spacer />

    <v-btn variant="text" to="/">Accueil</v-btn>
    <v-btn variant="text" to="/HistoryView">Notre histoire</v-btn>
    <v-btn variant="text" to="/InfoView">Infos pratiques</v-btn>
    <v-btn variant="text" to="/RSVPViewsvp">RSVP</v-btn>
  </v-app-bar>
</template>

<script setup>
// Pas besoin de script si tu n’as pas de logique dynamique
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid #eee;
}
</style>