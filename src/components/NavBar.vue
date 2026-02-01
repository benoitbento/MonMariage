<template>
  <nav> 
  <v-app-bar class="wedding-nav" flat color="white" height="70">
    <v-toolbar-title class="d-flex align-center ml-8">
      <span class="wedding-logo">Notre Mariage</span>
      <svg class="rings-icon ml-3" width="36" height="24" viewBox="0 0 100 60">
        <circle cx="35" cy="30" r="26" fill="none" stroke="#D4AF37" stroke-width="4" />
        <circle cx="65" cy="30" r="26" fill="none" stroke="#D4AF37" stroke-width="4" />
      </svg>
    </v-toolbar-title>
    <v-spacer />
<div class="nav-items d-none d-md-flex align-center mr-4">
        <v-btn variant="text" to="/">Bienvenue</v-btn>
      <v-btn variant="text" to="/CommonHistory">Notre histoire</v-btn>
      <v-btn variant="text" to="/DressCode">Dress code</v-btn>
      <v-btn variant="text" to="/PlanningWholeDay">Planning</v-btn>
      <v-btn variant="text" to="/BookingAround">Où séjourner</v-btn>
      <v-btn variant="text" to="/AdressesWedding">Adresses</v-btn>
    </div>
<v-app-bar-nav-icon 
        class="d-md-none mr-2" 
        @click="drawer = !drawer"
        color="#c5a059"
      ></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list class="mt-4">
        <v-list-item to="/" title="Bienvenue" prepend-icon="mdi-home-heart"></v-list-item>
        <v-list-item to="/CommonHistory" title="Notre histoire" prepend-icon="mdi-book-open-page-variant"></v-list-item>
        <v-list-item to="/DressCode" title="Dress code" prepend-icon="mdi-tshirt-crew"></v-list-item>
        <v-list-item to="/PlanningWholeDay" title="Planning" prepend-icon="mdi-calendar-heart"></v-list-item>
        <v-list-item to="/BookingAround" title="Où séjourner" prepend-icon="mdi-bed"></v-list-item>
        <v-list-item to="/AdressesWedding" title="Adresses" prepend-icon="mdi-map-marker-radius"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
// Pas besoin de script si tu n’as pas de logique dynamique
</script>

<style scoped>
/* On force le titre à se comporter comme un flexbox */
:deep(.v-toolbar-title__placeholder) {
  display: flex;
  align-items: center;
}
.rings-icon {
  /* On s'assure que le SVG est bien centré verticalement */
  display: inline-block;
  vertical-align: middle;
}
</style>