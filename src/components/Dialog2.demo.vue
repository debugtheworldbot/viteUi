<demo>
展示dialog
</demo>
<template>
  <Buttons @click="showDialog">show</Buttons>
</template>

<script lang="ts">
import Buttons from "../lib/Buttons.vue";
import Dialog from "../lib/Dialogs.vue";
import {createApp, h} from 'vue'
export default {
  components:{Buttons},
  setup(){
    const openDialog = (options) => {
      const {title, content,ok,cancel,closeOnClickOverlay} = options
      const div = document.createElement('div')
      document.body.appendChild(div)
      const app = createApp({
        render() {
          return h(Dialog, {visible: true,
            'onUpdate:visible':(newVisible)=>{
              if(!newVisible){
                app.unmount(div)
                div.remove()
              }
            },ok,cancel,closeOnClickOverlay}, {title, content})
        }
      })
      app.mount(div)
    }
    const showDialog=()=>{
      openDialog({title:'title',content:'content',ok(){console.log('ok')},cancel(){console.log('cancel')},closeOnClickOverlay:false})
    }
    return {showDialog}
  }
}
</script>

