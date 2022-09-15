<template>
    <section class="project page-layout">
        <div class="project__container page-layout__container">
            <div class="project__top page-layout__top">
                <h1 class="project__title title">
                                        <AppPreloader v-if="!this.$store.state.projects.loaded"></AppPreloader>
                    {{ $store.getters['projects/getOneProject'].name }}
                </h1>

                <router-link to="/projects" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">К
                    проектам
                </router-link>
            </div>
            <AppPreloader v-if="!$store.state.projects.loaded"></AppPreloader>
            <div class="project__bottom page-layout__bottom">
                <!--                {{  this.$store.getters['projects/getOneProject'].stages }}-->
                <transition-group name="list">
                <div v-for="stage in $store.getters['projects/getOneProject'].stages" :key="stage.name" class="project__stage stage">
                    <div class="stage__left">
                        <h2 class="stage__name">
                            {{ stage.name }}
                        </h2>
                        <span class="stage__years">
                            {{ stage.years }}
                        </span>
                    </div>
                    <div class="stage__right">
                        <p class="stage__description">
                            {{ stage.description }}
                        </p>
                        <div class="stage__img">

                            <img v-bind:src="stage.photo.path" alt="Фото стадии проекта">
                        </div>
                    </div>
                </div>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>
import AppPreloader from "../../components/AppPreloader";

export default {
    name: "Project",
    components: {
        AppPreloader
    },
    updated() {
        document.title = "СтройКом | " + this.$store.getters['projects/getOneProject'].name
    },
    // mounted() {
    //     this.$store.dispatch('projects/showProject', this.$route.params.id)
    // },


}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.6s ease-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.project {
    &__container {
    }

    &__top {
        border-bottom: 1px solid #E5E5E5;
    }

    &__title {
    }

    &__bottom {
    }

    &__stage {
    }
}

.stage {
    display: flex;
    @include adaptiveValue("padding-top", 60, 30);
    @include adaptiveValue("padding-bottom", 60, 30);
    @media (max-width: $tablet) {

        flex-direction: column;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #E5E5E5;
    }

    @include adaptiveValue("gap", 60, 20);

    &__left {
        flex: 0 0 255px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: $tablet) {
            justify-content: flex-start;
            gap: 20px;
            flex: 0 0 auto;
        }
    }

    &__name {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        /* or 34px */


        /* Dark Gray */

        color: #393939;
    }

    &__years {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;
        /* identical to box height, or 34px */


        /* Dark Gray */

        color: #393939;
    }

    &__right {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }

    &__description {
        font-family: Consolas, monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        color: #393939;
    }

    &__img {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width: $mobile) {
                aspect-ratio: 1/1;
            }

        }
    }
}
</style>
