<template>
    <div class="list-users">
        <user v-for="(user, index) in users" :key="index" :users="users"></user>
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
        margin: 0 auto;
        max-width: 1100px;

        border: 1px solid #076585;
    }
</style>
