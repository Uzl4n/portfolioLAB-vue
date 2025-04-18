<script setup>

    import { ref } from "vue";
    import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { useRouter } from "vue-router";
    
    

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

<template>
<body>
   
<div id="register">

<article>              
   <img src="../assets/Bg-R.jpg" width="260" height="205" id="backgroundR"> 
</article>   

 <label>Email</label>
 <p><input type="text" placeholder="Email" v-model="email"/></p>
 <label>Senha</label>
 <p><input type="password" placeholder="PassWord" v-model="password"/></p>
 <p><button @click="register" class="btn btn-primary">Submit</button></p>
 <p><button @click="signInWithGoogle" class="btn btn-danger">Sing In With Google</button></p>

</div>


<footer class="rodapeRegister">

    <div class="socialRegister">

        <a href="https://github.com/Uzl4n"> <img src = "../assets/GitHub.png"/></a>
        <a href="https://www.linkedin.com/in/luan-antunes-barbosa-a228b9214/"><img src = "../assets/linked.png"/></a>
        <a href="https://zl4n.itch.io/"><img src = "../assets/itch.io.png"/></a> 

            <p>&copy; 2024 - Todos os direitos reservados</p>
            <p>Entre em contato pelo e-mail: hastaluego6236@gmail.com</p>

    </div>
</footer> 

</body>

</template>