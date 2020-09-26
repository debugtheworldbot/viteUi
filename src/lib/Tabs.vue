<template>
  its tabs
  <component :is="defaults[0]" />
  <component :is="defaults[1]" />
</template>

<script lang="ts">
import TabComponent from "./TabComponent.vue";

export default {
  name: "Tabs.vue",
  setup(props,context){
    const defaults=context.slots.default()
    defaults.forEach(tab=>{
      if(tab.type!==TabComponent){
        throw new Error('必须是TabComponent！')
      }
    })
    return {defaults}
  }
}
</script>

<style scoped>

</style>