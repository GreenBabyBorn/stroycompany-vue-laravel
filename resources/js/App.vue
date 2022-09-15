<template>

    <div class="wrapper">


        <component :is="this.$route.meta.header"></component>
        <!--        <TheHeader v-if="isAdmin" ></TheHeader>-->
        <main class="page">
            <router-view>
            </router-view>
        </main>
        <component :is="this.$route.meta.footer"></component>
        <!--        <TheFooter v-if="isAdmin"></TheFooter>-->
        <AppNotification></AppNotification>

    </div>
</template>

<script>

import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import AdminHeader from "./components/Admin/AdminHeader";
import AppNotification from "./components/AppNotification";
import AppPopup from "./components/AppPopup";

export default {
    name: "App",
    components: {
        TheHeader,
        TheFooter,
        AdminHeader,
        AppNotification,
        AppPopup
    },

}
</script>

<style lang="scss">
//@use "./resources/sass/null.scss" as *;
@use "./resources/sass/app.scss" as *;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

</style>

