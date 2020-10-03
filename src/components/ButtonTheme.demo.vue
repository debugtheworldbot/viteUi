<demo>
button 大小
</demo>
<template>
  <div>
    <Buttons theme="button">button</Buttons>
    <Buttons theme="text">text</Buttons>
    <Buttons theme="link">link</Buttons>
    <Buttons size="small">small</Buttons>
    <Buttons size="big">big</Buttons>
    <Buttons theme="link" size="small">link&small</Buttons>
    <Buttons theme="link" size="big">link&big</Buttons>
    <Buttons theme="text" size="small">text&small</Buttons>
    <Buttons theme="text" size="big">text&big</Buttons>
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

