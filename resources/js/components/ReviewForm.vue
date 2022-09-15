<template>
    <form @submit.prevent="sendReview" class="review__form" action="#">
        <label class="review__label ">ФИО<input
            :class="{ invalid: this.v$.review.author.$error, success: this.v$.review.author.$dirty && !this.v$.review.author.$error  }"
            @blur="v$.review.author.$touch"
            v-model.trim="review.author"
            class="review__input form__input"
            type="text"
            name="author" placeholder="Введите ФИО">
            <span class="invalid-message" v-for="error of v$.review.author.$errors"
                  :key="error.$uid">{{ error.$message }}</span>
            <!--                                                                <span class="invalid-message" v-if="this.v$.question.name.$error && this.v$.question.name.required.$invalid">Это поле обязательное</span>-->
        </label>

        <label class="review__label">Email
            <input
                :class="{ invalid: this.v$.review.email.$error, success: this.v$.review.email.$dirty && !this.v$.review.email.$error }"
                @blur="v$.review.email.$touch"
                v-model.trim="review.email"
                class="review__input form__input"
                name="email"
                placeholder="Введите Email">
            <span class="invalid-message" v-for="error of v$.review.email.$errors"
                  :key="error.$uid">{{ error.$message }}</span>
            <!--                                <span class="invalid-message" v-if="this.v$.question.phone.$error && this.v$.question.phone.required.$invalid">Это поле обязательное</span>-->
            <!--                                <span class="invalid-message" v-if="this.v$.question.phone.$error && this.v$.question.phone.maxLength.$invalid">Максимально 12 символов</span>-->
        </label>
        <label class="review__label">Текст отзыва<textarea
            :class="{ invalid: this.v$.review.text.$error, success: this.v$.review.text.$dirty && !this.v$.review.text.$error }"
            @blur="v$.review.text.$touch"
            v-model.trim="review.text"
            class="review__input form__input" name="text"
            placeholder="Напишите свой отзыв"></textarea>
            <span class="invalid-message" v-for="error of v$.review.text.$errors"
                  :key="error.$uid">{{ error.$message }}</span>
        </label>
        <button :class="{ disabled: v$.review.$errors.length }"
                class="review__btn form__btn" type="submit">Отправить
        </button>
    </form>
</template>

<script>

import {helpers, required, email} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
    name: "ReviewForm",

    validations() {
        return {
            review: {
                author: {required: helpers.withMessage('Это поле обязательно!', required)},
                email: {
                    required: helpers.withMessage('Это поле обязательно!', required),
                    email: helpers.withMessage('Недействительный Email', email)
                },
                text: {required: helpers.withMessage('Это поле обязательно!', required)}
            }
        }
    },

    data() {
        return {
            v$: useVuelidate(),
            review: {
                author: '',
                email: '',
                text: ''
            },


        }
    },
    methods: {

        async sendReview() {
            const isFormCorrect = await this.v$.review.$validate()

            if (!isFormCorrect) {
                v$.review.$touch()
                return
            }
            this.$store.dispatch('reviews/storeReview', this.review)


        }
    },

}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.review {
    &__container {
    }

    &__title {
    }

    &__bottom {
    }

    &__item {
    }

    &__right {
        display: flex;
        gap: 61px;
        @media (max-width: $tablet) {
            flex-direction: column-reverse;
        }
    }

    &__form {
        flex: 0 0 360px;
    }

    &__label {
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        margin-bottom: 20px;
        color: #1F1F1F;

        textarea {
            resize: none;
        }
    }

    .invalid-message {
        margin-top: 5px;
        color: red;
    }

    &__input {
        transition: all .3s ease 0s;
        border-bottom: solid 1px rgba(10, 9, 13, 0.5);
        padding: 10px 2px;

        &.invalid {
            //box-shadow: 0 1px red;
            border-bottom: solid 2px red;
        }

        &.success {
            //box-shadow: 0 1px green;
            border-bottom: solid 2px green;
        }

        &:focus {
            //border-bottom: double 1px rgba(10, 9, 13, 0.5);
            //border-bottom: solid 1px black;


            //box-shadow: 10px 5px #393939;
        }

    }

    &__btn {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        font-family: Consolas, monospace;
        text-align: center;
        text-transform: uppercase;
        color: #393939;
        background: #DFD1A7;
        padding: 15px 30px;
        transition: all .3s ease 0s;

        //&:focus {
        //    box-shadow: 10px 5px #393939;
        //}
        &:hover {
            background: #A7C186 !important;
        }

        &.disabled {
            cursor: not-allowed;
            pointer-events: none;
            color: #c0c0c0;
            //background-color: #ffffff;

        }

        @media (max-width: $mobile) {
            width: 100%;
        }
    }

    &__info {
    }
}
</style>
