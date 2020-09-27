<template>
  <Tabs v-model:selected="title">
    <TabComponent title="nv1">1</TabComponent>
    <TabComponent title="nv2">2</TabComponent>
  </Tabs>
</template>

<script lang="ts">
import TabComponent from '../lib/TabComponent.vue'
import Tabs from '../lib/Tabs.vue'
import {ref} from 'vue'

export default {
  name: "Tab",
  components:{TabComponent,Tabs},
  setup(){
    const title=ref('nv1')
    return {title}
  }
}
</script>

<style scoped>

</style>