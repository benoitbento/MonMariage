<template>
  <div class="wedding-container">
    <div class="paper-card-wrapper">
      <img src="@/assets/flower-top-left.png" class="corner-flower top-left" alt="" />
      <img src="@/assets/flower-top-right.png" class="corner-flower top-right" alt="" />
      <img src="@/assets/flower-bottom-left.png" class="corner-flower bottom-left" alt="" />
      <img src="@/assets/flower-bottom-right.png" class="corner-flower bottom-right" alt="" />
      <div class="wedding-card-main">
      <header class="floral-header ">
        <div class="title-container ">
          <h1 class="script-title">{{ title }}</h1>
        </div>
      </header>
      
      <div class="content">
        <slot></slot> 
      </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'WeddingCard',
  props: {
    // Définition du paramètre "title"
    title: {
      type: String,
      default: 'Notre Mariage' // Titre par défaut si rien n'est envoyé
    }
  }
}
</script>

<style scoped>


/* Le wrapper qui gère la position relative sans couper les débordements */
.paper-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
}
.wedding-container {
  background-color: #fdfbf7; /* Ton fond crème */
  padding: 60px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}



.paper-card {
  position: relative; /* Référence pour les fleurs en absolute */
  max-width: 800px;
  width: 100%;
  padding: 60px 80px; /* Augmentez les 80px si les fleurs sont larges */
  border-radius: 30px; /* Coins arrondis comme sur l'image */
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.corner-flower {
  position: absolute;
  width: 220px; /* Un peu plus grand pour l'effet visuel */
  z-index: 10;   /* AU-DESSUS de la carte blanche */
  pointer-events: none;
  opacity: 0.9;
}
/* Positionnement précis dans chaque coin */
.top-left {
  top: 0;
  left: 0;
}

.top-right {
  top: 0;
  right: 0;
  /*transform: scaleX(-1); /* Retourne l'image horizontalement si c'est la même */
}

.bottom-left {
  bottom: 0;
  left: 0;
  /*transform: scaleY(-1); /* Retourne l'image verticalement */
}

.bottom-right {
  bottom: 0;
  right: 0;
  /*transform: rotate(180deg); /* Rotation complète */
}

.history__container {
  position: relative;
  z-index: 2; /* Force le texte à rester au-dessus du niveau des fleurs */
}
/* 2. Style commun pour les fleurs latérales */
.side-flower {
  position: absolute;
  height: 100%;       /* Prend toute la hauteur du texte */
  width: auto;         /* Garde le ratio de l'image */
  max-width: 150px;    /* Ajuste la largeur des fleurs selon ton goût */
  object-fit: cover;   /* Important : l'image remplit la hauteur sans se déformer */
  pointer-events: none; /* Le texte reste sélectionnable en dessous */
  z-index: 1;
  opacity: 0.8;
}

/* 3. Positionnement spécifique gauche/droite */
.side-flower--left {
  top: 0;
  left: -40px; /* Fait déborder légèrement à gauche */
  object-position: left; /* Aligne le visuel sur le bord gauche */
}

.side-flower--right {
  top: 0;
  right: -40px; /* Fait déborder légèrement à droite */
  object-position: right; /* Aligne le visuel sur le bord droit */
}

/* 4. On remonte le contenu pour qu'il soit au-dessus des fleurs si besoin */
.content, .floral-header {
  position: relative;
  z-index: 4;
}



.title {
  font-family: 'Great Vibes', cursive;
  color: var(--wedding-gold);
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 10px;
}



.content {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.7; /* Espace entre les lignes pour respirer */
  color: #4a4a4a;   /* Un gris très foncé plutôt que noir pur, plus doux */
  text-align: center;
  font-size: 1rem;  /* Taille standard lisible */
  font-weight: 400; /* Assure-toi de ne pas être en 200 ou 300 (trop fin) */
  max-width: 90%;   /* Empêche le texte de coller aux bords internes */
  margin: 0 auto;
}

.wedding-card {
  /* ... tes styles précédents ... */
  position: relative; /* Indispensable pour positionner les fleurs */
  background: white;
  /* padding: 60px; */
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.07); 
  
  /* Optionnel : une deuxième ombre très fine pour plus de profondeur */
  /* box-shadow: 0 15px 45px rgba(0, 0, 0, 0.07), 0 5px 15px rgba(0, 0, 0, 0.04); */

  transition: transform 0.3s ease; /* Pour un petit effet au survol */
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
}

.wedding-card-main {
  position: relative;
  background: #ffffff;
  border-radius: 30px;
  padding: 60px 30px; 
  z-index: 1;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box; /* Indispensable pour que le padding ne "gonfle" pas la carte */
}

/* Ajustement pour les petits écrans */
@media (max-width: 600px) {
  .wedding-card-main {
    padding: 50px 20px; /* On réduit les marges internes sur mobile */
    border-radius: 20px;
  }
  
  .script-title {
    font-size: 2.5rem; /* Titre plus petit pour éviter de casser sur 2 lignes */
  }

  .top-left { top: -10px; left: -10px; }
  .top-right { top: -10px; right: -10px; }
  
  .corner-flower {
    width: 120px; /* Fleurs plus petites pour ne pas manger tout le texte */
    opacity: 0.6;

  }
}

.floral-icon {
  width: 80px; /* Ajuste la taille selon ton besoin */
  height: auto;
  opacity: 0.8;
}

.mirrored {
  transform: scaleX(-1); /* Retourne l'image pour la symétrie à droite */
}

.script-title {
  font-family: 'Great Vibes', cursive;
  color: #c5a059; /* Le doré de ta référence */
  font-size: 3.5rem;
  margin: 0;
}
.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

</style>