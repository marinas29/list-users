<template>
    <div class="accordion">
        <input v-if="item.name" class="accordion__radio" type="checkbox" :id="[[ item.id ]]" :value="[[ item.name ]]" name="goal">
        <label v-if="item.name" class="accordion__title" :for="[[ item.id ]]">{{ item.name }}</label>
        <div v-if="item" class="accordion__content">
            <p class="accordion__content__description">Fullname: {{ item.full_name }}</p>
            <p class="accordion__content__description">Description: {{ item.description }}</p>
            <p class="accordion__content__description">Forks: {{ item.forks_count }}</p>
            <p class="accordion__content__description">Create: {{ item.created_at }}</p>
            <p class="accordion__content__description">Default Branch: {{ item.default_branch }}</p>
            <p class="accordion__content__description">Stargazers Count: {{ item.stargazers_count }}</p>
            <p class="accordion__content__description">Watchers Count:{{ item.watchers_count }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            default: {},
            type: Object
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~_sass/config/vars';

    .accordion {
        position: relative;
        width: 100%;
        color: $color-white--base;
        border-bottom: 1px solid $color-white--base;
        overflow: hidden;

        &__radio {
            display: none;

            &:checked + .accordion__title:after {
                transform: rotate(360deg);
            }

            &:checked ~ .accordion__content {
                max-height: 100%;
                border-bottom: 1px solid $color-blue--base;
            }
        }

        &__title {
            line-height: 50px;
            height: auto;
            display: block;
            position: relative;
            padding-left: 15px;
            padding-right: 50px;
            background: $color-blue--base;
            font-family: 'Open Sans Condensed', sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;

            @media screen and (max-width: 992px) {
                padding-right: 25px;
                line-height: 30px;
                font-size: 1rem;
            }

            &:after {
                content: '+';
                position: absolute;
                right: 0;
                top: 0;
                width: 50px;
                height: 100%;
                transition: transform .5s;
                
                display: flex;
                justify-content: center;
                align-items: center;

                @media screen and (max-width: 992px) {
                    width: 25px;
                }
            }
        }

        &__content {
            overflow: hidden;
            background: $color-white--base;
            color: $color-blue--base;
            max-height: 0;
            border-bottom: 1px solid $color-white--base;
            transition: border-bottom .4s, max-height .4s;
    
            &__description {
                padding: 20px;
                font-size: 1rem;

                @media screen and (max-width: 992px) {
                    font-size: 0.8rem;
                    padding: 15px;
                }
            }
        }
    }
</style>