<template>
  <WeddingCard title="Le lieu du mariage">
    <AzureMap></AzureMap>
  </WeddingCard>
</template>
<script setup>
import AzureMap from '@/components/AzureMap.vue';
import WeddingCard from '@/components/WeddingCard.vue';
import { useHead } from '@unhead/vue';
import { defineComponent } from 'vue';

useHead({
  title: 'Adresses - Notre Mariage',
  meta: [
    { name: 'description', content: 'Découvrez les adresses importantes pour notre mariage.' }
  ]
});
defineComponent({
  name: 'AdressesWedding',
  components: { AzureMap, WeddingCard },
  mounted() {
  }
});

</script>