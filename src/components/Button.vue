<template>
  <Buttons @click="handleClick" >hello</Buttons>
  <Buttons @click="handleClick" theme="button">hello</Buttons>
  <Buttons @click="handleClick" theme="text">hello</Buttons>
  <Buttons @click="handleClick" theme="link">hello</Buttons>
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