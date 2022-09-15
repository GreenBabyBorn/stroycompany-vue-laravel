<template>
    <section class="register">
        <div class="register__container">
            <h1 class="register__title title">
                Регистрация

            </h1>

            <form @submit.prevent="register" class="register__form form">
                <label class="register__label form__label">Имя<input v-model.trim="user.name"
                                                                     :class="{ invalid: this.v$.user.name.$error, success: this.v$.user.name.$dirty && !this.v$.user.name.$error }"
                                                                     @blur="v$.user.name.$touch"
                                                                     class="register__input form__input"
                                                                     type="text"
                                                                     name="name"
                                                                     placeholder="Введите имя">
                    <span class="invalid-message" v-for="error of v$.user.name.$errors"
                          :key="error.$uid">{{ error.$message }}</span>
                    <!--                    <span class="invalid-message" v-if="this.v$.user.name.$error && this.v$.user.name.required.$invalid">Это поле обязательное</span>-->
                </label>
                <label class="register__label form__label">Номер телефона<input
                    :class="{ invalid: this.v$.user.phone.$error, success: this.v$.user.phone.$dirty && !this.v$.user.phone.$error }"
                    @blur="v$.user.phone.$touch"

                    v-model="user.phone"
                    ref="el"
                    type="tel"


                    class="register__input form__input"
                    name="phone"
                    placeholder="+7 (---) --- -- --">
                    <span class="invalid-message" v-for="error of v$.user.phone.$errors"
                          :key="error.$uid">{{ error.$message }}</span>
                    <!--                    <span class="invalid-message" v-if="this.v$.user.phone.$error && this.v$.user.phone.required.$invalid">Это поле обязательное</span>-->
                    <!--                    <span class="invalid-message" v-if="this.v$.user.phone.$error && this.v$.user.phone.maxLength.$invalid">Максимально 12 символов</span>-->
                </label>
                <label class="register__label form__label">Электронная почта<input v-model.trim="user.email"
                                                                                   :class="{ invalid: this.v$.user.email.$error, success: this.v$.user.email.$dirty && !this.v$.user.email.$error }"
                                                                                   @blur="v$.user.email.$touch"

                                                                                   class="register__input form__input"
                                                                                   type="email" name="email"
                                                                                   placeholder="example@mail.com">
                    <span class="invalid-message" v-for="error of v$.user.email.$errors"
                          :key="error.$uid">{{ error.$message }}</span>
                    <!--                    <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.required.$invalid">Это поле обязательное</span>-->
                    <!--                    <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.email.$invalid">Некорректный Email</span>-->
                </label>
                <label class="register__label form__label">Пароль<input v-model.trim="user.password"
                                                                        :class="{ invalid: this.v$.user.password.$error, success: this.v$.user.password.$dirty && !this.v$.user.password.$error }"
                                                                        @blur="v$.user.password.$touch"
                                                                        class="register__input form__input"
                                                                        type="password" name="password"
                                                                        placeholder="Введите пароль">
                    <span class="invalid-message" v-for="error of v$.user.password.$errors"
                          :key="error.$uid">{{ error.$message }}</span>
                    <!--                    <span class="invalid-message" v-if="this.v$.user.password.$error && this.v$.user.password.required.$invalid">Это поле обязательное</span>-->
                    <!--                    <span class="invalid-message" v-if="this.v$.user.password.$error && this.v$.user.password.minLength.$invalid">Меньше 6 символов</span>-->
                </label>
                <label class="register__label form__label">Подтверждение пароля<input
                    :class="{ invalid: this.v$.user.password_confirmation.$error, success: this.v$.user.password_confirmation.$dirty && !this.v$.user.password_confirmation.$error }"
                    @blur="v$.user.password_confirmation.$touch"
                    v-model.trim="user.password_confirmation"
                    class="register__input form__input"
                    type="password" name="password_confirmation"
                    placeholder="Введите пароль ещё раз">
                    <span class="invalid-message" v-for="error of v$.user.password_confirmation.$errors"
                          :key="error.$uid">{{ error.$message }}</span>
                    <!--                    <span class="invalid-message" v-if="this.v$.user.password_confirmation.$error && this.v$.user.password_confirmation.required.$invalid">Это поле обязательное</span>-->
                    <!--                    <span class="invalid-message" v-if="this.v$.user.password_confirmation.$error && this.v$.user.password_confirmation.sameAs.$invalid">Пароли не совпадают</span>-->
                </label>
                <button :class="{ disabled: v$.user.$errors.length }" class="register__btn form__btn" type="submit">
                    Зарегистрироваться
                </button>
            </form>
            <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
            </router-link>

        </div>
    </section>

</template>

<script>

import useVuelidate from '@vuelidate/core'
import {required, minLength, sameAs, email, helpers} from '@vuelidate/validators'


export default {
    name: "Register",

    data() {
        return {
            v$: useVuelidate(),
            user: {
                name: "",
                phone: '',
                email: "",
                password: "",
                password_confirmation: ""
            },

        }
    },

    validations() {
        return {
            user: {
                name: {required: helpers.withMessage('Это поле обязательно!', required)},
                phone: {required: helpers.withMessage('Это поле обязательно!', required)},
                email: {
                    required: helpers.withMessage('Это поле обязательно!', required),
                    email: helpers.withMessage('Недействительный Email', email)
                },
                password: {
                    required: helpers.withMessage('Это поле обязательно!', required),
                    minLength: helpers.withMessage('Минимум 6 символов', minLength(6))
                },
                password_confirmation: {
                    required: helpers.withMessage('Это поле обязательно!', required),
                    sameAs: helpers.withMessage('Пароли не совпадают', sameAs(this.user.password))
                }
            }
        }
    },
    methods: {

        async register() {
            const isFormCorrect = await this.v$.user.$validate()

            if (!isFormCorrect) {
                v$.user.$touch()
                return
            }

            this.$store.dispatch('auth/registerUser', this.user)

        }
    },
}
</script>

<style scoped lang="scss">
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;


.register {
    &__container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        gap: 20px;
        min-height: calc(100vh - 130px);
        @media (max-width: $tablet) {
            min-height: calc(100vh - 71px);
        }
    }

    &__form {

        width: 100%;
    }

    &__label {
    }

    &__input {
    }

    &__btn {
        width: 100%;

    }

}

.footer {
    padding-top: 0 !important;
}


</style>
