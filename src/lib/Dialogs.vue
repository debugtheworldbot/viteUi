<template>
  <div class="dialogOverlay"></div>
  <div class="dialog-wrapper">
    <header>title</header>
    <main>
      <p>first line</p>
      <p>second line</p>
    </main>
    <footer>
      <Buttons level="danger">cancel</Buttons>
      <Buttons level="main">confirm</Buttons>
    </footer>
  </div>
</template>

<script lang="ts">
import Buttons from "./Buttons.vue";

export default {
  name: "Dialogs",
  components: {Buttons}
}
</script>

<style scoped>

</style>