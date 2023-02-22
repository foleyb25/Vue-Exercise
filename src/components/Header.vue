<template>
  <header>
    <h1>Vue Exercises Repository</h1>
    <p>A collection of Vue exercises for instructors to use in their courses.</p>
    <div class="link-container">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
setup() {
  const count = ref(0)

  // expose to template and other options API hooks
  return {
    count
  }
},

mounted() {
  console.log(this.count) // 0
}
}
</script>

<style>
.link-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-right: 20px;
}

ul li:last-child {
  margin-right: 0px;
}

</style>
