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
    const mapKey = process.env.VUE_APP_AZURE_MAPS_KEY;

    const locations = {
      abbaye: [-0.455199, 45.76992],
      mairie: [-0.6195983, 45.6670183],
      eglise: [-0.6193, 45.6680],
      salle: [-0.6192393, 45.6695985]
    };

    const mappy = new atlas.Map('azureMap', {
      style: 'grayscale_light',
      language: 'fr-FR',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: mapKey
      },
      dragPanInteraction: { freeForm: false }
    });

    mappy.events.add('ready', () => {
      const allCoords = Object.values(locations);
      const bbox = atlas.data.BoundingBox.fromPositions(allCoords);
      mappy.setCamera({ bounds: bbox, padding: 50 });

      const createPoint = (pos, html, popupContent, offset = [0, -15]) => {
        const marker = new atlas.HtmlMarker({
          position: pos,
          htmlContent: html,
          pixelOffset: offset
        });

        const popup = new atlas.Popup({
          content: `<div class="custom-popup">${popupContent}</div>`,
          pixelOffset: [0, -30]
        });

        mappy.markers.add(marker);

        mappy.events.add('click', marker, () => {
          popup.setOptions({ position: pos });
          popup.open(mappy);
        });

        return { marker, popup };
      };

      const abbaye = createPoint(
        locations.abbaye,
        '<div class="pin-wedding">💍</div>',
        `<b>📍 Abbaye de Fontdouce</b><br><br>
         <a href="https://www.google.com/maps/dir/?api=1&destination=45.76992,-0.455199" target="_blank" class="gps-button">Y aller (GPS)</a>`
      );
      abbaye.popup.open(mappy); // Ouvert par défaut

      createPoint(
        locations.mairie,
        '<div class="pin-marker"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M13,3L4,7V11C4,17 13,23 13,23S22,17 22,11V7L13,3Z" /></svg></div>',
        `<h4>🏛️ Mairie de Préguillac</h4><p>7 rue de Perjus, 17460 Préguillac</p>
         <a href="https://www.google.com/maps/dir/?api=1&destination=45.6670183,-0.6195983" target="_blank" class="gps-button">Y aller (GPS)</a>`,
        [-12, -15]
      );

      createPoint(
        locations.eglise,
        '<div class="pin-marker"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12,2L4,7V11C4,17 12,23 12,23S20,17 20,11V7L12,2Z" /></svg></div>',
        `<h4>⛪ Église Sainte-Eulalie</h4><p>3 rue Sainte-Eulalie, 17460 Préguillac</p>
         <a href="https://www.google.com/maps/dir/?api=1&destination=45.6680,-0.6193" target="_blank" class="gps-button">Y aller (GPS)</a>`,
        [12, -15]
      );

      createPoint(
        locations.salle,
        '<div class="pin-marker"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg></div>',
        `<h4>🅿️ Parking – Salle polyvalente</h4><p>3 rue du Calvaire, 17460 Préguillac</p>
         <a href="https://www.google.com/maps/dir/?api=1&destination=45.6695985,-0.6192393" target="_blank" class="gps-button">Y aller (GPS)</a>`
      );
    });
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

:deep(.azure-maps-html-marker) {
  cursor: pointer !important;
  pointer-events: auto !important;
  z-index: 10;
}

:deep(.azure-maps-html-marker *) {
  pointer-events: none;
}

:deep(.azure-maps-html-marker:hover) {
  z-index: 1000 !important;
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

:deep(.pin-wedding) {
  font-size: 30px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

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

:deep(.atlas-popup-container) {
  box-shadow: none !important;
  filter: none !important;
}

:deep(.atlas-popup-pointer) {
  box-shadow: none !important;
  filter: none !important;
}
</style>