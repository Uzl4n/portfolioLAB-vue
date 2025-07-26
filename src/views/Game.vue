<script setup>
  import { ref } from "vue";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  
  const currentStep = ref(0);

  const sections = [
    {
      class: '',
      title: 'Eclipse',
      text: 'Aqui estão alguns jogos desenvolvidos com Eclipse.',
      buttons: [
        { label: 'Little Boy', link: 'https://zl4n.itch.io/little-boy' },
        { label: 'Flappy Bird Edit', link: 'https://zl4n.itch.io/flappy-bird-edit' },
        { label: 'Minecraft Edit', link: 'https://github.com/Uzl4n/MinecraftEdit' },
      ],
    },
    {
      class: '',
      title: 'Java',
      text: 'Aqui estão alguns jogos desenvolvidos com Java.',
      buttons: [
        { label: 'Candy Crush Edit', link: 'https://github.com/Uzl4n/CandyCrushEdit' },
        { label: 'Catch The Crab Edit', link: 'https://github.com/Uzl4n/CatchthecrabEdit' },
        { label: 'Tic Tac Toe Edit', link: 'https://github.com/Uzl4n/TicTacToeEdit' },
      ],
    },
    {
      class: '',
      title: 'Unity',
      text: 'Aqui estão alguns jogos desenvolvidos com Unity.',
      buttons: [
        { label: 'Zig Zag Game Mobile', link: 'https://github.com/Uzl4n/zigzagGame_Mobile' },
        { label: 'Tocuhe Soccer Mobile', link: 'https://github.com/Uzl4n/tocuheSoccer_Mobile' },
        { label: 'Stack Game Mobile', link: 'https://github.com/Uzl4n/stackGame_Mobile' },
      ],
    },
  ];
</script>

<template>
  <div class="page-container">
    <Header />
    
    <main class="containerGamer mt-5">
      <div class="timeline">
        <div v-for="(section, index) in sections" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h5>{{ section.title }}</h5>
            <p>{{ section.text }}</p>

            <div v-if="section.buttons && section.buttons.length">
              <div class="btn-group">
                <a
                  v-for="(btn, i) in section.buttons"
                  :key="i"
                  :href="btn.link"
                  target="_blank"
                  class="btn btn-primary btn-sm m-1"
                >
                  {{ btn.label }}
                </a>
              </div>
            </div>
            <div v-else>
              <em>Sem projetos disponíveis</em>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificado -->
      <article>
        <div class="certificate-container">
          <a href="/certificado.pdf" target="_blank">
            <img src="../assets/certificado.png" id="backgroundCer" class="certificate-image" alt="Certificado">
          </a>
        </div>
      </article>
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>

.certificate-link {
    display: block;
    text-decoration: none;
}

#backgroundCer {
  max-width: 100%;  /* Limita a largura da imagem para não ultrapassar o tamanho da tela */
  height: auto;
  display: block;
  margin: 300px auto; /* Centraliza a imagem e adiciona margem para separar o conteúdo */
}

.page-container {
  min-height: 100vh; /* Garante que a página tenha pelo menos a altura da tela */
  display: flex;
  flex-direction: column;
}

main.containerGamer {
  flex-grow: 1; /* Faz com que o conteúdo principal ocupe o máximo de espaço possível */
  
}

main.containerGamer {
  padding-bottom: 1px; /* Ajuste conforme necessário */
  
}

footer {
  margin-top: auto; /* Garante que o rodapé vá para o final da página */
}


.timeline {
  display: flex;
  justify-content: space-between; /* Espaço igual entre os itens */
  align-items: flex-start;
  flex-wrap: wrap; /* Permite que os itens se movam para a próxima linha em telas pequenas */
  gap: 4rem; /* Ajuste o espaçamento entre os itens */
  margin: 15px;
  margin-top: 100px;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Largura flexível para cada item */
  position: relative;
}


.timeline-content {
  background-color: #f8f9fa;
  padding: 0.75rem; /* Diminuímos o padding para reduzir a altura */
  border-radius: 22px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-left: 25px; /* Ajuste para o novo tamanho do marcador */
}

.timeline-date {
  font-weight: bold;
  font-size: 12px; /* Font-size reduzido para a data */
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-group {
  display: flex;
  gap: 8px; /* Reduzido o gap entre os botões */
  margin-top: 0.75rem; /* Ajustado o espaçamento entre os botões */
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column; /* Alinha os itens na vertical em telas pequenas */
    align-items: flex-start;
  }


  .timeline-content {
    width: 100%;
    padding-left: 0;
  }

    #backgroundCer {
    max-width: 90%; /* Ajuste para telas pequenas */
  }
}
</style>

