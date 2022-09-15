<template>
    <section class="review page-layout">
        <div class="review__container page-layout__container">
            <div class="review__top page-layout__top">
                <h1 class="review__title title">Отзывы</h1>
                <!--                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную-->
                <!--                </router-link>-->
            </div>
            <div class="review__bottom page-layout__bottom">
                <div v-for="review in this.$store.getters['reviews/getAllReviews']" :key="review.id"
                     class="review__item item-review">

                    <h3 class="item-review__author">{{ review.author }}</h3>
                    <span class="item-review__email">{{ review.email }}</span>
                    <p class="item-review__text">
                        {{ review.text }}
                    </p>
                    <div class="review__actions">
                        <button :class="{seen: review.status}" class="review__btn-status"
                                @click="this.$store.dispatch('reviews/updateReview', {reviewId: review.id, reviewStatus: !review.status})">
                            {{ review.status ? 'Снять с публикации' : 'Опубликовать' }}
                        </button>
                        <button class="review__btn-del"
                                @click="this.$store.dispatch('reviews/destroyReview', review.id)">Удалить
                        </button>
                    </div>

                </div>
            </div>
            <div class="layout__item">
                <div class="layout__left"></div>
                <div class="layout__right">
                    <!--                    <ReviewForm></ReviewForm>-->
                </div>
            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: "AdminReviews",
    created() {
        this.$store.dispatch('reviews/indexReviews')
    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

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

    &__actions {
        display: flex;
        justify-content: space-between;
        @media (max-width: $mobile) {
            flex-direction: column;
            gap: 15px;
        }
    }

    &__btn-status {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        font-family: Consolas, monospace;
        text-transform: uppercase;
        color: #393939;
        padding: 15px 30px;
        background: #66e766;
        text-align: center;
        white-space: nowrap;
        transition: all .3s ease 0s;

        &.seen {
            background: #ffcd71;
        }
    }

    &__btn-del {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        font-family: Consolas, monospace;
        text-transform: uppercase;
        color: #393939;
        padding: 15px 30px;
        background: #ff7171;
        text-align: center;

        transition: all .3s ease 0s;
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


</style>
