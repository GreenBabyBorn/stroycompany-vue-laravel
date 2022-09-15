<template>
    <section class="projects page-layout">
        <div class="projects__container page-layout__container">
            <div class="projects__top page-layout__top">
                <h1 class="projects__title title">Проекты</h1>
                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
                </router-link>
            </div>
            <div class="projects__bottom page-layout__bottom">
                <div class="projects__aside">

                </div>
                <div class="projects__body">
                    <AppPreloader v-if="!this.$store.state.projects.loaded"></AppPreloader>
                    <transition-group name="list">
                    <div v-for="project in this.$store.getters['projects/getAllProjects']" :key="project.id"
                         class="projects__item">
                        <div class="projects__year">{{ project.years }}</div>
                        <div class="projects__img">
                            <img v-bind:src="project.photo.path" alt="Картинка проекта">
                        </div>
                        <div class="projects__info">
                            <h2 class="projects__name">{{ project.name }}</h2>
                            <p class="projects__description">
                                {{ project.description }}
                            </p>
                            <router-link v-bind:to=" '/projects/' + project.id" class="projects__btn">Подробнее
                            </router-link>
                        </div>
                    </div>
                    </transition-group>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import TheButtonLink from "../../components/UI/TheButtonLink";
import AppPreloader from "../../components/AppPreloader";
export default {
    name: "Projects",
    components: {
        TheButtonLink,
        AppPreloader
    },
    created() {
        this.$store.dispatch('projects/indexProjects')

            // document.title = "СтройКом | Проекты"

    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.projects {
    &__container {
    }

    &__top {
        border-bottom: 1px solid #E5E5E5;
    }

    &__title {
    }

    &__bottom {
    }

    &__aside {
    }

    &__body {
        display: flex;
        flex-direction: column;
    }

    &__item {
        display: flex;
        //flex: 0 1 376px;
        &:not(:last-child){
            border-bottom: 1px solid #E5E5E5;;
        }
        @include adaptiveValue("gap", 60, 20);

        @include adaptiveValue("padding-top", 60, 30);
        @include adaptiveValue("padding-bottom", 60, 30);
        @media (max-width: $tablet) {
            display: flex;
            flex-direction: column;
        }
    }

    &__year {
        flex: 0 0 10%;
    }

    &__img {
        flex: 0 0 32%;

        //height: 100%;
        img{
            width: 100%;
            height: 100%;
            aspect-ratio: 1/1;
            object-position: center;
            object-fit: cover;
        }

    }

    &__info {
        flex: 1 1 300px;
        @media (max-width: $tablet) {
            flex: 1 1 auto;
            gap: 20px;
        }
        display: grid;
        grid-auto-rows: auto 1fr;
    }

    &__name {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        color: #393939;
    }

    &__description {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        color: #393939;
    }

    &__btn {
        font-family: Consolas, monospace;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #CDA177;

    }
}


</style>
