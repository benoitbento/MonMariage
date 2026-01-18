<template><v-container>
    <h1>📍 Le lieu du mariage</h1>
    Vous trouverez, ici, des adresses de lieux où vous pourrez dormir à proximité de l’Abbaye de Fontdouce :
    <AzureMap>Infos pratiques</AzureMap>
  </v-container>
  <v-container>
    Voici la liste des adresses qui vous seront utiles le jour de notre mariage :

    Mairie : 7 rue de Perjus, 17460 Préguillac

    Église Saint-Eulalie : 3 rue Sainte-Eulalie, 17460 Préguillac

    Salle polyvalente (pour le parking) : 3 rue du Calvaire, 17460 Préguillac

    Lieu de réception : Abbaye de Fontdouce, Rue du Vivier, 17770 Saint Bris des Bois
  </v-container>
</template>
<script>
import AzureMap from '@/components/AzureMap.vue';

export default {
  name: 'AdressesWedding',
  components: { AzureMap },
  mounted() {
  }
}

</script>