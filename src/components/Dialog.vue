<template>
  <Dialogs v-model:visible="visible" :close-on-click-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>title</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
      <div>hi222</div>
      <div>hi333</div>
    </template>
  </Dialogs>
  <Buttons @click="toggle">toggle</Buttons>
  <hr>
  <Buttons @click="showDialog">show</Buttons>
</template>

<script lang="ts">
import Dialogs from "../lib/Dialogs.vue";
import Buttons from "../lib/Buttons.vue";
import {ref} from 'vue'
import {openDialog} from "../lib/openDialog";
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
    const showDialog=()=>{
      openDialog({title:'title',content:'content',ok(){console.log('ok')},cancel(){console.log('cancel')}})
    }
    return {visible,toggle,f1,f2,showDialog}
  }
}
</script>

<style scoped>

</style>