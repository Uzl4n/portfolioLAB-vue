<script setup>
import { ref } from 'vue';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const isPostUSA = ref(true); // Inicia exibindo a seção "postUSA"
</script>



<!--deve ver o feed dps e arrumar a posicao dele igual no home com o seu conteudo --- ver essas linhas vermelhas-->

<template>
  <div class="page-container">
    <Header />
    
    <!-- Conteúdo principal da página -->
    <main class="container mt-5">

      <!-- Botão para alternar entre postUSA e postBR -->
      <button id="br" class="btn btn-neu" @click="isPostUSA = !isPostUSA":aria-label="isPostUSA ? 'Trocar para Português' : 'Switch to English'">
        {{ isPostUSA ? '🇧🇷' : '🇺🇸' }}
      </button>

      <!-- Seção Post USA -->
      
        <section class="postUSA" v-if="isPostUSA">
          <div class="text-center mb-5">
            <h2 class="title">Professional Profile</h2>
            <h5 class="subtitle">Some individualities about me.</h5>
          </div>

          <section class="icones">
            <div class="box-wrapper">
              <div class="box-icone">
                <img src="../assets/icone-1.png" alt="Work">
              </div>
              <h6 class="box-icone__titulo">Work</h6>
              <p class="box-icone__texto">Be ready to learn <br>every day!</p>
            </div>

            <div class="box-wrapper">
              <div class="box-icone box-icone--red">
                <img src="../assets/icone-2.png" alt="Disposition">
              </div>
              <h6 class="box-icone__titulo">Disposition</h6>
              <p class="box-icone__texto">Develop my knowledge <br>and gain experience!</p>
            </div>

            <div class="box-wrapper">
              <div class="box-icone">
                <img src="../assets/icone-3.png" alt="Team work">
              </div>
              <h6 class="box-icone__titulo">Team work</h6>
              <p class="box-icone__texto">The individual is important <br>but knowing how to listen to<br> your team is essential!</p>
            </div>

            <div class="box-wrapper">
              <div class="box-icone">
                <img src="../assets/icone-4.png" alt="Myself">
              </div>
              <h6 class="box-icone__titulo">Myself</h6>
              <p class="box-icone__texto">Always looking to do <br>the best. I may not know all<br> the answers but I don't limit myself!</p>
            </div>
          </section>
        </section>
      

      <!-- Seção Post BR -->
      
        <section class="postBR" v-if="!isPostUSA">
          <div class="text-center mb-5">
            <h2 class="title">Habilidades</h2>
            <h5 class="subtitle">Algumas habilidades sobre mim.</h5>
          </div>

          <section class="icones">
            <div class="box-wrapper">
              <div class="box-icone">
                <img src="../assets/icone-1.png" alt="Work">
              </div>
              <h6 class="box-icone__titulo">Trabalho</h6>
              <p class="box-icone__texto">Estar pronto para aprender <br>todos os dias!</p>
            </div>

            <div class="box-wrapper">
              <div class="box-icone box-icone--red">
                <img src="../assets/icone-2.png" alt="Disposition">
              </div>
              <h6 class="box-icone__titulo">Disposição</h6>
              <p class="box-icone__texto">Evoulir meus conhecimentos e <br>ganhar experiencia!</p>
            </div>

            <div class="box-wrapper">
              <div class="box-icone">
                <img src="../assets/icone-3.png" alt="Team work">
              </div>
              <h6 class="box-icone__titulo">Trabalho em equipe</h6>
              <p class="box-icone__texto">O individual é importante <br>mas saber escutar sua equipe é primordial!</p>
            </div>

            <div class="box-wrapper">
              <div class="box-icone">
                <img src="../assets/icone-4.png" alt="Myself">
              </div>
              <h6 class="box-icone__titulo">Eu</h6>
              <p class="box-icone__texto">Sempre a procura de fazer o melhor<br>posso não saber todas as respostas mas<br>não me limito!</p>
            </div>
          </section>
        </section>
   

      <!-- Seção Apresentação BR -->
      <section class="apresentacao__boxBR" v-if="!isPostUSA">
        <div class="apresentacao__descricao">
          <pre>🇧🇷</pre>
          <p>Formado em Análise e Desenvolvimento de Sistemas pelo IFSUL - Instituto Federal Sul-rio-grandense (2021) Desenvolvimento De Games - Danki Code (2023)</p>
          <br/>
          <p>Temas e ferramentas que fazem parte da minha rotina de trabalho:</p>
          <p>  * Análise de documentações de arquitetura e padrões de projetos</p>
          <p>  * Clean Code</p>
          <p>  * Clean Architecture</p>
          <p>  * SOLID</p>
          <p>  * Git, GitHub, Firebase, SQL, NoSQL</p>
          <p>  * Componentização e responsividade</p>
          <p>  * Unity, Godot, GameMaker Studio, The Eclipse IDE, Unreal Engine, Construct.</p>
          <br/>
          <p>Atualmente me encontro no nível de Inglês intermediário, mas em transição para o avançado, no qual consigo ler, escrever e manter uma comunicação.</p>
        </div>    
        <div class="clear"></div>
      </section>

      <!-- Seção Apresentação USA -->
      <section class="apresentacao__boxUSA" v-if="isPostUSA">
        <div class="apresentacao__descricao position-right">
          <pre>🇺🇸</pre>
          <p>Graduated in Systems Analysis and Development from IFSUL - Instituto Federal Sul-rio-grandense (2021) Game Development - Danki Code (2023)</p>
          <br/>
          <p>Themes and tools that are part of my work routine:</p>
          <p>   * Analysis of architecture documentation and design standards</p>
          <p>   * CleanCode</p>
          <p>   * CleanArchitecture</p>
          <p>   * SOLID</p>
          <p>   * Git, GitHub, Firebase, SQL, NoSQL</p>
          <p>   * Componentization and responsiveness</p>
          <p>   * Unity, Godot, GameMaker Studio, The Eclipse IDE, Unreal Engine, Construct.</p>
          <br/>
          <p>I am currently at an intermediate level of English, but transitioning to advanced, where I can read, write and maintain communication.</p>
        </div>    
        
      </section>

    </main>

    <Footer />
  </div>
</template>
