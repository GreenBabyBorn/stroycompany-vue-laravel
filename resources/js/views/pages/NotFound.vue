<template>
    <section class="notfound">
        <div class="notfound__container">
            <h1 class="notfound__title">404</h1>
            <p class="notfound__text">Упс.. Страница не найдена</p>
            <TheButtonLink class="notfound__btn" color="#DFD1A7" url-to="/">Перейти на главную</TheButtonLink>
        </div>
    </section>
</template>

<script>
import TheButtonLink from "../../components/UI/TheButtonLink";
export default {
    name: "404",
    components:{
        TheButtonLink
    },

}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;
.notfound {

    &__container {
        //min-height: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        background-image:  url("/img/bg-notfound.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        //gap: 20px;
        padding-top: 128px;
        //&:before{
        //    position: absolute;
        //    content: url("/img/bg-notfound.svg");
        //    width: 100%;
        //    height: 100%;
        //}
    }

    &__title {
        @include adaptiveValue("font-size", 288, 144);
        font-style: normal;
        font-weight: 700;
        //font-size: 288px;
        line-height: 120%;
        /* identical to box height, or 346px */

        text-transform: uppercase;

        /* Dark Gray */

        color: #393939;
    }

    &__text {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 120%;
        text-align: center;
        @include adaptiveValue("font-size", 36, 24);
        text-transform: uppercase;
        color: #393939;
    }
    &__btn{
        margin-top: 60px;
    }
}

</style>
