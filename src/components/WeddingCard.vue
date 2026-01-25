<template>
  <div class="wedding-container">
    <div class="paper-card">
      <header class="floral-header">
        <h1 class="title">Notre Histoire</h1>
        <div class="divider">
          <span class="leaf">🌿</span>
        </div>
      </header>
      
      <div class="content">
        <slot></slot> </div>
    </div>
  </div>
</template>

<style scoped>
.wedding-container {
  background-color: var(--wedding-bg);
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.paper-card {
  background: white;
  max-width: 800px;
  width: 100%;
  padding: 60px;
  border-radius: 30px; /* Coins arrondis comme sur l'image */
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  position: relative;
  /* Pour les fleurs, tu peux utiliser des images en background positionnées aux coins */
  background-image: url('@/assets/flowers-top-left.png'), url('@/assets/flowers-bottom-right.png');
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  background-size: 250px;
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
  line-height: 1.8;
  color: var(--wedding-text);
  text-align: center;
  font-size: 1.1rem;
}
</style>