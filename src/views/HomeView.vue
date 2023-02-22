<template>
  <div>
    <h1>Home</h1>
    <p>Welcome to the Vue Exercises Repository! This repository contains a number of exercises and projects to help instructors teach Vue.js to their students. You can find different exercises and projects on different branches of this repository. </p>
    <p>To get started, simply select a branch from the list of branches on this page. Each branch contains a different exercise or project, along with instructions and example code.</p>
  </div>
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