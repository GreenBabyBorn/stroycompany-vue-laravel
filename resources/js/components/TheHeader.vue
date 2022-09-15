<template>
    <header class="header">
        <div class="header__container">

            <router-link @click="menuActive" to="/" class="header__logo logo">
                <img src="/img/logo.svg" alt="Логотип">
                СтройКом
            </router-link>
            <div :class="{'_menu-open': menuOpen,  }" class="header__menu menu">
                <nav class="menu__body">
                    <ul class="menu__list" @click="menuActive">
                        <!--                        <li class="menu__item">-->
                        <!--                            <router-link class="menu__link" to="/">Главная</router-link>-->
                        <!--                        </li>-->
                        <li class="menu__item">
                            <router-link class="menu__link" to="/projects">Проекты</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link class="menu__link" to="/about">О нас</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link class="menu__link" to="/reviews">Отзывы</router-link>
                        </li>
<!--                        <li class="menu__item">-->
<!--                            <router-link class="menu__link" to="/services">Услуги</router-link>-->
<!--                        </li>-->
                        <li class="menu__item">
                            <router-link class="menu__link" to="/prices">Цены</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link class="menu__link" to="/contacts">Контакты</router-link>
                        </li>
                    </ul>
                </nav>
                <button :class="{'_menu-open': menuOpen}" @click="menuActive" type="button" class="icon-menu">
                    <span></span></button>
            </div>
            <a href="tel:79999999999" class="header__phone">
                <picture>
                    <source srcset="/img/fi_phone.svg" media="(max-width: 991.98px)">
                    <img src="/img/phone-call.svg" alt="Абстрактное изображение">
                </picture>
                <span>+7 (4912) 770-359</span>
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            menuOpen: false,
        }

    },
    methods: {
        menuActive(event) {
            if (event.target.className.indexOf('logo') !== -1) {
                this.menuOpen = false
                return
            }
            this.menuOpen = !this.menuOpen
        },
    }
}
</script>

<style scoped lang="scss">
@use "./resources/sass/_variables.scss" as * ;
@use "./resources/sass/mixins.scss" as * ;


.header {
    position: fixed;

    top: 0;
    left: 0;
    width: 100%;
    background: white;
    //height: 100%;
    z-index: 50;
    //@include adaptiveValue("height", 130, 71);

    &__container {


        @include adaptiveValue("height", 130, 71);
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (min-width: $tablet) {
            gap: rem(20);
        }
    }

    &__logo {
        z-index: 50;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        display: flex;
        align-items: center;
        @include adaptiveValue("font-size", 37, 18);

        img {
            @include adaptiveValue("width", 37, 18);
            height: 100%;
            object-fit: cover;
            margin-right: rem(15);
        }

        @media (max-width: $tablet) {
            font-style: normal;
            font-weight: 500;
        }
    }

    &__menu {
        display: flex;
        flex: 0 1 auto;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: $tablet) {
            order: -1;
        }
    }

    &__phone {
        flex: 0 0 auto;
        z-index: 50;
        display: flex;
        gap: em(20);
        font-style: normal;
        font-weight: 700;

        span {
            @media (max-width: $tablet) {
                display: none;
            }
        }
    }
}


.menu {

    &__body {
        display: flex;
        @media (max-width: $tablet) {
            position: fixed;
            overflow: auto;
            @include adaptiveValue("padding-top", 130, 91);
            padding: 0 15px;
            background-color: white;
            z-index: 5;
            top: 0;
            width: 100%;
            height: 100%;
            left: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease 0s;
            ._menu-open & {

                transform: translateX(0%);
            }
            //&::before {
            //    position: fixed;
            //    content: "";
            //    width: 100%;
            //    top: 0;
            //    left: -100%;
            //
            //    @include adaptiveValue("height", 96, 66);
            //    background-color: rgba($color: #ffffff, $alpha: 1);
            //    //   backdrop-filter: blur(5px);
            //}
        }
    }

    &__list {
        display: flex;
        align-items: center;
        gap: rem(29);
        flex-wrap: wrap;
        @media (max-width: $tablet) {
            flex-direction: column;
            row-gap: rem(12);
            align-items: flex-start;
            width: 100%;
        }
    }

    &__item {
        @media (max-width: $tablet) {
            width: 100%;

        }
    }

    &__link {
        &:hover {
            color: #CDA177;
        }

        transition: all .3s ease 0s;
        font-size: rem(16);
        font-style: normal;
        font-weight: 700;

        &.router-link-active {
            color: #CDA177;
        }

        @media (max-width: $tablet) {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
            color: rgba(10, 9, 13, 0.5);
            width: 100%;
            display: flex;
            padding-bottom: 10px;
            border-bottom: 1px solid #E5E5E5;

            &.router-link-active {
                color: #CDA177;
                border-bottom: 1px solid #CDA177;
            }
        }
    }
}

.icon-menu {
    display: none;
    @media (max-width: $tablet) {
        display: flex;
        position: relative;

        //flex: 0 0 rem(24);
        width: rem(24);
        height: 18px;
        cursor: pointer;
        z-index: 50;
        span,
        &::before,
        &::after {
            content: "";
            transition: all 0.3s ease 0s;
            left: 0;
            position: absolute;
            width: 100%;
            height: 2px;
            border-radius: 5px;
            background-color: #000;
        }
        &::before {
            top: 0;
        }
        &::after {
            bottom: 0;
        }
        span {
            top: calc(50% - 1px);
        }
        &._menu-open {
            span,
            &::before,
            &::after {
                background-color: #D91E1E;
            }

            span {
                transform: scale(0);
            }

            &::before {
                transform: rotate(-45deg);
                top: calc(50% - 1px);
            }

            &::after {
                transform: rotate(45deg);
                bottom: calc(50% - 1px);
            }
        }
    }
}

</style>
