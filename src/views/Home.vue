<template>
    <TopNav/>
    <div class="banner">
        <h1>UI</h1>
        <h2>subs</h2>
        <p>
            <a href="github.com">github</a>
            <a href="">begin</a>
        </p>
    </div>w

</template>

<script lang="ts">
    import TopNav from "../components/TopNav.vue";
    export default {
        name: "Home",
        components: {TopNav}
    }
</script>

<style lang="scss" scoped>
    .topNav{
        border: 1px solid  black;
    }
</style>