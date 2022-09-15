<template>
    <section class="contact page-layout">
        <div class="contact__container page-layout__container">
            <div class="contact__top page-layout__top">
                <h1 class="contact__title title">Контакты</h1>
                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
                </router-link>
            </div>
            <div class="contact__bottom page-layout__bottom">
                <div class="contact__item item-contact">
                    <div class="item-contact__right">
                        <h2 class="item-contact__title">По вопросам новых проектов</h2>
                    </div>
                    <div class="item-contact__left">
                        <a href="mailto:stroycom@example.com" class="contact__mail"><img src="/img/Mail.svg"
                                                                                       alt="Телефон">stroycom@example.com</a>
                    </div>
                </div>
                <div class="contact__item item-contact">
                    <div class="item-contact__right">
                        <h2 class="item-contact__title">По вопросам сотрудничества</h2>
                    </div>
                    <div class="item-contact__left">
                        <a href="mailto:stroycom@example.com" class="contact__mail"><img src="/img/Mail.svg"
                                                                                       alt="Почта">stroycom@example.com</a>
                        <a href="tel:stroycom@example.com" class="contact__phone"><img src="/img/phone-call.svg"
                                                                                     alt="Телефон">+7 (495)
                            755-02-29</a>
                    </div>
                </div>
                <div class="contact__item item-contact">
                    <div class="item-contact__right">
                        <h2 class="item-contact__title">Телефон</h2>
                    </div>
                    <div class="item-contact__left">
                        <a href="tel:stroycom@example.com" class="contact__phone"><img src="/img/phone-call.svg"
                                                                                     alt="Телефон">+7 (495)
                            755-02-29</a>
                    </div>
                </div>
                <div class="contact__item item-contact">
                    <div class="item-contact__right">
                        <h2 class="item-contact__title">Адрес</h2>
                    </div>
                    <div class="item-contact__left">
                       <span class="contact__address"><img src="/img/Home.svg"
                                                         alt="Адрес">117418, г. Москва, ул. Новочеремушкинская, 52к2</span>
                    </div>
                </div>
                <div class="contact__item item-contact">
                    <div class="item-contact__right">
                        <h2 class="item-contact__title">Мы на карте </h2>
                    </div>
                    <div class="item-contact__left">
                        <img class="contact__map" src="/img/map.png" alt="Карта">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <TheContactForm></TheContactForm>


</template>

<script>
import TheContactForm from "../../components/TheContactForm";

export default {
    name: "Contacts",
    components: {
        TheContactForm
    },
    created() {
        document.title = "СтройКом | Контакты"
    }
}
</script>

<style scoped lang="scss">
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.contact {

    &__container {
    }

    &__top {

    }

    &__title {
    }

    &__bottom {
        padding-top: 0;
    }

    &__item {
    }

    &__mail {
        display: flex;
        align-items: center;
        gap: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        text-decoration-line: underline;
        color: #CDA177;
    }

    &__phone {
        display: flex;
        align-items: center;
        gap: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        text-decoration-line: underline ;
        color: #CDA177;
    }

    &__address {
        display: flex;
        align-items: center;
        gap: 20px;
        font-family: Consolas, monospace;
    }

    &__map {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}



.item-contact {
    &:not(:first-child)::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: #E5E5E5;
        top: 0;
        left: 0;
    }

    &:last-child::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: #E5E5E5;
        bottom: 0;
        left: 0;
    }

    position: relative;
    padding: 60px 0;
    display: flex;
    //border-bottom: #E5E5E5 1px solid;
    //border-top: #E5E5E5 1px solid;
    align-items: center;
    @media (max-width: $tablet) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    &__right {
        flex: 0 0 50%;

    }

    &__title {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        color: #393939;
    }

    &__left {
        flex: 0 0 50%;
        gap: 20px;
        display: flex;
        flex-direction: column;
    }
}
</style>
