<script setup>

    import { ref } from "vue";
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

<template>

<body>

 <div id="login">
 <label>Email</label>
 <p><input type="text" class="email" placeholder="seu@email.com" v-model="email"/></p>
 <label>Senha</label>
 <p><input type="password" class="password" placeholder="Password" v-model="password"/></p>
 
 <p v-if="errMsg">{{ errMsg }}</p>
 <p><button @click="register" id="Submit"  class="btn btn-primary">Submit</button></p>
 <p><button @click="signInWithGoogle" class="btn btn-danger">Sing In With Google</button></p>


            <article>              
                <img src="../assets/Bg-L.jpg" id="backgroundL"> 
            </article>   
  </div>

  <footer class="rodapeSign">

                <div class="socialSign">

                    <a href="https://github.com/Uzl4n"> <img src = "../assets/GitHub.png"/></a>
                    <a href="https://www.linkedin.com/in/luan-antunes-barbosa-a228b9214/"><img src = "../assets/linked.png"/></a>
                    <a href="https://zl4n.itch.io/"><img src = "../assets/itch.io.png"/></a> 

                    <p>&copy; 2024 - Todos os direitos reservados</p>
                    <p>Entre em contato pelo e-mail: hastaluego6236@gmail.com</p>

                </div>
        </footer> 
        
</body>


</template>