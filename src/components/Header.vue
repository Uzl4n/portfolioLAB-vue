<script setup>
import { RouterView, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRoute } from 'vue-router';

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
</script>


<template>
        <header class="header">
            <nav>
                  <!---->
                  <h1>Luan Antunes Barbosa</h1>
                  <!--<button  class="btn-neu" @click="router.push('/')">Home</button>-->
                 <!--<button  class="btn-neu" @click="router.push('/game')">Game</button>-->
                 <!--<button  class="btn-neu" @click="router.push('/git')" >Git</button>-->

                  <button  class="btn-neu" @click="router.push('/feed')">Feed</button>
                  <button class="btn-neu" @click="router.push('/register')" v-if="!isLoggedIn && !['/home', '/feed', '/game', '/git'].includes(route.path)">Register</button>
                  <button class="btn-neu" @click="router.push('/sign-in')" v-if="!isLoggedIn && !['/home', '/feed', '/game', '/git'].includes(route.path)">Login</button>
                  <button  class="btn-neu" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
            </nav>
            
        </header>
</template>

<style scoped>

.btn-neu {
  background: linear-gradient(135deg, #6e8efb, rgb(41,70,76));
  border: none;
  color: white;
  padding: 10px 22px;
  font-size: 16px;
  border-radius: 8px;
  margin: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-neu:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);;
}

.header {
  background-image: url('../assets/layout.avif');
  position: fixed; /* Fixo no topo */
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  z-index: 10;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

nav ul li {
  margin: 0 15px;
}

router-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

router-link:hover {
  text-decoration: underline;
}

nav button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}
</style>
