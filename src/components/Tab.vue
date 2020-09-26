<template>
  <Tabs>
    <TabComponent title="nv1">1</TabComponent>
    <TabComponent title="nv2">2</TabComponent>
  </Tabs>
</template>

<script lang="ts">
import TabComponent from '../lib/TabComponent.vue'
import Tabs from '../lib/Tabs.vue'
export default {
  name: "Tab",
  components:{TabComponent,Tabs}
}
</script>

<style scoped>

</style>