<template>
    <div>
        <TopNav/>

        <div class="content">
            <aside>aside</aside>
            <main>main</main>
        </div>
    </div>
</template>

<script>

    import TopNav from "../components/TopNav.vue";
    export default {
        name: "Doc",
        components: {TopNav}
    }
</script>

<style scoped>

</style>