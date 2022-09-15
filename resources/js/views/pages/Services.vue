<template>
    <section class="services page-layout">
        <div class="services__container page-layout__container">
            <div class="services__top page-layout__top">
                <h1 class="services__title title">Услуги</h1>
                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
                </router-link>
            </div>
            <div class="services__bottom page-layout__bottom">

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Services",

}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;
</style>
