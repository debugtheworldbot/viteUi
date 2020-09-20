<template>
  <Buttons @click="handleClick" >hello</Buttons>
  <Buttons @click="handleClick" theme="button">hello</Buttons>
  <Buttons @click="handleClick" theme="text">hello</Buttons>
  <Buttons @click="handleClick" theme="link">hello</Buttons>

  <hr>
  <Buttons @click="handleClick" size="small">hello</Buttons>
  <Buttons @click="handleClick"  size="big">hello</Buttons>
  <hr>
  <Buttons @click="handleClick" theme="link" size="small">hellosssssssssssssss</Buttons>
  <Buttons @click="handleClick" theme="link" size="big">你好</Buttons>
  <hr>
  <Buttons @click="handleClick" theme="text" size="small">hello</Buttons>
  <Buttons @click="handleClick" theme="text" size="big">hello</Buttons>
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
  <hr>
  <Buttons disabled>disabled</Buttons>
  <Buttons :disabled="false" theme="text">disabled</Buttons>
  <Buttons disabled theme="link">disabled</Buttons>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue";
export default {
  name: "Button",
  components:{Buttons},
  setup(){
    const handleClick=()=>{
      console.log('hi')
    }
    return {handleClick}
  }
}
</script>

<style scoped>

</style>