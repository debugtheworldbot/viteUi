<template>
  <div class="layout">
<!--    <TopNav toggle-menu-visible class="nav" />-->

    <div class="content" >
      <aside v-if="asideVisible">
        <router-link to="/" class="logo">
          <svg class="icon">
            <use xlink:href="#icon-blade"></use>
          </svg>
        </router-link>
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始使用</router-link>
          </li>

        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">

import TopNav from "../components/TopNav.vue";
import {inject,Ref} from "vue";

export default {
  name: "Doc",
  components: {TopNav},
  setup() {
    const asideVisible = inject <Ref< boolean >> ('asideVisible')
    return {asideVisible}
  }
}
</script>

<style scoped lang="scss">

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    text-align: center;
  }
  > main {
    flex-grow: 1;
    padding: 16px 0;
    background: white;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  > .logo > svg{
    width: 32px;
    height: 32px;
  }
> h2 {
  margin-bottom: 4px;
}

> ol {

> li {

  > a{
    display: block;
    padding: 4px 0;
    text-decoration:none;
    &:hover{
    color: #1890ff;
    }
  }
    > .router-link-active{
      transition: all 0.25s;
      color: #1890ff;

      background: white;

    }
}

}
}
main {
  overflow: auto;
}

</style>