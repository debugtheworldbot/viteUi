<template>
  <Switchs v-model:value="boolean" />
</template>

<script lang="ts">
import Switchs from "../lib/Switch.vue"
import {ref} from 'vue'

export default {
  name: "Switch",
  components: {Switchs},
  setup() {
    const boolean = ref(true)
    return { boolean}
  }
}
</script>

<style scoped>

</style>