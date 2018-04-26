<template>
    <div class="home-page">
        <h1 class="home-page__title">{{ title }}</h1>
        <list-users :users="users"></list-users>
    </div>
</template>

<script>
    import ListUsers from '_components/user/ListUsers.vue'
    import Services from '_services/index.js'

    export default {
        mounted () {
            return Services.getAllUsers().then(response => {
                this.users = response
            })
        },
        components: {
            ListUsers
        },
        data () {
            return {
                title: 'List Users',
                users: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .home-page {
        position: relative;
        min-height: 100vh;
        padding: 20px 0;

        background: $color-blue--base;
        background: -webkit-linear-gradient(to right, $color-white--base, $color-blue--base);
        background: linear-gradient(to right, $color-white--base, $color-blue--base);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        &__title {
            text-transform: uppercase;
            border-bottom: 2px solid $color-blue--base;
        }
    }
</style>
