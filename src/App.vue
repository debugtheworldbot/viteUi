<template>
  <div>NAVI | <router-link to="/">Test</router-link> | <router-link to="/Test2">test2</router-link> </div>
  <hr/>
  <router-view />
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'App',
}
</script>
