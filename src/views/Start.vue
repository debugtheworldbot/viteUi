<template>
  <article class="markdown-body" v-html="md">

  </article>
</template>

<script>
import md from '../markdown/start.md';
export default {
  name: "Start",
  data() {
    return {
      md
    }
  }
}
</script>

<style scoped>
</style>