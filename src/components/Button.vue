<template>
  <Demo :component="ButtonTheme"/>
  <Demo :component="ButtonLevel"/>
  <Demo :component="ButtonLoading"/>
  <hr>

  <hr>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue";
import Demo from "./Demo.vue";
import ButtonTheme from './ButtonTheme.demo.vue'
import ButtonLevel from './ButtonLevel.demo.vue'
import ButtonLoading from './ButtonLoading.demo.vue'
export default {
  name: "Button",
  components:{Demo, Buttons},
  setup(){
    return {ButtonTheme,ButtonLevel,ButtonLoading}
  }
}
</script>

<style scoped>

</style>