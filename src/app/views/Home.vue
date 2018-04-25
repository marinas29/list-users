<template>
    <div class="home">
        <p>Home</p>
    </div>
</template>

<script>
    import Services from '_services/index.js'

    export default {
        mounted () {
            Services.getAllUsers()
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .home {
        position: relative;
        height: 100%;
    }
</style>
