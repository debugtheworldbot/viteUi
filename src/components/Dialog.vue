<template>
  <Dialogs v-model:visible="visible" :close-on-click-overlay="false" :ok="f1" :cancel="f2"/>
  <Buttons @click="toggle">toggle</Buttons>
</template>

<script lang="ts">
import Dialogs from "../lib/Dialogs.vue";
import Buttons from "../lib/Buttons.vue";
import {ref} from 'vue'
export default {
  name: "Dialog",
  components:{Buttons, Dialogs},
  setup(){
    const visible=ref(false)
    const toggle=()=>{
      visible.value=!visible.value
    }
    const f1=()=>{
    }
    const f2=()=>{
    }
    return {visible,toggle,f1,f2}
  }
}
</script>

<style scoped>

</style>