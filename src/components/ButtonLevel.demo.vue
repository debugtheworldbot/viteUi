<demo>
button 颜色
</demo>
<template>
  <div>
    <Buttons level="main">主要按钮</Buttons>
    <Buttons>普通按钮</Buttons>
    <Buttons level="danger">危险按钮</Buttons>

    <Buttons theme="link" level="main">主要链接按钮</Buttons>
    <Buttons theme="link">普通链接按钮</Buttons>
    <Buttons theme="link" level="danger">危险链接按钮</Buttons>

    <Buttons theme="text" level="main">主要文字按钮</Buttons>
    <Buttons theme="text">普通文字按钮</Buttons>
    <Buttons theme="text" level="danger">危险文字按钮</Buttons>
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

