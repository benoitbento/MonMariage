<template>
    <v-container>
        <div id="azureMap" style="width: 100%; height: 400px;"></div>
    </v-container>
</template>

<script>
import * as atlas from 'azure-maps-control';

export default {
    name: 'AzureMap',
    mounted() {
      const coords = [-0.455199, 45.76992];
      const mapKey = process.env.VUE_APP_AZURE_MAPS_KEY;
    console.log('Azure Maps Key: dans AzureMap',  process.env.VUE_APP_AZURE_MAPS_KEY);

    const mappy = new atlas.Map('azureMap', {
      center: [-0.5590052, 45.7370689], // Exemple : Paris
      zoom: 10,
      language: 'fr-FR',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: mapKey,
      },
    })
    const popup = new atlas.Popup({
      content: `
            <div style="padding:10px; text-align:center;">
                <p style="margin-bottom:8px; font-weight:bold;">📍 Abbaye de Fontdouce</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Abbaye+de+Fontdouce+17770" 
                   target="_blank" 
                   style="background-color:#c5a059; color:white; padding:5px 10px; text-decoration:none; border-radius:5px; font-size:12px;">
                   Y aller (GPS)
                </a>
            </div>`,
      position: coords,
      pixelOffset: [0, -30]
    })

    const pin = new atlas.HtmlMarker({
      position: coords,
      text: '💍',
      title: 'Lieu du mariage',
    });
    mappy.events.add('ready', () => {

      mappy.markers.add(pin);
      popup.open(mappy);
    });
    mappy.events.add('click', pin, () => {
      popup.open(mappy);
    });

    const mairieCoords = [ -0.6195983, 45.6670183 ];
  const mairieMarker = new atlas.HtmlMarker({
    position: mairieCoords,
    text: '🏛️',
    title: 'Mairie de Préguillac'
  });
  const mairiePopup = new atlas.Popup({
    content: `
      <div style="padding:10px; text-align:center;">
        <p style="margin-bottom:8px; font-weight:bold;">🏛️ Mairie de Préguillac</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=7+rue+de+Perjus+17460+Préguillac"
           target="_blank"
           style="background-color:#c5a059; color:white; padding:5px 10px; text-decoration:none; border-radius:5px; font-size:12px;">
           Y aller (GPS)
        </a>
      </div>`,
    position: mairieCoords,
    pixelOffset: [0, -30]
  });
  mappy.markers.add(mairieMarker);
  mappy.events.add('click', mairieMarker, () => mairiePopup.open(mappy));

const egliseCoords = [ -0.6193, 45.6680 ];
  const egliseMarker = new atlas.HtmlMarker({
    position: egliseCoords,
    text: '⛪',
    title: 'Église Saint‑Eulalie'
  });
  const eglisePopup = new atlas.Popup({
    content: `
      <div style="padding:10px; text-align:center;">
        <p style="margin-bottom:8px; font-weight:bold;">⛪ Église Saint‑Eulalie</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=3+rue+Sainte-Eulalie+17460+Préguillac"
           target="_blank"
           style="background-color:#c5a059; color:white; padding:5px 10px; text-decoration:none; border-radius:5px; font-size:12px;">
           Y aller (GPS)
        </a>
      </div>`,
    position: egliseCoords,
    pixelOffset: [0, -30]
  });
  mappy.markers.add(egliseMarker);
  mappy.events.add('click', egliseMarker, () => eglisePopup.open(mappy));

  // --- Salle polyvalente (parking) ---
  const salleCoords = [ -0.6192393, 45.6695985 ];
  const salleMarker = new atlas.HtmlMarker({
    position: salleCoords,
    text: '🅿️',
    title: 'Parking – Salle polyvalente'
  });
  const sallePopup = new atlas.Popup({
    content: `
      <div style="padding:10px; text-align:center;">
        <p style="margin-bottom:8px; font-weight:bold;">🅿️ Parking – Salle polyvalente</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=3+rue+du+Calvaire+17460+Préguillac"
           target="_blank"
           style="background-color:#c5a059; color:white; padding:5px 10px; text-decoration:none; border-radius:5px; font-size:12px;">
           Y aller (GPS)
        </a>
      </div>`,
    position: salleCoords,
    pixelOffset: [0, -30]
  });
  mappy.markers.add(salleMarker);
  mappy.events.add('click', salleMarker, () => sallePopup.open(mappy));


    }
}
</script>

<style scoped>
#azureMap {
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    overflow: hidden;
    border: 1px solid #f0e6d2;
}

/* Style pour l'icône de la bague si tu veux la personnaliser */
:deep(.azure-maps-html-marker) {
    font-size: 24px;
    cursor: pointer;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}
a:hover {
  background-color: #b48e4a;
}
</style>