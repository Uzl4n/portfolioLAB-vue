<script setup>
  import { ref } from 'vue';
  import { posts } from '../data/posts';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Usar bootstrap.bundle.min.js
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  const isPostUSA = ref(true); // Inicia exibindo a seção "postUSA"
</script>

<!-- TROCAR IMAGEM DOS JOGOS POR OUTRA E COLOCAR ALGO QUE FAÇA SENTIDO imagens do carrosel linkao outras coisas, melhor!!!!!  TIRAR OS BOTOES GIT E GAME E LINKAR NO CARROSEL E NELES APENAS HOME E FEED-->

<template>
  <Header />
  
  <section class="posts-section">
    <div id="carouselPosts" class="carousel slide">
      
      <!-- Indicadores (bolinhas) -->
      <div class="carousel-indicators">
        <button
          v-for="(post, index) in posts"
          :key="'ind-' + index"
          type="button"
          data-bs-target="#carouselPosts"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="'Slide ' + (index + 1)">
        </button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(post, index) in posts"
          :key="'post-' + index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <div class="post-card">
            <h3>{{ post.titulo }}</h3>
           <router-link :to="post.url">
              <img :src="post.imagem_post" alt="Imagem do post" />
            </router-link>
            <p>{{ post.texto }}</p>
            <p v-if="post.texto2">{{ post.texto2 }}</p>
            <iframe
              v-if="post.video"
              :src="post.video"
              frameborder="0"
              allowfullscreen
              style="width: 100%; max-width: 560px; height: 315px; margin-top: 1rem"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselPosts"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselPosts"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
  </section>

 


  <Footer />
</template>

<style>

/* .posts-section: Estilo para a seção principal onde está o carrossel */
.posts-section {
  display: flex; /* Aplica o modelo de layout Flexbox à seção, permitindo organizar os itens de maneira flexível */
  justify-content: center; /* Centraliza o conteúdo do carrossel horizontalmente */
  align-items: center; /* Centraliza o conteúdo do carrossel verticalmente */
  min-height: 100vh; /* Garante que a altura mínima da seção ocupe toda a altura da tela */
}

/* #carouselPosts: Estilo do carrossel */
#carouselPosts {
  width: 100%; /* O carrossel ocupa toda a largura da tela */
  max-width: 1200px; /* Limita a largura máxima do carrossel a 1200px */
  height: 80vh; /* O carrossel ocupa 80% da altura da tela */
  margin: 0 auto; /* Centraliza o carrossel horizontalmente */
  position: relative; /* Para que os controles de navegação (anterior/proximo) fiquem no lugar certo, dentro do carrossel */
}

/* .carousel-item img: Estilo da imagem dentro de cada item do carrossel */
.carousel-item img {
  max-height: 400px; /* Define a altura máxima das imagens como 400px */
  object-fit: cover; /* Garante que as imagens preencham o espaço sem distorção, cortando se necessário para manter a proporção */
}


</style>
