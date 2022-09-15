<template>
    <section class="login">
        <div class="login__container">
            <h1 class="login__title title">
                Авторизация
            </h1>
            <form @submit.prevent="login" class="login__form form">
                <!--                <label class="login__label form__label">Имя<input class="login__input form__input" type="text"-->
                <!--                                                                     name="name" placeholder="Введите имя"></label>-->
                <!--                <label class="login__label form__label">Номер телефона<input class="login__input form__input"-->
                <!--                                                                                type="tel" name="phone"-->
                <!--                                                                                placeholder="+7 (-&#45;&#45;) -&#45;&#45; &#45;&#45; &#45;&#45;"></label>-->
                <label class="login__label form__label">Электронная почта<input v-model="user.email"
                                                                                :class="{ invalid: this.v$.user.email.$error, success: this.v$.user.email.$dirty && !this.v$.user.email.$error }"
                                                                                @blur="v$.user.email.$touch"
                                                                                class="login__input form__input"
                                                                                type="email" name="email"
                                                                                placeholder="example@mail.com">
                    <span class="invalid-message"
                          v-if="this.v$.user.email.$error && this.v$.user.email.required.$invalid">Это поле обязательное</span>
                    <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.email.$invalid">Некорректный Email</span>
                </label>
                <label class="login__label form__label">Пароль<input v-model="user.password"
                                                                     :class="{ invalid: this.v$.user.password.$error, success: this.v$.user.password.$dirty && !this.v$.user.password.$error }"
                                                                     @blur="v$.user.password.$touch"
                                                                     class="login__input form__input"
                                                                     type="password" name="password"
                                                                     placeholder="Введите пароль">
                    <span class="invalid-message"
                          v-if="this.v$.user.password.$error && this.v$.user.password.required.$invalid">Это поле обязательное</span>
                    <span class="invalid-message"
                          v-if="this.v$.user.password.$error && this.v$.user.password.minLength.$invalid">Меньше 6 символов</span>
                </label>


                <!--                <label class="login__label form__label">Подтверждение пароля<input-->
                <!--                    class="login__input form__input"-->
                <!--                    type="password" name="password_confirmation"-->
                <!--                    placeholder="Введите пароль ещё раз"></label>-->
                <button :class="{ disabled: v$.user.$errors.length }" class="login__btn form__btn" type="submit">Войти
                </button>
            </form>
            <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
            </router-link>
        </div>
    </section>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, minLength, email} from '@vuelidate/validators'

export default {
    name: "Login",
    data() {
        return {
            v$: useVuelidate(),
            user: {
                email: '',
                password: ''
            }
        }
    },
    validations() {
        return {
            user: {
                email: {required, email},
                password: {required, minLength: minLength(6)},
            }
        }
    },
    methods: {
        login() {
            this.v$.user.$touch()
            if (!this.v$.user.$error) {
                this.$store.dispatch('auth/loginUser', this.user)
            }
        }
    },

}
</script>

<style scoped lang="scss">
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.login {
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

    &__title {
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

</style>
