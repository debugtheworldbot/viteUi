<template>
  <div class="topNav">
    <svg v-if="toggleMenuVisible" class="toggleAside" @click="toggleVisible">
        <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  name: "TopNav",
  props:{
    toggleMenuVisible:{type:Boolean,default:false}
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleVisible = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleVisible}
  }
}

</script>

<style lang="scss" scoped>
$color: #007974;
.topNav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width: 32px;
      height: 32px;
    }
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
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }

  }
}
</style>