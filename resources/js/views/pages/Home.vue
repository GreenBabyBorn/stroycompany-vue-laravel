<template>
    <section class="welcome">
        <div class="welcome__background">
            <img class="welcome__img" src="/img/welcome.png">
            <div class="welcome__container">
                <div class="welcome__content">
                    <div class="welcome__left">
                        <h1 class="welcome__title">СТРОЙКОМ. Нам доверяют. с 1988 года.</h1>
                        <p class="welcome__desc">С равным успехом мы работаем на участках строительства технически
                            сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную
                            экспертизу.</p>
                        <div class="welcome__buttons">
                            <TheButtonLink color="#A7C186" class="welcome__button" urlTo="/services">Посмотреть услуги
                            </TheButtonLink>
                            <TheButtonLink color="#DFD1A7" class="welcome__button" urlTo="/projects">Наши проекты
                            </TheButtonLink>
                        </div>
                    </div>
                    <div class="welcome__right">
                        <p class="welcome__caption">Оказание полного спектра услуг в области инженерных изысканий</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section class="surveys layout">
        <div class="surveys__container layout__container">
            <div class="surveys__top layout__top">
                <h2 class="surveys__title title">Инженерные изыскания
                    для строительства</h2>
            </div>
            <div class="surveys__bottom layout__bottom">
                <div class="layout__item">
                    <div class="layout__left">
                        <h3 class="surveys__sub-title sub-title">Основа для предпроектной документации</h3>
                    </div>
                    <div class="layout__right">
                        <div class="surveys__text text">

                            <p>Инженерные изыскания – это неотъемлемая часть проектной деятельности, обеспечивающая
                                всестороннее изучение природных и техногенных условий местности планируемого
                                строительства.</p>
                            <p>Проведение инженерных работ позволяет получить объем необходимых данных для
                                аргументирования технической возможности и экономической целесообразности проектирования
                                и застройки на конкретной территории. Информировать о возможных рисках и изменениях
                                геологической ситуации и окружающей среды, связанных со строительством и эксплуатацией
                                объекта, разработать мероприятия по охране и защите природы и населения от влияния
                                техногенных факторов.</p>
                            <p>Компания НПО «НОЭКС» гарантирует качественное проведение инженерных изысканий в Москве и
                                Подмосковье и других регионах</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="more">
        <div class="more__container">
            <div class="more__item">
                <h2 class="more__title title">О нас</h2>
                <p class="more__text text">Мы предпочитаем работать с Вами, а не для Вас. Узнайте о наших преимуществах
                    и этапах работы</p>
                <router-link class="more__link" to="/about">Подробнее</router-link>
            </div>
            <div class="more__item">
                <h2 class="more__title title">Услуги</h2>
                <p class="more__text text">Мы предлагаем полный спектр услуг в области инженерных изысканий. Узнайте
                    подробнее о каждой из услуг</p>
                <router-link class="more__link" to="/services">Подробнее</router-link>
            </div>
        </div>
    </section>

    <ProjectsSlider ></ProjectsSlider>

    <section class="order layout ">
        <div class="order__container layout__container">
            <div class="order__top layout__top">
                <h2 class="order__title title">ЗАКАЗАТЬ ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</h2>
            </div>
            <div class="order__bottom layout__bottom">
                <div class="layout__item">
                    <div class="layout__left">
                        <h3 class="order__sub-title sub-title">Описание заказа инженерных изысканий</h3>
                    </div>
                    <div class="layout__right">
                        <div class="order__text text">

                            <p>Заказать инженерные изыскания для строительства у нашей компании можно как в комплексе
                                исследований, так и отдельными видами работ.<br><br> Проведение изысканий под
                                строительство
                                полным циклом значительно снизит стоимость инженерных изысканий и сократит сроки. НПО
                                «НОЭКС» отвечает за качество исследований и берет на себя ответственность за проделанный
                                труд.<br><br>
                                Подписав договор, застройщик застрахован от непредвиденных последствий. К услугам
                                заказчика неординарный интеллект и слаженные действия профессиональной команды,
                                укомплектованный парк буровой техники, оснащенная лаборатория и фонд архивных
                                документов.<br><br> Стоимость инженерных изысканий в Москве и Подмосковье рассчитывается
                                индивидуально, в зависимости от объемов технического задания и срочности выполнения,
                                удаленности участка, сложности рельефа и геологической ситуации.<br><br> Предлагаем
                                заказать
                                изыскания для строительства в нашем профессиональном исполнении, как взаимовыгодное
                                сотрудничество для достижения общей цели.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <TheContactForm></TheContactForm>


</template>

<script>
import TheButtonLink from "../../components/UI/TheButtonLink";
import TheContactForm from "../../components/TheContactForm";
import ProjectsSlider from "../../components/ProjectsSlider";

export default {
    name: "Home",
    components: {
        TheButtonLink,
        TheContactForm,
        ProjectsSlider
    },
    created(){
        document.title = "СтройКом | Главная"
    }

}
</script>

<style scoped lang="scss">
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.welcome {
    &__background {
        min-height: calc(100vh - 130px);
        @media (max-width: $tablet) {
            min-height: calc(100vh - 71px);
        }
        //min-height: calc(100vh - (71px + 130 * (100vw / 1200)));
        //@include adaptiveValue("min-height", calc(100vh - 130), calc(100vh - 91));
        display: flex;
        position: relative;
    }

    &__img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    &__container {
        @include adaptiveValue("padding-top", 138, 40);

    }

    &__content {
        display: flex;
        @include adaptiveValue("gap", 60, 20);


        @media (max-width: $tablet) {
            display: flex;
            flex-direction: column;
        }
    }

    &__left {
        flex: 0 0 58%;
    }

    &__title {
        @include adaptiveValue("font-size", 48, 32);
        font-style: normal;
        font-weight: 700;

        line-height: 120%;
        text-transform: uppercase;
        color: #F2F2F2;
    }

    &__desc {
        font-style: normal;
        font-weight: 700;
        @include adaptiveValue("font-size", 24, 18);

        line-height: 140%;
        padding-top: rem(30);
        color: #BBBCBC;
        font-family: Consolas, monospace;
    }

    &__buttons {
        display: flex;
        gap: 10px;
        @media (max-width: $tablet) {
            flex-direction: column;
        }
        @include adaptiveValue("padding-top", 60, 30);

    }

    &__button {
        @media (max-width: $tablet) {
            width: 100%;
        }
    }

    &__right {
        align-self: flex-end;
    }

    &__caption {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 140%;

        font-family: Consolas, monospace;


        color: #CDA177;
    }
}

//-----------------------------------------------------------------------

.surveys {
    &__container {

    }

    &__top {
    }

    &__title {

    }

    &__bottom {

    }

    &__sub-title {

    }

    &__text {
        display: flex;
        gap: 30px;
        flex-direction: column;

        p {

        }
    }
}

//-----------------------------------------------------------------------


//-----------------------
.more {
    &__container {
        @include adaptiveValue("padding-top", 160, 60);
        display: flex;
        @media (max-width: $tablet) {
            flex-direction: column;
        }
        @include adaptiveValue("gap", 60, 16);
    }

    &__item {
        background: #F8F8F8;
        padding: 30px 60px;
        @media (max-width: $tablet) {
            padding: 16px 16px;
        }

        border: 1px solid #F2F2F2;
    }

    &__title {

        @include adaptiveValue("padding-bottom", 32, 24);
    }

    &__text {
        padding-bottom: 20px;
    }

    &__link {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline !important;
        font-family: Consolas, monospace;

        text-transform: uppercase;
        color: #CDA177;
    }
}

//--------------------




</style>
