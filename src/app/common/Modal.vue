<template>
    <div class="modal" :class="{ 'modal--active': isOpen }">
        <div class="modal__content">
            <div class="modal__content__info info">
                <h2 class="info__name" v-if="user.name">{{ user.name }}</h2>
                <p class="info__email" v-if="user.email">{{ user.email }}</p>
                <p class="info__location" v-if="user.location">{{ user.location }}</p>
            </div>
            <template v-for="(repository, r) in repositories">
                <accordion :item="repository" :key="r"></accordion>
            </template>
        </div>
    </div>
</template>

<script>
    import Accordion from './Accordion.vue'

    export default {
        name: 'modal',
        components: { Accordion },
        props: {
            isOpen: { type: Boolean },
            repositories: { type: Array },
            user: { type: Object }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .modal {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba($color-black--base, 0.45);
        z-index: 1;
        display: none;

        &--active {
            display: flex;
        }

        &__content {
            background-color: $color-white--base;
            width: 50%;
            height: 50%;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
