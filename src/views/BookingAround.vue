<template>
<WeddingCard title="Où séjourner">
    Vous trouverez, ici, des adresses de lieux où vous pourrez dormir à proximité de l’Abbaye de Fontdouce :
<v-container>
    <div id="azureMap" style="width: 100%; height: 400px;"></div>
  </v-container>


</WeddingCard></template>
<script>
import * as atlas from 'azure-maps-control';
import WeddingCard from '@/components/WeddingCard.vue';
import 'azure-maps-control/dist/atlas.min.css';

export default {
  name: 'BookingAround',
  components: { WeddingCard },
  async mounted() {
    const abbayeCoords = [-0.455199, 45.76992];
    const mapKey = process.env.VUE_APP_AZURE_MAPS_KEY;

    const map = new atlas.Map('azureMap', {
      center: abbayeCoords,
      zoom: 12,
      language: 'fr-FR',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: mapKey,
      },
    });

    map.events.add('ready', async () => {

      // --- Marqueur principal (Abbaye) ---
      const abbayeMarker = new atlas.HtmlMarker({
        position: abbayeCoords,
        text: '💍',
        title: 'Abbaye de Fontdouce',
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
      const url = `https://atlas.microsoft.com/search/poi/category/json?api-version=1.0&subscription-key=${mapKey}&lon=${abbayeCoords[0]}&lat=${abbayeCoords[1]}&radius=${radius}&categorySet=7311,7312,7313,7314,7315&query=chambre%20d'hôtes|hôtel|gîte|auberge|dormir|`;

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
    text: '🏨',
    title: poi.poi?.name || poi.name || 'Hébergement',
  });
  map.markers.add(marker);

  const address = poi.address?.freeformAddress || poi.address || '';
  const popup = new atlas.Popup({
    content: `
      <div style="padding:10px; text-align:center;">
        <p style="margin-bottom:8px; font-weight:bold;">🏨 ${poi.poi?.name || poi.name || 'Hébergement'}</p>
        <div style="font-size:12px;">${address}</div>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address || (lat + ',' + lon))}"
           target="_blank"
           style="background-color:#c5a059; color:white; padding:5px 10px; text-decoration:none; border-radius:5px; font-size:12px;">
           Y aller (GPS)
        </a>
      </div>`,
    position: [lon, lat],
    pixelOffset: [0, -30]
  });

  map.events.add('click', marker, () => popup.open(map));
});

    })
  }}
</script>

<style scoped>
#azureMap {
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  border: 1px solid #f0e6d2;
}

:deep(.azure-maps-html-marker) {
  font-size: 24px;
  cursor: pointer;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}
</style>
