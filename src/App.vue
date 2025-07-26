<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import '../src/styles/styleHome.css';
import '../src/styles/styleRegister.css';
import '../src/styles/styleSignIn.css';
import '../src/styles/styleGame.css';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 80px; /* Ajuste para a altura do seu header */
}

footer {
  margin-top: auto;
}
</style>
