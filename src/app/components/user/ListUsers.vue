<template>
    <div class="list-users">
        <user v-for="(user, index) in users" :key="index" :user="user"></user>
    </div>
</template>

<script>
    import User from './User.vue'

    export default {
        props: {
            users: {
                type: Array,
                required: true
            }
        },
        components: {
            User
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .list-users {
        max-width: 80%;
        margin: 0 auto;

        width: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
