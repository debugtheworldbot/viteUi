<template>

  <button :class="`theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "Buttons.vue",
  props:{
    theme:{type:String,default:'button'}
  },
  setup(){

    return {}
  }
}
</script>

<style scoped>

</style>