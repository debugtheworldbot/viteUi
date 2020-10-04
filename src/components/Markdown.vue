<template>
  <article class="markdown-body" v-html="component">

  </article>
</template>

<script lang="ts">
import md from "../markdown/install.md";
export default {
  name: "Markdown",
  props:{component:{type:String,required:true}},
  data() {
    return {
      md
    }
  }
}
</script>

<style scoped>

</style>