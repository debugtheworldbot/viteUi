<demo>
一键展示dialog
</demo>
<template>
  <Buttons @click="showDialog">show</Buttons>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue";
import Dialog from "../lib/Dialogs.vue";
import {createApp, h} from 'vue'
import {openDialog} from "../lib/openDialog";
export default {
  components:{Buttons},
  setup(){
    const showDialog=()=>{
      openDialog({title:'title',content:'content',ok(){console.log('ok')},cancel(){console.log('cancel')},closeOnClickOverlay:false})
    }
    return {showDialog}
  }
}
</script>

