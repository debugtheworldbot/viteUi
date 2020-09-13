<template>
    <div class="topNav">
        <div class="logo">logo</div>
        <ul class="menu">
            <li>1</li>
            <li>2</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TopNav"
    }
</script>

<style lang="scss" scoped>
    .topNav {
        background: pink;
        display: flex;
        padding: 16px;
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