<template>
  <Demo :component="Dialog1"/>
  <hr>
  <Demo :component="Dialog2"/>
</template>

<script lang="ts">
import Dialog1 from './Dialog1.demo.vue'
import Dialog2 from './Dialog2.demo.vue'
import Buttons from "../lib/Buttons.vue";
import {openDialog} from "../lib/openDialog";
import Demo from "./Demo.vue";
export default {
  name: "Dialog",
  components:{Demo, Buttons},
  setup(){
    const showDialog=()=>{
      openDialog({title:'title',content:'content',ok(){console.log('ok')},cancel(){console.log('cancel')},closeOnClickOverlay:false})
    }
    return {showDialog,Dialog1,Dialog2}
  }
}
</script>

