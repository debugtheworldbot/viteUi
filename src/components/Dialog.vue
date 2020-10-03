<template>
  <Demo :component="Dialog1"/>

  <hr>
  <Buttons @click="showDialog">show</Buttons>
</template>

<script lang="ts">
import Dialog1 from './Dialog1.demo.vue'
import Buttons from "../lib/Buttons.vue";
import {ref} from 'vue'
import {openDialog} from "../lib/openDialog";
import Demo from "./Demo.vue";
export default {
  name: "Dialog",
  components:{Demo, Buttons},
  setup(){
    const visible=ref(false)
    const toggle=()=>{
      visible.value=!visible.value
    }
    const f1=()=>{
    }
    const f2=()=>{
    }
    const showDialog=()=>{
      openDialog({title:'title',content:'content',ok(){console.log('ok')},cancel(){console.log('cancel')},closeOnClickOverlay:false})
    }
    return {visible,toggle,f1,f2,showDialog,Dialog1}
  }
}
</script>

<style scoped>

</style>