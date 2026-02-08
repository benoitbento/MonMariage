<template>
  <nav>
    <v-app-bar class="wedding-nav" flat color="white" height="70">
      <v-toolbar-title class="ml-2 ml-sm-8">
        <div class="d-flex align-center">
        <span class="wedding-logo text-no-wrap ">Notre Mariage</span>
        <svg class="rings-icon ml-2" width="30" height="20" viewBox="0 0 100 60">
          <circle cx="35" cy="30" r="26" fill="none" stroke="#D4AF37" stroke-width="4" />
          <circle cx="65" cy="30" r="26" fill="none" stroke="#D4AF37" stroke-width="4" />
        </svg>
      </div>
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
      <v-app-bar-nav-icon class="d-md-none mr-2" @click="drawer = !drawer" color="#c5a059"
        icon="mdi-heart-outline"></v-app-bar-nav-icon>
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
/* Dans ton CSS */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
/* Correction pour l'icône sur mobile */
@media (max-width: 400px) {
  .rings-icon {
    width: 22px; /* On réduit la taille des bagues */
    height: 14px;
    margin-left: 4px !important;
  }
  .wedding-logo {
    font-size: 0.95rem; /* Réduction légère du texte pour laisser de la place aux bagues */
  }
  .ml-2 {
    margin-left: 4px !important;
  }
}
/* Sur écrans moyens et larges (Tablettes/PC) */
@media (min-width: 600px) {
  .wedding-logo {
    font-size: 1.5rem;
  }
  .rings-icon {
    width: 30px;
    height: 20px;
  }
}

:deep(.v-app-bar-nav-icon) {
  animation: softPulse 2.5s ease-in-out infinite;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.12);
  border: 1.5px solid #d4af37;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  /* transition: background 0.3s ease, box-shadow 0.3s ease; 
  
  background: rgba(212, 175, 55, 0.12);
  */
}

/* Empêche le titre de se faire couper ou d'être trop large */
.v-toolbar-title {
  flex: 0 1 auto !important;
  min-width: 0; /* Important pour flexbox sur mobile */
  padding-right: 8px;
}

.d-flex.align-center {
  max-width: 100%;
}


.wedding-logo {
font-family: 'Montserrat', sans-serif !important;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Si vraiment trop long, on coupe proprement le texte */
}

@keyframes softPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.06); }
  100% { transform: scale(1); }
}

:deep(.v-app-bar-nav-icon) {
  animation: softPulse 2.5s ease-in-out infinite;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}


/* On force le titre à se comporter comme un flexbox */
:deep(.v-toolbar-title__placeholder) {
  display: flex;
  align-items: center;
  overflow: visible !important; /* Permet aux bagues de ne pas être rognées par Vuetify */
}

.rings-icon {
  flex-shrink: 0; /* EMPECHE LES BAGUES DE SE COUPER */
  display: block;
}
</style>