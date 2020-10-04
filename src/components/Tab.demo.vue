<demo>
标签
</demo>
<template>
  <Tabs v-model:selected="title">
    <TabComponent title="标签1">这是内容1</TabComponent>
    <TabComponent title="标签2">这是内容2</TabComponent>
  </Tabs>
</template>

<script lang="ts">
import TabComponent from '../lib/TabComponent.vue'
import Tabs from '../lib/Tabs.vue'
import {ref} from 'vue'

export default {
  name: "Tab",
  components: {TabComponent, Tabs},
  setup() {
    const title = ref('标签1')
    return {title}
  }
}
</script>
