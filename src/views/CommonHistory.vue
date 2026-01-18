<template>
  <PageContainer>
    <WeddingCard>
    <section class="history">
      <div class="history__container">
        <h1 class="history__title">Notre histoire</h1>
        <p class="history__text">Nous nous sommes rencontrés à Bordeaux, en 2019, au karaté. Benoît a été sonné par le mawashi-geri (coup de pieds circulaire) d’Elyne tandis qu’Elyne a été charmée par l’humour de Benoît, comme quoi, même dans un temple de la violence, le coup de foudre est à porter de pied.</p>

        <p class="history__text">Malheureusement, nous étions en 2020, autant vous rappeler que les relations sociales ont été quelque peu freinées à cause d’un pengolin. Notre premier rendez-vous a donc eu lieu à la sortie du premier confinement en mai 2020 : Benoît avait préparé un succulent repas puis programmé le film Le silence des agneaux (il avait tout compris...).</p>

        <p class="history__text">Habitant tous les deux à Bordeaux, nous en profitâmes pour visiter ses alentours, la Charente-Maritime, l’Eure-et-Loir mais aussi de succulents restaurants gastronomiques avec option panne de carte gold.</p>

        <p class="history__text">En 2022, après deux belles années de relation sans cohabitation, nous nous installâmes enfin ensemble et déménageâmes à Lille pour qu'Elyne puisse finir ses études, mais aussi vider Benoit de l’excès de vitamine D. Nous passâmes notre ceinture noire de karaté, de quoi rendre Elyne encore plus terrifiante.</p>

        <p class="history__text">Comme le Nord était synonyme d’étranger voire d’étrange, nous voyageâmes en Belgique, à Lisbonne, à Budapest et bien entendu dans les Hauts-de-France. Nous nous fiançâmes le 15 juin 2025 lors d’un week-end à Budapest pour aller voir Imagine Dragons en concert, après 3 tentatives avortées, la quatrième fut la bonne et Elyne a dit OUI.</p>
      </div>
    </section>
    </WeddingCard>
  </PageContainer>
</template>

<!-- <style scoped> 
/* .history__container {
  /* container layout now provided by the global .container component */
  margin: 0;
  padding: 0;
}

.history__title {
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  text-align: center;
  margin-bottom: 1.25rem;
}

.history__text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #2b2b2b;
  text-align: justify;
  /* meilleure lisibilité pour des blocs en FR */
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .history__container {
    padding: 3rem 2rem;
  }
} </style> -->

<script>
import PageContainer from '@/components/Container.vue'
import WeddingCard from '@/components/WeddingCard.vue'

export default {
  name: 'CommonHistory',
  components: { PageContainer , WeddingCard }
}

</script>