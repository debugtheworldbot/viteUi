<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected:t===selected}" :key="index">{{t}}</div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"  :is="current" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import TabComponent from "./TabComponent.vue";

export default {
  name: "Tabs.vue",
  props:{selected:{type:String}},
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
    const select=(title:string)=>{
      context.emit('update:selected',title)
    }
    const current=defaults.filter(tab=>tab.props.title===props.selected)[0]
    return {defaults,titles, current,select}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>