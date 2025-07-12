<script setup>
  import { ref } from 'vue';
  import { posts } from '../data/posts';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

const isPostUSA = ref(true); // Inicia exibindo a seção "postUSA"
</script>



<!--deve ficar no mesmo planto header e footer junto com home no caso eles estao em um acima --- ver essas linhas vermelhas ---- tirar um dos javas deixar so um!!-->

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
            <p><strong>Autor:</strong> {{ post.autor }} - <strong>Ano:</strong> {{ post.data }}</p>
            <img
              :src="post.imagem_post"
              alt="Imagem do post"
              style="max-width: 100%; height: auto"
            />
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

.posts-section {
  display: flex;
  justify-content: center; /* Centraliza o carrossel horizontalmente */
  align-items: center; /* Centraliza o carrossel verticalmente */
  min-height: 100vh; /* Garante que a altura mínima da seção ocupe toda a altura da tela */
 
}

#carouselPosts {
  width: 80%; /* Ajuste conforme necessário */
  max-width: 1200px; /* Limita o tamanho máximo para não ficar muito grande em telas grandes */
  height: 500px; /* Ajuste a altura conforme necessário */
  margin-left: 500px; /* Centraliza o carrossel no meio - ta no meio */ 
}

.carousel-inner {
  height: 100%; /* Faz com que os itens do carrossel ocupem toda a altura */
}

.carousel-item img {
  height: 100%; /* A imagem ocupa toda a altura do item */
  object-fit: cover; /* Garante que a imagem cubra o item sem distorcer */
}

</style>