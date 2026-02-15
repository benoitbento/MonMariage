<template>
  <WeddingCard title="Où séjourner?">
    Vous trouverez, ici, des adresses de lieux où vous pourrez dormir à proximité de l’Abbaye de Fontdouce :
    <v-container fluid class="pa-0 mt-4">
      <div class="map-wrapper">
        <div id="azureMap" class="wedding-map"></div>
      </div>
    </v-container>
  </WeddingCard>
</template>
<script setup>
import * as atlas from 'azure-maps-control';
import WeddingCard from '@/components/WeddingCard.vue';
import 'azure-maps-control/dist/atlas.min.css';
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';

useHead({
  title: 'Où séjourner? - Notre Mariage',
  meta: [
    { name: 'description', content: 'Découvrez les hébergements à proximité de l\'Abbaye de Fontdouce pour notre mariage.' }
  ]
});

onMounted(async () => {
  const abbayeCoords = [-0.455199, 45.76992];
  const mapKey = process.env.VUE_APP_AZURE_MAPS_KEY;

  const map = new atlas.Map('azureMap', {
    center: abbayeCoords,
    zoom: 12,
    style: 'grayscale_light', // Change 'main' par un style plus doux
    language: 'fr-FR',
    authOptions: {
      authType: 'subscriptionKey',
      subscriptionKey: mapKey,
    },
    dragPanInteraction: {
      freeForm: false // Empêche la carte de capturer le scroll vertical trop facilement
    }
  });

  map.events.add('ready', async () => {

    // --- Marqueur principal (Abbaye) ---
    const abbayeMarker = new atlas.HtmlMarker({
      position: abbayeCoords,
      // On utilise une div avec une classe pour le CSS
      htmlContent: '<div class="pin-wedding">💍</div>',
      pixelOffset: [0, -15]
    });
    map.markers.add(abbayeMarker);

    const abbayePopup = new atlas.Popup({
      content: `
          <div style="padding:10px; text-align:center;">
            <p style="margin-bottom:8px; font-weight:bold;">📍 Abbaye de Fontdouce</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Abbaye+de+Fontdouce+17770"
               target="_blank"
               style="background-color:#c5a059; color:white; padding:5px 10px; text-decoration:none; border-radius:5px; font-size:12px;">
               Y aller (GPS)
            </a>
          </div>`,
      position: abbayeCoords,
      pixelOffset: [0, -30]
    });

    abbayePopup.open(map);

    // --- Appel API Azure Maps : hébergements ---
    const radius = 15000; // 15 km autour de l'Abbaye
    const url = `https://atlas.microsoft.com/search/poi/category/json?api-version=1.0&subscription-key=${mapKey}&lon=${abbayeCoords[0]}&lat=${abbayeCoords[1]}&radius=${radius}&categorySet=7311,7312,7313,7314,7315,7316&query=chambre%20d'hôtes|hôtel|gîte|auberge|dormir|chambre|guest|house`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.results) {
      console.warn('Aucun résultat retourné par l\'API', data);
      return;
    }
    let resultsArray = data.results;
    if (!Array.isArray(resultsArray)) {
      // Si c'est un objet indexé, on prend ses valeurs
      if (typeof resultsArray === 'object' && resultsArray !== null) {
        resultsArray = Object.values(resultsArray);
      } else {
        console.warn('results n\'est ni un tableau ni un objet convertible', resultsArray);
        return;
      }
    }

    resultsArray.forEach((poi) => {
      // Défensive: vérifier la présence de position
      if (!poi || !poi.position) {
        console.warn('POI sans position', poi);
        return;
      }

      // Normaliser la position : accepter [lon, lat] ou {lat, lon}
      let lon, lat;
      if (Array.isArray(poi.position) && poi.position.length >= 2) {
        [lon, lat] = poi.position;
      } else if (typeof poi.position === 'object') {
        // certains services renvoient { lat: ..., lon: ... } ou { latitude: ..., longitude: ... }
        lat = poi.position.lat ?? poi.position.latitude ?? poi.position.y;
        lon = poi.position.lon ?? poi.position.longitude ?? poi.position.x;
      }

      if (typeof lon !== 'number' || typeof lat !== 'number') {
        console.warn('Coordonnées invalides pour ce POI', poi);
        return;
      }

      // Création du marqueur et du popup (comme avant)
      const marker = new atlas.HtmlMarker({
        position: [lon, lat],
        // On utilise une icône Material Design ou un simple SVG de maison
        htmlContent: `
      <div class="pin-hotel">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      </div>`,
        anchor: 'center'
      });
      map.markers.add(marker);

      const address = poi.address?.freeformAddress || poi.address || '';
      const popup = new atlas.Popup({
        content: `
      <div class="custom-popup">
        <h4>🏨 ${poi.poi?.name || 'Hébergement'}</h4>
        <p>${address}</p>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}"
           target="_blank" class="gps-button">
           Y ALLER (GPS)
        </a>
      </div>`,
        position: [lon, lat],
        pixelOffset: [0, -20]
      });

      map.events.add('click', marker, () => popup.open(map));
    });

  })
});
</script>

<style scoped>
#azureMap {
  border-radius: 15px;

  /* Filtre optionnel pour adoucir encore plus les couleurs de la map */
  filter: sepia(20%) brightness(105%);
}

:deep(.custom-popup) {
  padding: 10px;
  text-align: center;
  font-family: 'Montserrat', sans-serif !important;
}

/* Style du marqueur Alliance (Abbaye) */
:deep(.pin-wedding) {
  font-size: 30px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Style des marqueurs Hébergements (Petits points dorés) */
:deep(.pin-hotel) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: white;
  color: #c5a059;
  border-radius: 50%;
  border: 2px solid #c5a059;
  box-shadow: none;
  /* 👈 plus d’ombre */
  filter: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.pin-hotel svg) {
  width: 16px;
  height: 16px;
}

.map-wrapper {
  width: 94%;
  margin: 0 auto;
  border-radius: 15px;
  /* box-shadow: 0 8px 25px rgba(0,0,0,0.15); Ombre uniforme */
  border: 1px solid #f0e6d2;
  overflow: visible;
  /* important */
}

.wedding-map {
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  /* OK ici */
  filter: sepia(20%) brightness(105%);
}

/* Sur écrans plus larges (Tablettes/PC) */
@media (min-width: 600px) {
  .wedding-map {
    width: 100%;
    height: 500px;
  }
}


:deep(.pin-hotel:hover) {
  transform: scale(1.2) translateY(-5px);
  background-color: #c5a059;
  color: white;
}

/* Supprime l'ombre de la bulle (le conteneur principal) */
:deep(.atlas-popup-container) {
  box-shadow: none !important;
  filter: none !important;
}

/* Supprime aussi l'ombre sur la petite flèche (le bec) sous la popup */
:deep(.atlas-popup-pointer) {
  box-shadow: none !important;
  filter: none !important;
}


:deep(.custom-popup h4) {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #333;
}

:deep(.custom-popup p) {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}

/* Bouton GPS dans le popup */
:deep(.gps-button) {
  display: inline-block;
  background-color: #c5a059;
  color: white !important;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 20px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
