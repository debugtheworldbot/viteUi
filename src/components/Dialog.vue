<template>
  <Dialogs :visible="visible"/>
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
    return {visible,toggle}
  }
}
</script>

<style scoped>

</style>