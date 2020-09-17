<template>
  <div class="topNav" >
    <div class="logo" @click="toggleVisible">logo</div>
    <ul class="menu">
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'
export default {
  name: "TopNav",
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleVisible=()=>{
      asideVisible.value=!asideVisible.value
    }
    return {toggleVisible}
  }
}

</script>

<style lang="scss" scoped>
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>