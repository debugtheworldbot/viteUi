<demo>
常规用法
</demo>
<template>
  <Switches v-model:value="bool" />
</template>

<script lang="ts">
import Switches from '../lib/Switches.vue'
import {ref} from "vue"

export default {
  name: "Switch1.demo.vue",
  components: {
    Switches,
  }, __sourceCode: undefined,

  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>

<style scoped>

</style>