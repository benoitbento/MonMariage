<template><v-container>
    <h1>📍 Le lieu du mariage</h1>
    <AzureMap>Infos pratiques</AzureMap>
  </v-container></template>
<script>
import AzureMap from '@/components/AzureMap.vue';

export default {
  name: 'AdressesWedding',
  components: {AzureMap},
  mounted() {
  }
}

</script>