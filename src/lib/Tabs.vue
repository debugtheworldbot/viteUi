<template>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index"/>
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
    const titles=defaults.map(tab=>{
       return tab.props.title
    })
    return {defaults,titles}
  }
}
</script>

<style scoped>

</style>