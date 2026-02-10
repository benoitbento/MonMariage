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
      center: [-0.5590052, 45.7370689],
      zoom: 10,
      style: 'grayscale_light',
      language: 'fr-FR',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: mapKey,
      },
      dragPanInteraction: {
        freeForm: false
      }
    })
    const popup = new atlas.Popup({
      content: `
            <div class="custom-popup">
                <p style="margin-bottom:8px; font-weight:bold;">📍 Abbaye de Fontdouce</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Abbaye+de+Fontdouce+17770" 
                   target="_blank" class="gps-button">
                   Y aller (GPS)
                </a>
            </div>`,
      position: coords,
      pixelOffset: [0, -30]
    })

    const pin = new atlas.HtmlMarker({
      position: coords,
      htmlContent: '<div class="pin-wedding">💍</div>',
      pixelOffset: [0, -15]
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
    htmlContent: `
      <div class="pin-marker">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M13,3L4,7V11C4,17 13,23 13,23S22,17 22,11V7L13,3Z" />
        </svg>
      </div>`,
    pixelOffset: [0, -15]
  });
  const mairiePopup = new atlas.Popup({
    content: `
      <div class="custom-popup">
        <h4>🏛️ Mairie de Préguillac</h4>
        <p>7 rue de Perjus, 17460 Préguillac</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=7+rue+de+Perjus+17460+Préguillac"
           target="_blank" class="gps-button">
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
    htmlContent: `
      <div class="pin-marker">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M12,2L4,7V11C4,17 12,23 12,23S20,17 20,11V7L12,2Z" />
        </svg>
      </div>`,
    pixelOffset: [0, -15]
  });
  const eglisePopup = new atlas.Popup({
    content: `
      <div class="custom-popup">
        <h4>⛪ Église Saint‑Eulalie</h4>
        <p>3 rue Sainte-Eulalie, 17460 Préguillac</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=3+rue+Sainte-Eulalie+17460+Préguillac"
           target="_blank" class="gps-button">
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
    htmlContent: `
      <div class="pin-marker">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      </div>`,
    pixelOffset: [0, -15]
  });
  const sallePopup = new atlas.Popup({
    content: `
      <div class="custom-popup">
        <h4>🅿️ Parking – Salle polyvalente</h4>
        <p>3 rue du Calvaire, 17460 Préguillac</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=3+rue+du+Calvaire+17460+Préguillac"
           target="_blank" class="gps-button">
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
    overflow: hidden;
    border: 1px solid #f0e6d2;
    filter: sepia(20%) brightness(105%);
}

:deep(.custom-popup) {
  padding: 10px;
  text-align: center;
  font-family: 'Montserrat', sans-serif !important;
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

:deep(.gps-button:hover) {
  background-color: #b48e4a;
}

/* Style du marqueur principal (Abbaye) */
:deep(.pin-wedding) {
  font-size: 30px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Style des marqueurs génériques */
:deep(.pin-marker) {
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
  filter: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.pin-marker svg) {
  width: 16px;
  height: 16px;
}

:deep(.pin-marker:hover) {
  transform: scale(1.2) translateY(-5px);
  background-color: #c5a059;
  color: white;
}

/* Supprime les ombres des popups */
:deep(.atlas-popup-container) {
  box-shadow: none !important;
  filter: none !important;
}

:deep(.atlas-popup-pointer) {
  box-shadow: none !important;
  filter: none !important;
}

:deep(.azure-maps-html-marker) {
    cursor: pointer;
}
</style>