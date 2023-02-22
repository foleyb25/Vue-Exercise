<template>
  <Header msg="Vite + Vue" />
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007acc;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
}

header h1 {
  margin: 0;
  font-size: 48px;
}

header p {
  margin-top: 10px;
  font-size: 24px;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

main p {
  font-size: 18px;
  line-height: 1.5;
}

footer {
  background-color: #007acc;
  color: white;
  padding: 20px;
  text-align: center;
}

footer p {
  margin: 0;
  font-size: 16px;
}
</style>
