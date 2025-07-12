<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="socialFeed">
      <a href="https://github.com/Uzl4n"> <img src = "../assets/GitHub.png"/></a>
      <a href="https://www.linkedin.com/in/luan-antunes-barbosa-a228b9214/"><img src = "../assets/linked.png"/></a>
      <a href="https://zl4n.itch.io/"><img src = "../assets/itch.io.png"/></a> 
    </div> 
    <p>&copy; 2025 - Todos os direitos reservados</p>
  </footer>
</template>

<script>
// No <script setup>, você não precisa usar "export default"
// O Vue já entende que isso é um componente
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  background-image: url('../assets/layoutSocial.avif');
  border-radius: 20px;
}


.footer p{
  font-size: 14px;
  text-align: center;
}


.socialFeed img {
  max-width: 60px;
  max-height: 140px;
}


</style>
