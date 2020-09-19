<template>
  <Switchs :value="v" @input="v = $event"/>
</template>

<script lang="ts">
import Switchs from "../lib/Switch.vue"
import {ref} from 'vue'

export default {
  name: "Switch",
  components: {Switchs},
  setup() {
    const v = ref(true)
    return {v}
  }
}
</script>

<style scoped>

</style>