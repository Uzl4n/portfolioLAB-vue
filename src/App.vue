<script setup>
import { RouterView, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRoute } from 'vue-router';

import '../src/components/styleSignIn.css';
import '../src/components/styleRegister.css';
import '../src/components/styleHome.css';
import '../src/components/styleFeed.css';
import '../src/components/styleApp.css';



const route = useRoute();
const isLoggedIn = ref(false);
const router     = useRouter();

let auth;
onMounted(() => {
  auth = getAuth();
   onAuthStateChanged(auth, (user) => {

      if(user){
        isLoggedIn.value = true;

      } else {
        isLoggedIn.value = false;
      }

  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
      router.push("/");
  });
};


function feed(){
    router.push("/feed");
}
/* Acessar essa pagina colocara uma linha vertical com tudo que voce fez
 1 - site responsivo ( ver outras paginas/css delas)
 2 -  fazer um carrosel para os posts com links
 3 - falar sobre os jogos que voce fez
 4 - informa e verificar sua info sobre tudo
 
 Bom fim de semana e lembra por quem vc ta fazendo isso.*/

</script>

<template>
        <header class="header">
            <nav>
                
                  <h1>Luan Antunes Barbosa</h1>
                  <button  class="btn-neu" @click="router.push('/')">Home</button>
                  <button  class="btn-neu" @click="router.push('/feed')">Feed</button>
                  <button  class="btn-neu" @click="router.push('/register')"  v-if="!isLoggedIn && route.path !== '/feed'">Register</button>
                  <button  class="btn-neu" @click="router.push('/sign-in')"   v-if="!isLoggedIn && route.path !== '/feed'">Login</button>
                  <button  class="btn-neu" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
            </nav>
            
        </header>

    <RouterView/>  

</template>