<template>

        <div class="preloader"></div>


</template>

<script>
export default {
    name: "AppPreloader"
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;



.preloader{
    display: inline-block;
    //padding: 20px;

    //width: 50px;
    //height: 50px;
    &:after{
        content: " ";
        display: flex;
        width: 45px;
        height: 45px;
        margin: 8px;

        border-radius: 50%;
        border: 6px solid #393939;
        border-color: #393939 transparent #393939 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
        transition: all 0.4s ease 0s;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
