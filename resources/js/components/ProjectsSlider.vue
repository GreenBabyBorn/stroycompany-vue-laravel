<template>
    <section class="projects-slider ">
        <div class="projects-slider__container ">
            <div class="projects-slider__top">
                <h2 class="title">Высокое качество работы в наших проектах</h2>
            </div>
            <div class="projects-slider__bottom ">
                <div class="projects-slider__left">
                    <TheButtonLink url-to="/projects" color="#DFD1A7">Все портфолио</TheButtonLink>
                    <div class="projects-slider__arrows">
                        <button class="arrow__prev"><img src="/img/arrow.svg" alt=""></button>
                        <button class="arrow__next"><img style="transform: rotate(180deg)" src="/img/arrow.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="projects-slider__right">
                    <swiper class="projects-slider__body"
                            :modules="modules"
                            :navigation="{
                                nextEl: '.arrow__next',
                                prevEl: '.arrow__prev',
                            }"
                            :loop="true"
                            :slides-per-view="1"
                            :space-between="30"
                            :breakpoints="{
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 60
                            },

                            }"
                            :auto-height="true"
                    >

                        <swiper-slide v-for="project in this.$store.getters['projects/getAllProjects']"
                                      :key="project.id" class="projects-slider__slide slide">
                            <div class="slide__img">
                                <img v-bind:src="project.photo.path"
                                     alt="Проект">
                            </div>
                            <div class="slide__info">
                                <h3 class="slide__name">{{ project.name }}</h3>
                                <span class="slide__years">{{ project.years }}</span>
                            </div>
                            <div class="slide__more">
                                <router-link class="slide__link" v-bind:to=" '/projects/' + project.id">Подробнее
                                </router-link>
                            </div>
                        </swiper-slide>


                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TheButtonLink from "./UI/TheButtonLink";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';

export default {
    name: "ProjectsSlider",
    components: {
        Swiper,
        SwiperSlide,
        TheButtonLink
    },
    setup() {

        return {
            modules: [Navigation],

        };
    },

    created() {
        this.$store.dispatch('projects/indexProjects')
    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.projects-slider {
    &__container {
        @include adaptiveValue("padding-top", 160, 60);
        display: flex;
        flex-direction: column;
        //gap: 90px;
        @include adaptiveValue("gap", 90, 20);
    }

    &__arrows {
        margin-top: 50px;
        display: flex;
        gap: 60px;
    }

    &__top {
    }

    &__bottom {
        display: flex;
        gap: 20px;
        @media (max-width: $tablet) {
            flex-direction: column;
        }
    }

    &__left {
        flex: 0 0 28%;
    }

    &__right {
        min-width: 0;
    }

    &__body {
    }

    &__slide {

        //border: 2px solid black;
    }
}


.slide {

    cursor: grab;

    &__img {

        img {
            width: 100%;
            //height: 100%;
            aspect-ratio: 1/1;
            background-repeat: no-repeat;
            object-fit: cover;
            object-position: center;
        }

        margin-bottom: 20px;
    }

    &__info {
        margin-bottom: 15px;
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
        font-family: Consolas, monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        /* identical to box height, or 29px */


        /* Dark Gray */

        color: #393939;
    }

    &__more {
        border-top: 1px solid #E5E5E5;
        padding-top: 40px;
    }

    &__link {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */

        text-decoration-line: underline;
        text-transform: uppercase;

        /* Orange */

        color: #CDA177;
    }

}
</style>
