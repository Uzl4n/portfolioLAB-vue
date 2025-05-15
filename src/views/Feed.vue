<script setup>

  import { ref } from 'vue';
  import { posts } from '../data/posts';
  import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
    

  const isPostUSA = ref(true); // Inicia exibindo a seção "postUSA"

  

</script>

<template>
    

   <!-- Botão para alternar entre postUSA e postBR -->
<button id="br" class="btn-neu" @click="isPostUSA = !isPostUSA">
  {{ isPostUSA ? '🇧🇷' : '🇺🇸' }}
</button>

  <!-- Seção Post USA -->
  <section class="postUSA" v-if="isPostUSA">
    <div class="center">
      <h2 class="title">Professional Profile</h2>
      <h5 class="subtitle">Some individualities about me.</h5>
      <section class="icones">
        <div class="box-wrapper">
          <div class="box-icone">
            <img src="../assets/icone-1.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Work</h6>
          <p class="box-icone__texto">Be ready to learn <br>every day!</p>
        </div>
        <div class="box-wrapper">
          <div class="box-icone box-icone--red">
            <img src="../assets/icone-2.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Disposition</h6>
          <p class="box-icone__texto">Develop my knowledge <br>and gain experience!</p>
        </div>
        <div class="box-wrapper">
          <div class="box-icone">
            <img src="../assets/icone-3.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Team work</h6>
          <p class="box-icone__texto">The individual is important <br>but knowing how to listen to<br> your team is essential!</p>
        </div>
        <div class="box-wrapper">
          <div class="box-icone">
            <img src="../assets/icone-4.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Myself</h6>
          <p class="box-icone__texto">Always looking to do <br>the bestI may not know all<br> the answers but I don't limit myself! </p>
        </div>
        <div class="clear"></div>
      </section>
    </div>
  </section>

  <!-- Seção Post BR -->
  <section class="postBR" v-if="!isPostUSA">
    <div class="center">
      <h2 class="title">Habilidades</h2>
      <h5 class="subtitle">Algumas habilidades sobre mim.</h5>
      <section class="icones">
        <div class="box-wrapper">
          <div class="box-icone">
            <img src="../assets/icone-1.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Trabalho</h6>
          <p class="box-icone__texto">Estar pronto para aprender <br>todos os dias!</p>
        </div>
        <div class="box-wrapper">
          <div class="box-icone box-icone--red">
            <img src="../assets/icone-2.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Disposição</h6>
          <p class="box-icone__texto">Evoulir meus conhecimentos e <br>ganhar experiencia!</p>
        </div>
        <div class="box-wrapper">
          <div class="box-icone">
            <img src="../assets/icone-3.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Trabalho em equipe</h6>
          <p class="box-icone__texto">O individual é importante <br>mas saber escutar sua equipe é primordial!</p>
        </div>
        <div class="box-wrapper">
          <div class="box-icone">
            <img src="../assets/icone-4.png" alt="">
          </div>
          <h6 class="box-icone__titulo">Eu</h6>
          <p class="box-icone__texto">Sempre a procura de fazer o melhor<br>posso não saber todas as respostas mas<br>não me limito!</p>
        </div>
        <div class="clear"></div>
      </section>  
    </div>
  </section>



  <!-- Lista de posts visível sempre -->
<section class="posts-section" >
  <div class="center">
    <h2 class="title">Meus Posts</h2>
    <div v-for="(post, index) in posts" :key="index" class="post-card">
      <h3>{{ post.titulo }}</h3>
      <p><strong>Autor:</strong> {{ post.autor }} - <strong>Ano:</strong> {{ post.data }}</p>
      <img :src="post.imagem_post" alt="Imagem do post" style="max-width: 100%; height: auto;" />
      <p>{{ post.texto }}</p>
      <p v-if="post.texto2">{{ post.texto2 }}</p>
      <iframe
        v-if="post.video"
        :src="post.video"
        frameborder="0"
        allowfullscreen
        style="width: 100%; max-width: 560px; height: 315px; margin-top: 1rem;"
      ></iframe>
      <hr style="margin: 2rem 0;" />
    </div>
  </div>
</section>

  

  <!-- Footer -->
  <footer class="rodapeFeed">
    <div class="socialFeed">
      <a href="https://github.com/Uzl4n"> <img src = "../assets/GitHub.png"/></a>
      <a href="https://www.linkedin.com/in/luan-antunes-barbosa-a228b9214/"><img src = "../assets/linked.png"/></a>
      <a href="https://zl4n.itch.io/"><img src = "../assets/itch.io.png"/></a> 

      <p>&copy; 2024 - Todos os direitos reservados</p>
      <p>Entre em contato pelo e-mail: hastaluego6236@gmail.com</p>
    </div>
  </footer>  
</template>
