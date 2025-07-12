<script setup>

    import { ref } from "vue";
  
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    
    const currentStep = ref(0);

    const sections = [
    {
        class: 'Eclipse',
        title: 'Eclipse',
        text: 'Eclipse',
        buttons: [
        { label: 'Little Boy', link: 'https://zl4n.itch.io/little-boy' },
        { label: 'Flappy Bird Edit', link: 'https://zl4n.itch.io/flappy-bird-edit' },
        { label: 'Minecraft Edit', link: 'https://github.com/Uzl4n/MinecraftEdit' },
        ],
    },
    {
        class: 'Java',
        title: 'Java',
        text: 'Java(texto resumido)',
        buttons: [
        { label: 'Candy Crush Edit', link: 'https://github.com/Uzl4n/CandyCrushEdit' },
        { label: 'Catch The Crab Edit', link: 'https://github.com/Uzl4n/CatchthecrabEdit' },
        { label: 'Tic Tac Toe Edit', link: 'https://github.com/Uzl4n/TicTacToeEdit' },
        ],
    },
    {
        class: 'production',
        title: 'TESTIMONIALS NOW',
        text:  'Unity/Mobile (texto resumido)',
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
    
    <!-- Conteúdo principal da página -->
    <main class="containerGamer  mt-5">
  <table class="table table-striped table-bordered table-hover">
    <thead class="table-dark">
      <tr>
        <th>Seção</th>
        <th>Descrição</th>
        <th>Projetos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(section, index) in sections" :key="index">
        <td>
          <strong>
            {{
              ['Eclipse', 'Java', 'Unity'][index]
            }}
          </strong>
        </td>
        <td>{{ section.text }}</td>
        <td>
          <div v-if="section.buttons">
            <div class="d-flex flex-column gap-2">
              <a
                v-for="(btn, i) in section.buttons"
                :key="i"
                :href="btn.link"
                target="_blank"
                class="btn btn-primary btn-sm"
              >
                {{ btn.label }}
              </a>
            </div>
          </div>
          <div v-else>
            <em>Sem projetos disponíveis</em>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
    </main>


    <Footer />
  </div>
</template>
