<template>
    <div class="modal" :class="{ 'modal--active': isOpen }">
        <div class="modal__content">
            <h2 class="modal__content__name">{{ user.name }}</h2>
            <p class="modal__content__email">{{ user.email }}</p>
            <p class="modal__content__location">{{ user.location }}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'modal',
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
