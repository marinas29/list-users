<template>
    <div class="user" @click="getUserInfo(user.login)">
        <img :src="user.avatar_url" alt="user.login" class="user__image" />
        <h2 class="user__name"> {{ user.login }} </h2>
    </div>
</template>

<script>
    import Services from '_services/index.js'

    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                userInfo: {},
                repositories: [],
                repositoryInfo: {}
            }
        },
        methods: {
            getUserInfo (user) {
                return Services.getUser(user).then(response => {
                    this.userInfo = response
                    this.getRepositories(user)
                })
            },
            getRepositories (user) {
                return Services.getRepositories(user).then(response => {
                    this.repositories = response
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .user {
        cursor: pointer;

        position: relative;

        width: 250px;
        height: 250px;

        margin: 10px;
        box-shadow: -4px 10px 5px -6px rgba($color-blue--base,0.45);

        &__image {
            position: absolute;
            height: 100%;
            width: 100%;
        }

        &__name {
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: $color-white--base;
        }
    }
</style>
