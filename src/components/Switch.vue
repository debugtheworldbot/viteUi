<template>
  <Switches v-model:value="boolean" />
</template>

<script lang="ts">
import Switches from "../lib/Switches.vue"
import {ref} from 'vue'

export default {
  name: "Switch",
  components: {Switches},
  setup() {
    const boolean = ref(true)
    return { boolean}
  }
}
</script>

<style scoped>

</style>