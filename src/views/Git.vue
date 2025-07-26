<script setup>
  import { ref } from 'vue';
  import { posts } from '../data/posts';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Usar bootstrap.bundle.min.js
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="page-container">
    <Header />
    
    <!-- Conteúdo principal da página com títulos mais simples e links organizados em prateleira -->
    <main class="container mt-5">
      <div class="row g-4"> <!-- g-4 cria espaçamento entre as colunas -->
        <section class="col-md-6">
          <h2>Últimos Trabalhos (Vue)</h2>
          <div class="d-flex flex-wrap">
            <a href="https://github.com/Uzl4n/dashboard-controle-financeiro" target="_blank" class="btn btn-primary m-2">Atividade 1 Vue</a>
            <a href="https://github.com/Uzl4n/trello-clone" target="_blank" class="btn btn-primary m-2">Atividade 2 Vue</a>
            <a href="https://github.com/Uzl4n/mini-blog" target="_blank" class="btn btn-primary m-2">Atividade 3 Vue</a>
            <a href="https://github.com/Uzl4n/projetoFinal-Vue" target="_blank" class="btn btn-primary m-2">projetoFinal-Vue</a>
            <a href="https://github.com/Uzl4n/portfolioLAB" target="_blank" class="btn btn-primary m-2">portfolioLAB</a>
          </div>
        </section>

        <section class="col-md-6">
          <h2>Jogos (GitHub)</h2>
          <div class="d-flex flex-wrap">
            <a href="https://github.com/Uzl4n/DoodleJumpEdit" target="_blank" class="btn btn-primary m-2">DoodleJumpEdit</a>
            <a href="https://github.com/Uzl4n/PacManEdit" target="_blank" class="btn btn-primary m-2">PacManEdit</a>
            <a href="https://github.com/Uzl4n/TicTacToeEdit" target="_blank" class="btn btn-primary m-2">TicTacToeEdit</a>
            <a href="https://github.com/Uzl4n/MinecraftEdit" target="_blank" class="btn btn-primary m-2">MinecraftEdit</a>
            <a href="https://github.com/Uzl4n/tocuheSoccer_Mobile" target="_blank" class="btn btn-primary m-2">toqueSoccer_Mobile</a>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
  /* Garantir que os links estejam organizados de forma responsiva */
  .d-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 15px; /* Espaço entre os itens */
  }
</style>
