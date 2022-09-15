<template>
    <router-link v-bind:style="{ background: color}"  :to="urlTo" class="button-link">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    name: "TheButtonLink",
    props: {
        urlTo: String,
        color: String
    },
    // data(){
    //     return {
    //         content: ''
    //     }
    // }
}
</script>

<style lang="scss" scoped>
@use "../../../sass/mixins" as * ;
@use "../../../sass/variables" as * ;

.button-link {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    font-family: Consolas, monospace;
    text-transform: uppercase;
    color: #393939;
    padding: 15px 30px;
    //background: #A7C186;
    text-align: center;
    display: inline-block;
    transition: all .3s ease 0s;
}

.button-link:hover {
    background: white !important;
    color: black;
}
</style>
