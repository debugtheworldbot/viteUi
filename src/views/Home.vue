<template>
  <div  class="topnavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>UI</h1>
      <h2>a simple Ui</h2>
      <p class="actions">
        <a href="https://github.com/debugtheworldbot">github</a>
        <router-link to="/doc">begin</router-link>
      </p>
      <div class="features">
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-lighting"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-typescript-def"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import TopNav from "../components/TopNav.vue";
    export default {
        name: "Home",
        components: {TopNav}
    }
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>