<template>
  <Demo :component="TabDemo"/>

</template>

<script lang="ts">
import Demo from "./Demo.vue";
import TabDemo from './Tab.demo.vue'

export default {
  name: "Tab",
  setup() {
    return {Demo,TabDemo}
  }
}
</script>

<style scoped>

</style>