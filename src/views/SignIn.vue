<script setup>

    import { ref } from "vue";
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { useRouter } from "vue-router";
    

    const email    = ref("");
    const password = ref("");
    const router   = useRouter()
    const errMsg   = ref()

    const register = () => {

        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in!")
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            switch(error.code){
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                        break;

                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                         break;    

                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                         break;  
                  
                default:
                    errMsg.value = "Email or Password was incorrect";
                         break;           
            }
        });    
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    console.log(result.user);
                    router.push("/feed");
                })
                .catch((error) => {
                console.log("Erro ao logar com Google:", error);
                alert(error.message);
        });
    }

</script>



<!--VER O FEED E COLOCAR BOTOES PARA OS 3 TRABALHOS DE VUE --- ver essas linhas vermelhas-->

<template>

    <Header />
    
        <div id="login">

            <article>              
                <img src="../assets/Bg-L.jpg" id="backgroundL"> 
            </article> 

            <label class="custom-label">Email</label>
            <p><input type="text" class="email" placeholder="seu@email.com" v-model="email"/></p>
            <label class="custom-label">Senha</label>
            <p><input type="password" class="password" placeholder="Password" v-model="password"/></p>
            
            <p v-if="errMsg">{{ errMsg }}</p>
            <p><button @click="register" id="Submit"  class="btn btn-primary">Submit</button></p>
            <p><button @click="signInWithGoogle" class="btn btn-danger">Sing In With Google</button></p>


              
    </div>

    <Footer />
 
</template>


<style scoped>
.sign-in {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
