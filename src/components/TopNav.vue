<template>
  <div class="topNav" >
    <div class="logo" >logo</div>
    <ul class="menu">
      <li>1</li>
      <li>2</li>
    </ul>
    <span class="toggleAside" @click="toggleVisible"></span>
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
  justify-content: center;
  align-items: center;
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
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px){
    > .menu{
      display: none;
    }
    > .logo{
      margin: 0 auto;
    }
    > .toggleAside{
      display: inline-block;
    }

  }
}
</style>