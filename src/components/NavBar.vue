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
.v-app-bar {
  border-bottom: 1px solid #eee;
}

/* Dans ton composant Nav */
.nav-links {
  display: flex;
  gap: 5px;
  /* Espace entre les boutons */
}

.wedding-nav {
  /* On augmente l'épaisseur à 2px ou 3px selon votre préférence */
  border-bottom: 2px solid #dbd0ba !important; 
  /* On s'assure que l'ombre de Vuetify ne cache pas la ligne */
  box-shadow: none !important;
}

.nav-item {
  text-decoration: none;
  color: #4a4a4a;
  padding: 8px 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

/* Le fameux rectangle rose de la maquette */
.router-link-active {
  background-color: #f2d7d7 !important;
  /* Rose poudré */
  color: #000;
  border-radius: 4px;
}
</style>