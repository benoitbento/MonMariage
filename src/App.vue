<template>
  <v-app>
    <header>
      <NavBar />
    </header>
    <v-main>
        <router-view />
    </v-main>
    <footer role="contentinfo" class="footer-seo">
      <!-- Footer optionnel pour le SEO -->
    </footer>
  </v-app>

</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-main {
  padding-top: 0 !important;
}
</style>
