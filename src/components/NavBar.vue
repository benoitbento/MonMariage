<template>
  <v-app-bar flat color="white" elevation="1">
    <v-toolbar-title class="text-h6 font-weight-light">Notre Mariage</v-toolbar-title>

    <v-spacer />

    <v-btn variant="text" to="/">Bienvenue</v-btn>
    <v-btn variant="text" to="/CommonHistory">Notre histoire</v-btn>
    <v-btn variant="text" to="/DressCode">Dress code</v-btn>
    <v-btn variant="text" to="/PlanningWholeDay">Planning</v-btn>
    <v-btn variant="text" to="/BookingAround">Où séjourner</v-btn>
    <v-btn variant="text" to="/AdressesWedding">Adresses</v-btn>
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