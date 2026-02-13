<template><WeddingCard title ="Le lieu du mariage">
    <AzureMap></AzureMap>
  </WeddingCard>
</template>
<script>
import AzureMap from '@/components/AzureMap.vue';
import WeddingCard from '@/components/WeddingCard.vue';

export default {
  name: 'AdressesWedding',
  components: { AzureMap ,WeddingCard},
  mounted() {
  }
}

</script>