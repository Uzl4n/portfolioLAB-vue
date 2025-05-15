<script setup>

import { ref } from 'vue';
import { nextTick } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const showBR  = ref(true);
const showUSA = ref(false);

const toggleBR  = async () => {
  showBR.value  = true;
  showUSA.value = false;
  await nextTick();
}

const toggleUSA = async () => {
  showBR.value  = false;
  showUSA.value = true;
  await nextTick();
}

</script>




<template>
    

<div class="clear"></div>

<div style="position: absolute; top: 200px; left: 50%; transform: translateX(-50%); display: flex; gap: 20px;">
    <button class="btn-neu" @click="toggleBR" style="border-radius: 50%; width: 60px; height: 60px; font-size: 24px; margin-left: 10px; padding-left: 20px;">🇧🇷</button>
    <button class="btn-neu" @click="toggleUSA" style="border-radius: 50%; width: 60px; height: 60px; font-size: 24px; margin-left: 10px; padding-left: 20px;">🇺🇸</button>
</div>


          <section class="apresentacao__boxBR" v-if="showBR">
            <div class="apresentacao__descricao position-left">
              
                  <pre>🇧🇷</pre>
                  <p>Formado em Análise e Desenvolvimento de Sistemas pelo IFSUL - Instituto Federal Sul-rio-grandense (2021) Desenvolvimento De Games - Danki Code (2023)<br/></p>
                 
                  <br/><br/><br/>
                  <p>Temas e ferramentas que fazem parte da minha rotina de trabalho;</p>
                      
                  <p>  * Análise de documentações de arquitetura e padrões de projetos</p>
                  <p>  * Clean Code</p>
                  <p>  * Clean Architecture</p>
                  <p>  * SOLID</p>
                  <p>  * Git, GitHub, Firebase, SQL, NoSQL</p>
                  <p>  * Componentização e responsividade</p>
                  <p>  * Unity, Godot, GameMaker Studio, The Eclipse IDE, Unreal Engine, Construct.</p>

                  <br/><br/><br/>

                  <p>Atualmente me encontro no nível de Inglês intermediário, mas em transição para o avançado, no qual consigo ler, escrever e manter uma comunicação.</p>
                
                </div>    
            
            <div class="clear"></div>

    </section>

    <section class="apresentacao__boxUSA" v-if="showUSA">
      <div class="apresentacao__descricao position-right">
        
        <pre>🇺🇸</pre>
        <p>Graduated in Systems Analysis and Development from IFSUL - Instituto Federal Sul-rio-grandense (2021) Game Development - Danki Code (2023)<br/></p> 
        
         
        <br/><br/><br/>
        <p>Themes and tools that are part of my work routine;</p>
        <p>   * Analysis of architecture documentation and design standards</p>
        <p>   * CleanCode</p>
        <p>   * CleanArchitecture</p>
        <p>   * SOLID</p>
        <p>   * Git, GitHub, Firebase, SQL, NoSQL</p>
        <p>   * Componentization and responsiveness</p>
        <p>   * Unity, Godot, GameMaker Studio, The Eclipse IDE, Unreal Engine, Construct.</p>
        
        <br/><br/><br/>

        <p>I am currently at an intermediate level of English, but transitioning to advanced, where I can read, write and maintain communication.</p>

         
     </div>    

          <div class="clear"></div>

    </section>     
  
    <footer class="rodapeHome">

        <div class="socialHome">

                <a href="https://github.com/Uzl4n"> <img src = "../assets/GitHub.png"/></a>
                <a href="https://www.linkedin.com/in/luan-antunes-barbosa-a228b9214/"><img src = "../assets/linked.png"/></a>
                <a href="https://zl4n.itch.io/"><img src = "../assets/itch.io.png"/></a> 

                <p>&copy; 2024 - Todos os direitos reservados</p>
                <p>Entre em contato pelo e-mail: hastaluego6236@gmail.com</p>

        </div>

    </footer>

</template>


