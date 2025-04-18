import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/",            component: () => import ("../views/Home.vue") },
        { path: "/register",    component: () => import ("../views/Register.vue") },
        { path: "/sign-in",     component: () => import ("../views/SignIn.vue") },
        { path: "/feed",        
            component: () => import ("../views/Feed.vue"), 
                meta:{
                    requiresAuth: true,
                },
        },
               
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



export default router;