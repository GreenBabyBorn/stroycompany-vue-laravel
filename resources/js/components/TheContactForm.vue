<template>
    <section class="contact-send layout">
        <div class="contact-send__container layout__container">
            <div class="layout__top">
                <h2 class="contact-send__title title">Связаться с нами</h2>
            </div>
            <div class="contact-send__bottom layout__bottom">
                <div class="contact-send__item layout__item">
                    <div class="layout__left"></div>
                    <div class="contact-send__right layout__right">
                        <form @submit.prevent="sendQuestion" class="contact-send__form" action="#">
                            <label class="contact-send__label ">Имя<input :class="{ invalid: v$.question.name.$errors.length,
                            success: this.v$.question.name.$dirty && !this.v$.question.name.$error }"
                                                                          @blur="v$.question.name.$touch"
                                                                          v-model.trim="question.name"
                                                                          class="contact-send__input form__input"
                                                                          type="text"
                                                                          name="name" placeholder="Введите имя">
                                <span class="invalid-message" v-for="error of v$.question.name.$errors"
                                      :key="error.$uid">{{ error.$message }}</span>
                                <!--                                                                <span class="invalid-message" v-if="this.v$.question.name.$error && this.v$.question.name.required.$invalid">Это поле обязательное</span>-->
                            </label>

                            <label class="contact-send__label">Номер телефона
                                <imask-input


                                    :class="{ invalid: v$.question.phone.$errors.length, success: this.v$.question.phone.$dirty && !this.v$.question.phone.$error  }"
                                    @blur="v$.question.phone.$touch"
                                    :mask="'+7 (000) 000 00 00'"

                                    v-model="question.phone"
                                    @update="console.log('fsdf')"
                                    class="contact-send__input form__input"
                                    name="phone"
                                    placeholder="+7 (---) --- -- --"/>
                                <span class="invalid-message" v-for="error of v$.question.phone.$errors"
                                      :key="error.$uid">{{ error.$message }}</span>
                                <!--                                <span class="invalid-message" v-if="this.v$.question.phone.$error && this.v$.question.phone.required.$invalid">Это поле обязательное</span>-->
                                <!--                                <span class="invalid-message" v-if="this.v$.question.phone.$error && this.v$.question.phone.maxLength.$invalid">Максимально 12 символов</span>-->
                            </label>
                            <label class="contact-send__label">Текст сообщения (необязательно)<textarea
                                :class="{ invalid: v$.question.text.$errors.length, success: this.v$.question.text.$dirty && !this.v$.question.text.$error }"

                                @blur="v$.question.text.$touch"
                                v-model.trim="question.text"
                                class="contact-send__input form__input" name="text"
                                placeholder="Введите текст"></textarea></label>
                            <button :class="{ disabled: v$.question.$errors.length }"
                                    class="contact-send__btn form__btn" type="submit">Отправить
                            </button>
                        </form>
                        <div class="contact-send__info">
                            <p class="text">Напишите нам, если у Вас есть вопросы. Мы ответим Вам в самое ближайшее
                                время (в течении 1 часа). Также вы можете описать в сообщении суть вопроса, это поможет
                                нам более оперативно справиться с вашей проблемой</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, maxLength, helpers} from '@vuelidate/validators'
import {IMaskComponent} from 'vue-imask';


export default {
    name: "TheContactForm",

    components: {
        'imask-input': IMaskComponent
    },
    validations() {
        return {
            question: {
                name: {required: helpers.withMessage('Это поле обязательно!', required)},
                phone: {required: helpers.withMessage('Это поле обязательно!', required)},
                text: {}
            }
        }
    },

    data() {
        return {
            v$: useVuelidate(),
            question: {
                name: '',
                phone: '',
                text: ''
            },


        }
    },
    methods: {

        async sendQuestion() {
            const isFormCorrect = await this.v$.question.$validate()

            if (!isFormCorrect) {
                v$.question.$touch()
                return
            }
            this.$store.dispatch('questions/storeQuestion', this.question)


        }
    },


}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.contact-send {
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
