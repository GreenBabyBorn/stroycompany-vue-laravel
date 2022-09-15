const state = {
    notifications: [],
    delayDelete: 3500
}

const mutations = {
    setNotification(state, notification) {
        state.notifications.push(notification)

    },
    deleteNotification(state, notification) {
        if(!notification){
            state.notifications.pop()
            return
        }
        state.notifications = state.notifications.filter((el) => {
            return el !== notification

        })
    },
}

const actions = {
    addNotification({state, commit}, notification) {
        commit('setNotification', notification)
        setTimeout(function () {
            commit('deleteNotification')
        }, state.delayDelete);
    },


}

const getters = {
    getAllNotifications(state) {
        return state.notifications
    },

}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
