<script setup>
import { RouterView, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import '../src/components/styleSignIn.css';
import '../src/components/styleRegister.css';
import '../src/components/styleApp.css';

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


</script>

<template>
   <header class="header">
    <nav>
      
         <h1>Luan Antunes Barbosa</h1>
        <button  class="btn-neu" @click="router.push('/')">Home</button>
        <button  class="btn-neu" @click="router.push('/feed')">Feed</button>
        <button  class="btn-neu" @click="router.push('/register')">Register</button>
        <button  class="btn-neu" @click="router.push('/sign-in')">Login</button>
        <button  class="btn-neu" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
    </nav>
  </header>
    <RouterView/>
   
</template>

<!--      
         <h1>Luan Antunes Barbosa</h1>
        <button@click="router.push('/home')>Home</button>
        <button @click="router.push('/feed')>Feed</button>
        <button @click="router.push('/register')>Register  </button>
        <button @click="router.push('/singIn')>Login</button>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>-->