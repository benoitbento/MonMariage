
<template>
  <WeddingCard>
    <div class="divider">
      <img src="@/assets/flowers-divider.png" class="divider-icon" alt="" />
    </div>
    <section class="history">
      <div class="history__container">

        <p class="history__text">Nous nous sommes rencontrés à Bordeaux, en 2019, au karaté. Benoît a été sonné par le
          mawashi-geri (coup de pieds circulaire) d’Elyne tandis qu’Elyne a été charmée par l’humour de Benoît, comme
          quoi, même dans un temple de la violence, le coup de foudre est à portée de pied.</p>

        <p class="history__text">Malheureusement, nous étions en 2020, autant vous rappeler que les relations sociales
          ont été quelque peu freinées à cause d’un pangolin. Notre premier rendez-vous a donc eu lieu à la sortie du
          premier confinement en mai 2020 : Benoît avait préparé un succulent repas puis programmé le film Le silence
          des agneaux (il avait tout compris...).</p>

        <p class="history__text">Habitant tous les deux à Bordeaux, nous en profitâmes pour visiter ses alentours, la
          Charente-Maritime, l’Eure-et-Loir mais aussi de succulents restaurants gastronomiques avec option panne de
          carte gold.</p>

        <p class="history__text">En 2022, après deux belles années de relation sans cohabitation, nous nous installâmes
          enfin ensemble et déménageâmes à Lille pour qu'Elyne puisse finir ses études, mais aussi vider Benoit de
          l’excès de vitamine D. Nous passâmes notre ceinture noire de karaté, de quoi rendre Elyne encore plus
          terrifiante.</p>

        <p class="history__text">Comme le Nord était synonyme d’étranger voire d’étrange, nous voyageâmes en Belgique, à
          Lisbonne, à Budapest et bien entendu dans les Hauts-de-France. Nous nous fiançâmes le 15 juin 2025 lors d’un
          week-end à Budapest pour aller voir Imagine Dragons en concert, après 3 tentatives avortées, la quatrième fut
          la bonne et Elyne a dit OUI.</p>
      </div>
    </section>
    <div class="divider">
      <img src="@/assets/flowers-divider.png" class="divider-icon" alt="" />
    </div>
    <div class="photo-container">
      <div class="ornate-frame">
        <img src="@/assets/photo-couple.jpg" alt="Benoît et Elyne" class="couple-photo" />
      </div>
    </div>
  </WeddingCard>
</template>
<style scoped>

.side-flowers {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;       /* Prend toute la hauteur */
  width: auto;         /* Garde le ratio */
  max-width: 150px;    /* "Moins épais" : ajuste cette valeur selon ton goût */
  opacity: 0.4;        /* "Un peu transparent" */
  object-fit: cover;   /* Permet de bien remplir la hauteur */
  pointer-events: none; /* Pour que l'image ne gêne pas le clic sur le texte */
  z-index: 1;
}

.divider-icon{
  display: block;
  margin: 1.5rem auto; /* Un peu moins d'espace en haut/bas */
  width: 100%;          /* Utilise la largeur disponible... */
  max-width: 180px;    /* ...mais s'arrête à 180px (ajuste ici pour la taille) */
  height: auto;
  opacity: 0.6;        /* Légèrement plus visible que 0.4 pour voir les détails */
  filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.05)); /* Optionnel : donne un peu de relief */
}
  .photo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.frame-container {
  position: relative;
  width: 300px; /* Ajustez selon la taille de votre cadre */
  display: flex;
  justify-content: center;
  align-items: center;
}

.wedding-frame {
  width: 100%;
  height: auto;
  z-index: 2; /* Le cadre passe devant la photo si besoin */
  pointer-events: relative; /* Permet de cliquer sur la photo à travers le cadre */
}



.photo-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px; /* Taille optimale pour le cadre */
  margin: 0 auto;
}

.page-container {
  background-color: #fdfbf7;
  /* Fond crème de la maquette */
  min-height: 100vh;
  /* padding: 50px 20px; */
  display: flex;
  justify-content: center;
}


.script-title {
  font-family: 'Great Vibes', cursive;
  /* À importer dans ton index.html */
  color: #c5a059;
  /* Doré */
  font-size: 4rem;
  margin-bottom: 30px;
}

.story-content {
  font-family: 'Montserrat', sans-serif;
  color: #4a4a4a;
  line-height: 2;
  /* Très aéré pour l'élégance */
  font-size: 1.1rem;
  text-align: justify;
  margin-bottom: 40px;
}



.photo-frame img {
  max-width: 100%;
  display: block;
}
.photo-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.ornate-frame {
  border: 12px solid transparent;
  border-image: url('@/assets/frame-dentelle.png') 40 round;
  padding: 8px;
  border-radius: 12px;
  /* background-color: #fffaf5; /* crème doux pour contraste */
}
.couple-photo {
  display: block;
  width: 220px;        /* légèrement réduit mais pas trop */
  max-width: 140%;
  height: auto;
  margin: 0 auto;
  border-radius: 12px;
  filter: sepia(0.1);
  border-radius: 4px;
  object-fit: cover;
}

.history__text {
  margin-bottom: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300; /* Plus fin pour plus d'élégance */
  line-height: 1.8;
  color: #555;
  text-align: center; /* Souvent plus joli pour les faire-part */
}

/* Optionnel : mettre en gras les lieux ou dates clés */
.history__text strong {
  color: #c5a059; /* Rappel du doré */
  font-weight: 500;
}

</style>
<script>
// import PageContainer from '@/components/Container.vue'
import WeddingCard from '@/components/WeddingCard.vue'

export default {
  name: 'CommonHistory',
  components: { WeddingCard }
}

</script>