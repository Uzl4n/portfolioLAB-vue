<script setup>

    import { ref } from "vue";
    import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { useRouter } from "vue-router";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    
    

    const email    = ref("");
    const password = ref("");
    const router   = useRouter()

    const register = () => {

        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!")
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
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

                });
    }

</script>



<!--deve ver o feed dps e arrumar a posicao dele igual no home com o seu conteudo --- ver essas linhas vermelhas-->

<template>

    <Header />
    
     <div id="register">

        <article>              
        <img src="../assets/Bg-R.jpg" width="260" height="205" id="backgroundR"> 
        </article>   

                <label class="custom-label">Email</label>
                <p><input type="text" placeholder="Email" v-model="email"/></p>
                <label class="custom-label">Senha</label>
                <p><input type="password" placeholder="Password" v-model="password"/></p>
                <p><button @click="register" class="btn btn-primary">Submit</button></p>
                <p><button @click="signInWithGoogle" class="btn btn-danger">Sing In With Google</button></p>

    </div>

    <Footer />
 
</template>
