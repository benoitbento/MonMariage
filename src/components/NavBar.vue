<template>
  <v-app-bar class="wedding-nav" flat color="white" height="70">
    <v-toolbar-title class="d-flex align-center ml-8">
      <span class="wedding-logo">Notre Mariage</span>
      <svg class="rings-icon ml-3" width="36" height="24" viewBox="0 0 100 60">
        <circle cx="35" cy="30" r="26" fill="none" stroke="#D4AF37" stroke-width="4" />
        <circle cx="65" cy="30" r="26" fill="none" stroke="#D4AF37" stroke-width="4" />
      </svg>
    </v-toolbar-title>
    <v-spacer />
    <div class="nav-items h-100 d-flex align-center">
      <v-btn variant="text" to="/">Bienvenue</v-btn>
      <v-btn variant="text" to="/CommonHistory">Notre histoire</v-btn>
      <v-btn variant="text" to="/DressCode">Dress code</v-btn>
      <v-btn variant="text" to="/PlanningWholeDay">Planning</v-btn>
      <v-btn variant="text" to="/BookingAround">Où séjourner</v-btn>
      <v-btn variant="text" to="/AdressesWedding">Adresses</v-btn>^
    </div>

  </v-app-bar>
</template>

<script setup>
// Pas besoin de script si tu n’as pas de logique dynamique
</script>

<style scoped>

</style>