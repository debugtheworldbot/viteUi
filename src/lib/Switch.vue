<template>
  <button :class="{checked}" @click="changeStatus"><span></span></button>
</template>

<script lang="ts">
import {ref} from "vue";
export default {
  name: "Switch",
  setup(){
    const checked = ref(false)
    const changeStatus=()=>{
      checked.value=!checked.value
    }
    return  { checked,changeStatus}
  }
}
</script>

<style scoped lang="scss">

$h: 22px;
$h2: $h - 4px;
button {
  outline: none;
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  transition: 0.2s;

}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
}
button.checked {
  background: blue;
  > span {
    left: calc(100% - #{$h2} - 2px);
    transition: 0.2s;
  }
}
</style>