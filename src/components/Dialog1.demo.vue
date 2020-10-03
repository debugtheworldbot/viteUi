<demo>toggle</demo>
<template>
  <Dialogs v-model:visible="visible" :close-on-click-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>title</strong>
    </template>
    <template v-slot:content>
      <div>第一行</div>
      <div>第二行</div>
      <div>第三行</div>
    </template>
  </Dialogs>
  <Buttons @click="visible=!visible">toggle</Buttons>
</template>

<script lang="ts">
import Dialogs from "../lib/Dialogs.vue";
import Buttons from "../lib/Buttons.vue";
import {ref} from 'vue'
export default {
  components:{Buttons, Dialogs},
  setup(){
    const visible=ref(false)
    const f1=()=>{
      console.log('ok')
    }
    const f2=()=>{
      console.log('cancel')
    }
    return {visible,f1,f2}
  }
}
</script>

