import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/",            component: () => import ("../views/Home.vue"),
            meta:{
                requiresAuth: true,
            },
        },
        { path: "/game",        component: () => import ("../views/Game.vue"), 
            meta:{
                requiresAuth: true,
            },
        },
        { path: "/git",        component: () => import ("../views/Git.vue"),
            meta:{
                requiresAuth: true,
            },
        },
        { path: "/feed",        
            component: () => import ("../views/Feed.vue"), 
            meta:{
                requiresAuth: true,
            },
        },
        { path: "/register",    component: () => import ("../views/Register.vue") },
        { path: "/sign-in",     component: () => import ("../views/SignIn.vue") },
    ],
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth) {
        const user = await getCurrentUser();
        if (user) {
            next();
        } else {
            alert("you don't have access!");
            next("/sign-in"); // ou `next(false)` para bloquear completamente a navegação
        }
    } else {
        next(); // deixa passar rotas públicas
    }
});

// Função para fazer o login com o Google
const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Usuário logado com Google:", user);
    } catch (error) {
        console.error("Erro ao fazer login com o Google:", error);
    }
};

export { loginWithGoogle };

export default router;
