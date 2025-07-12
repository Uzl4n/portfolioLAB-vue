import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Aqui você importa o arquivo de rotas corretamente
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBpcFNhRrywjv3U4l_kMa06sP5RbRrglik",
    authDomain: "portfolio-luan-antunes-barbosa.firebaseapp.com",
    projectId: "portfolio-luan-antunes-barbosa",
    storageBucket: "portfolio-luan-antunes-barbosa.appspot.com",
    messagingSenderId: "728032143588",
    appId: "1:728032143588:web:de32c6daf10651b220a4f1",
    measurementId: "G-XBNH28R588"
};

// Inicializa o Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);  // Usando o Vue Router para navegação
app.mount('#app'); // Montando o App no DOM
