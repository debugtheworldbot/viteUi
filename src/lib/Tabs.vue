<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
  </div>
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