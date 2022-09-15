<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <div class="footer__info">
                    <router-link to="/" class="footer__logo logo">
                        <img src="/img/logo.svg" alt="Логотип">
                        СтройКом
                    </router-link>
                    <p class="footer__desc">
                        Инженерные изыскания в строительстве
                    </p>
                    <a href="tel:79999999999" class="footer__phone">


                        <img src="/img/phone-call.svg" alt="Абстрактное изображение">

                        <span>+7 (4912) 770-359</span>
                    </a>
                </div>
                <div class="footer__menu">
                    <nav class="footer__body">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <router-link class="footer__link" to="/projects">Проекты</router-link>
                            </li>
                            <li class="footer__item">
                                <router-link class="footer__link" to="/about">О нас</router-link>
                            </li>
<!--                            <li class="footer__item">-->
<!--                                <router-link class="footer__link" to="/services">Услуги</router-link>-->
<!--                            </li>-->
                            <li class="footer__item">
                                <router-link class="footer__link" to="/prices">Цены</router-link>
                            </li>

                        </ul>
                        <ul class="footer__list">

                            <li class="footer__item">
                                <router-link class="footer__link" to="/reviews">Отзывы</router-link>
                            </li>
                            <li class="footer__item">
                                <router-link class="footer__link" to="/contacts">Контакты</router-link>
                            </li>

                        </ul>

                    </nav>
                </div>
                <div class="footer__social social">
                    <ul class="social__list">
                        <li class="social__item"><a href="https://facebook.com" class="social__link"><img
                            src="/img/social/facebook.svg" alt="Facebook"></a></li>
                        <li class="social__item"><a href="https://vk.com/kisovetar" class="social__link"><img
                            src="/img/social/vk.svg" alt="VK"></a></li>
                        <li class="social__item"><a href="https://instagram.com" class="social__link"><img
                            src="/img/social/instagram.svg" alt="Instagram"></a></li>
                    </ul>
                </div>
            </div>

            <div class="footer__bottom">
                <p class="footer__copyright">СтройКом. Все права защищены 2022 ©. Инженерные изыскания с 1999 года.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.footer {
    @include adaptiveValue("padding-top", 160, 60);
    &__container {

    }

    &__top {
        border-bottom: #E5E5E5 1px solid;
        border-top: #E5E5E5 1px solid;
        display: flex;
        padding: rem(60) 0;
        justify-content: space-between;
        @media (max-width: $tablet) {
            flex-direction: column;
            gap: 32px;
            padding-bottom: 0;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        flex: 0 0 210px;
        gap: rem(15);
        @media (max-width: $tablet) {
            order: 1;
            flex: 0 0 auto;
            align-items: center;
        }
    }

    &__logo {
        display: flex;
        align-items: center;
        gap: rem(10);

        img {
            height: 48px;
        }

        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;

    }

    &__desc {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        font-family: Consolas, monospace;
        @media (max-width: $tablet) {
            text-align: center;
        }
    }

    &__phone {
        font-family: Consolas, monospace;
        font-size: 16px;

        img {
            padding-right: 20px;
        }
    }

    &__menu {
        @media (max-width: $tablet) {
            order: 3;
        }
    }

    &__body {
        display: flex;
        gap: rem(120);

        @media (max-width: $tablet) {
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #E5E5E5;
            border-top: 1px solid #E5E5E5;
            padding: 30px 0;
        }
        @media (max-width: $mobile) {
            flex-direction: column;
            gap: 20px;
        }

    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: rem(20);
        position: relative;
        @media (max-width: $mobile) {
            align-items: center;
        }
        @media (min-width: $mobile) {

            &:not(:last-child)::after {
                content: '';
                position: absolute;
                top: 0;
                right: -60px;
                height: 100%;
                width: 1px;
                background: #E5E5E5;
            }
        }
    }

    &__item {
    }

    &__link {
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        &:hover{
            color: #CDA177;
        }
        transition: all .3s ease 0s;
    }

    &__social {
        & img:hover{
            transform: rotate(-45deg);
        }
        & img{
            transition: all .3s ease 0s;
        }

        @media (max-width: $tablet) {
            order: 2;
            display: flex;
            justify-content: center;
        }
    }

    &__bottom {
        padding: rem(30) 0;
        text-align: center;
    }

    &__copyright {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        /* or 22px */

        text-align: center;

        /* Dark Gray */

        color: #393939;
    }
}

.logo {
}

.social {
    &__list {
        display: flex;
        gap: rem(20);
    }

    &__item {
    }

    &__link {
    }
}

</style>
