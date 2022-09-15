<template>
<div class="popup">
    <div class="popup__wrapper">
        <button class="popup__close"></button>
        <h3 class="popup__title">Заоголовок</h3>
        <p class="popup__text">Fraticinida castus nuptia est.</p>

    </div>
</div>
</template>

<script>

export default {
    name: "AppPopup",

}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    &__wrapper {
        background: white;
        padding: 20px;
        position: relative;
    }

    &__close {

        width: 24px;
        height: 24px;
        position: absolute;
        top: 20px;
        right: 20px;

        &::before, &::after {
            content: "";
            height: 2px;
            border-radius: 5px;
            background-color: #666666;
            left: 0;
            position: absolute;
            width: 100%;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    &__title {
        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
    }

    &__text {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
    }
}
</style>
