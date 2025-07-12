<!-- src/App.vue -->
<template>
  <div id="app">
   
    <router-view />
    
  </div>
</template>

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
