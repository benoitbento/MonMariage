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
    console.log('Azure Maps Key: dans AzureMap',  process.env.VUE_APP_AZURE_MAPS_KEY);
    const mappy = new atlas.Map('azureMap', {
      center: [-0.455199, 45.76992], // Exemple : Paris
      zoom: 10,
      language: 'fr-FR',
      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: process.env.VUE_APP_AZURE_MAPS_KEY,
      },
    })
    const popup = new atlas.Popup({
      content: '<div style="padding:5px;">📍 Abbaye de Fontdouce, 17770 Saint-Bris-des-Bois</div>',
      position: [-0.455199, 45.76992]
    })

    console.log(mappy);
    const pin = new atlas.HtmlMarker({
      position: [-0.455199, 45.76992],
      text: '💍',
      title: 'Lieu du mariage',
    });
    mappy.events.add('ready', () => {

      mappy.markers.add(pin)
    });
    mappy.events.add('click', pin, () => {
      popup.open(mappy);
    });
    }
}
</script>
