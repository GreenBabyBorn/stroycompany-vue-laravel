import axios from '../../../axios/axios-instance'
import store from "../index";


const state = {
    allProjects: [],
    oneProject: {
    },
    loaded: false
}

const mutations = {
    setProjects(state, projects) {
        state.loaded = true
        state.allProjects = projects;
    },
    setProject(state, project) {
        state.loaded = true
        state.oneProject = project;

    },
}

const actions = {
    indexProjects({commit}) {
        axios.get('/api/projects')
            .then(response => {
                commit('setProjects', response.data);
                // console.log(response);
            })
    },
    showProject({state, commit}, id) {
        axios.get('/api/projects/' + id)
            .then(response => {

                commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },
    storeProject({state, commit, dispatch}, data) {
        axios.post('/api/projects', data)
            .then(response => {
                console.log(response);
                dispatch('indexProjects')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Проект добавлен!`,
                    status: 'Success'
                })
                // commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },

    updateProject({state, commit, dispatch}, { id, data}) {
        axios.patch('/api/projects/' + id , data)
            .then(response => {
                console.log(response);
                dispatch('indexProjects')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Проект с ID ${id} обновлен.`,
                    status: 'Success'
                })
                // commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },
    destroyProject({state, commit, dispatch}, id) {
        axios.delete('/api/projects/' + id )
            .then(response => {
                console.log(response);
                dispatch('indexProjects')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Проект с ID ${id} удален.`,
                    status: 'Success'
                })
                // commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },
    updateStage({state, commit, dispatch}, { id, data}) {
        axios.patch('/api/stages/' + id , data)
            .then(response => {
                console.log(response);
                dispatch('indexProjects')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Этап с ID ${id} обновлен.`,
                    status: 'Success'
                })
                // commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },
    destroyStage({state, commit, dispatch}, id) {
        axios.delete('/api/stages/' + id)
            .then(response => {
                console.log(response);
                dispatch('indexProjects')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Этап проекта удален.`,
                    status: 'Success'
                })
                // commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },

    storeStage({state, commit, dispatch}, {data , id}) {
        axios.post('/api/projects/' + id + '/stages', data)
            .then(response => {
                console.log(response);
                dispatch('indexProjects')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Этап добавлен!`,
                    status: 'Success'
                })
                // commit('setProject', response.data);
                // document.title = 'СтройКом | ' + response.data.name
            })


    },


}


const getters = {
    getAllProjects(state) {
        return state.allProjects
    },
    getOneProject(state) {
        return state.oneProject
    },

}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
