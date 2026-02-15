<template>
  <WeddingCard title="Dress Code">
    <section class="dresscode">
      <p class="intro-text">
        Afin de mettre subtilement à l'honneur notre lien commun avec le karaté,
        nous avons associé chaque couleur de ceinture à une durée de couple.
      </p>

      <div class="dresscode-grid">
        <div class="color-item" v-for="belt in belts" :key="belt.color">
          <div class="belt-preview" :class="belt.class"></div>
          <div class="belt-info">
            <span class="belt-name">{{ belt.label }} :</span>
            <span class="belt-desc">{{ belt.desc }}</span>
          </div>
        </div>
      </div>

      <div class="example-box">
        <p><strong>Exemple :</strong> Si Baltazar est en couple depuis 46 ans, il pourra porter une pochette de costume
          rouge.</p>
      </div>
    </section>
  </WeddingCard>
</template>


<script setup>

import WeddingCard from '@/components/WeddingCard.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Dress Code - Notre Mariage',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le dress code inspiré des ceintures de karaté pour notre mariage.'
    }
  ]
});


 const belts= [
        { color: 'white', class: 'white', label: 'Ceinture blanche', desc: '0-1 an de couple' },
        { color: 'yellow', class: 'yellow', label: 'Ceinture jaune', desc: '1-3 ans de couple' },
        { color: 'orange', class: 'orange', label: 'Ceinture orange', desc: '3-5 ans de couple' },
        { color: 'green', class: 'green', label: 'Ceinture verte', desc: '5-10 ans de couple' },
        { color: 'blue', class: 'blue', label: 'Ceinture bleue', desc: '10-20 ans de couple' },
        { color: 'brown', class: 'brown', label: 'Ceinture marron', desc: '20-30 ans de couple' },
        { color: 'black', class: 'black', label: 'Ceinture noire', desc: '30-40 ans de couple' },
        { color: 'red', class: 'red', label: 'Ceinture rouge', desc: '40 ans et plus de couple' },
      ];
</script>
<style>
.dresscode-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* Deux colonnes pour la lisibilité */
  gap: 20px;
  max-width: 600px;
  margin: 30px auto;
}

.color-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s;
}

.color-item:hover {
  transform: translateX(5px);
}

.belt-preview {
  width: 40px;
  height: 12px;
  /* Forme de barrette/ceinture */
  border-radius: 3px;
  margin-right: 15px;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Couleurs */
.white {
  background: #fff;
}

.yellow {
  background: #FFD700;
}

.orange {
  background: #FF8C00;
}

.green {
  background: #2E8B57;
}

.blue {
  background: #4682B4;
}

.brown {
  background: #8B4513;
}

.black {
  background: #222;
}

.red {
  background: #B22222;
}

.belt-name {
  font-weight: bold;
  color: #c5a059;
  margin-right: 5px;
}

.example-box {
  background: #fdfbf7;
  border-left: 4px solid #c5a059;
  padding: 15px;
  font-style: italic;
  margin-top: 30px;
  text-align: center;
}
</style>