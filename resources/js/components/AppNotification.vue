<template>
    <div class="notification">
        <div class="notification__wrapper">
            <TransitionGroup name="list" tag="ul">
                <div v-for="notification in $store.getters['notifications/getAllNotifications']"
                     :key="notification.name" class="notification__item success"
                     :class="{ success: notification.status === 'Success', error: notification.status === 'Error' }">
                    <span class="notification__name">{{ notification.name }}</span>
                    <p class="notification__description">{{ notification.description }}</p>
                    <!--                {{$store.getters['notifications/getAllNotifications'].indexOf(notification)}}-->
                    <button @click="$store.commit('notifications/deleteNotification', notification)"
                            class="notification__close"></button>
                </div>
            </TransitionGroup>

        </div>

    </div>
</template>

<script>
export default {
    name: "AppNotification",
    data() {
        return {
            notification: {
                name: '',
                description: '',
                status: 'Success'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.notification {
    position: fixed;
    z-index: 50;
    bottom: 0;
    right: 0;


    &__wrapper {
        display: flex;
        flex-direction: column;
        //gap: 50px;
        padding: 20px;
    }

    &__item {

        display: grid;
        grid-template-areas: 'name close'
        'description close';
        gap: 10px;
        padding: 15px;
        max-width: 320px;
        margin-bottom: 20px;

        &.success {
            background: #66e766;
        }

        &.error {
            background: #e76666;
        }
    }

    &__name {
        grid-area: name;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        color: #393939;
    }

    &__close {
        grid-area: close;
        width: 20px;
        height: 20px;
        position: relative;

        &::before, &::after {
            content: "";
            height: 2px;
            border-radius: 5px;
            background-color: #000;
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

    &__description {
        grid-area: description;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #393939;
    }
}
</style>
