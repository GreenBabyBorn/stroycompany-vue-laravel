<template>
    <section class="review page-layout">
        <div class="review__container page-layout__container">
            <div class="review__top page-layout__top">
                <h1 class="review__title title">Отзывы</h1>
                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
                </router-link>
            </div>
            <div class="review__bottom page-layout__bottom">
                <transition-group name="list">
                <div v-for="review in this.$store.getters['reviews/getApprovedReviews']" :key="review.id"
                     class="review__item item-review">
                    <h3 class="item-review__author">{{ review.author }}</h3>
                    <!--                    <span class="item-review__email">3123123123@gmail.com</span>-->
                    <p class="item-review__text">
                        {{ review.text }}
                    </p>
                </div>
</transition-group>
            </div>
            <div class="layout__item">
                <div class="layout__left"><h4 class="sub-title">Здесь вы можете написать свой отзыв</h4></div>
                <div class="layout__right">
                    <ReviewForm></ReviewForm>
                </div>
            </div>

        </div>

    </section>
</template>

<script>
import ReviewForm from "../../components/ReviewForm";

export default {
    name: "Reviews",
    components: {ReviewForm},
    created() {
        this.$store.dispatch('reviews/indexApprovedReviews')

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

.review {
    &__container {
    }

    &__top {
    }

    &__title {
    }

    &__bottom {
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    &__item {
    }
}

.page-layout {
    &__container {
    }

    &__top {
    }

    &__back {
    }

    &__bottom {
    }
}

.title {
}

.item-review {
    padding: 20px;
    //background: #F2F2F2;
    border: 1px solid rgba(10, 9, 13, 0.5);
    box-shadow: 10px 2px rgba(10, 9, 13, 0.5);
    display: flex;
    gap: 20px;
    flex-direction: column;

    &__author {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
    }

    &__text {
        font-family: Consolas, monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        align-self: flex-end;
    }
}

.layout {
    &__item {
    }

    &__left {
    }

    &__right {
    }
}
</style>
