<template>
    <section class="about page-layout">
        <div class="about__container page-layout__container">
            <div class="about__top page-layout__top">
                <h1 class="about__title title">О нас</h1>
                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
                </router-link>
            </div>
            <div class="about__bottom page-layout__bottom">


                            <div class="about__item layout__item">
                                <div class="layout__left">
                                    <h3 class="about__sub-title sub-title">Мы обеспечиваем качество реализации проекта</h3>
                                </div>
                                <div class="layout__right">

                                    <div class="about__text text">
                                        Для реализации Вашего проекта, будь то строительство коттеджа или масштабного архитектурного сооружения, необходимы качественные инженерные изыскания. Геологические, экологические и климатические условия уникальны для каждой местности. Они способны повлиять на Ваш проект. Для изучения этих условий и прогноза возможных последствий необходимо изучить и предвидеть все возможные факторы.
                                    </div>
                                    <div class="about__photos">
                                        <div class="about__img">
                                            <img src="/img/about/item_1.jpg" alt="Фото">

                                        </div>
                                        <div class="about__img">
                                            <img src="/img/about/item_2.jpg" alt="Фото">
                                        </div>
                                    </div>
                                </div>
                            </div>


            </div>
        </div>
    </section>


</template>

<script>
export default {
    name: "About",
    created() {
        // document.title = "СтройКом | О нас"
    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.about {
    &__container {
    }

    &__top {
    }

    &__title {
    }

    &__bottom {
    }

    &__item {
    }

    &__text {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        /* or 34px */


        /* Dark Gray */

        color: #393939;
        margin-bottom: 60px;
    }

    &__photos {
        display: flex;
        gap: 60px;
        @media (max-width: $tablet) {
            flex-direction: column;
        }
    }

    &__img {

        img{

            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}



</style>
