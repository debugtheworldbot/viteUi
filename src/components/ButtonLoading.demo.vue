<demo>
disable & loading
</demo>
<template>
  <div>
    <Buttons disabled>disabled</Buttons>
    <Buttons disabled theme="text">disabled text</Buttons>
    <Buttons disabled theme="link">disabled link</Buttons>
    <Buttons loading>loading</Buttons>
  </div>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue"
export default {
  name: "ButtonTheme.demo.vue",
  components: {
    Buttons
  }
}
</script>

