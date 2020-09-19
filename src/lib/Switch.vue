<template>
  <button :class="{checked:value}" @click="changeStatus"><span></span></button>
  {{value}}
</template>

<script lang="ts">
export default {
  name: "Switch",
  props:{
    value:Boolean
  },
  setup(props,context){
    const changeStatus=()=>{
        context.emit('input',!props.value)
    }
    return  { changeStatus}
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

}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: 0.25s;

}
button.checked {
  background: blue;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>