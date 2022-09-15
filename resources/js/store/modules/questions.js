import axios from '../../../axios/axios-instance'
import store from "../index";

const state = {
    allQuestions: [],

    sortStatus: {
        id: true,
        seen: false,
        created_at: false,
        name: false
    }
}

const mutations = {
    setQuestions(state, questions) {
        state.allQuestions = questions;
    },
    seenQuestion(state, {questionId, seen}) {
        state.allQuestions.find(question => question.id === questionId).seen = seen

    },
    deleteQuestion(state, questionId) {
        state.allQuestions = state.allQuestions.filter((el) => {
            return el.id !== questionId
        })
    },
    // Сортировка на клиенте
    // sortQuestions(state, name ){
    //
    //     state.sortStatus[name] = !state.sortStatus[name]
    //     if (state.sortStatus[name]) {
    //         state.allQuestions.sort((a, b) => {
    //             return b[name] - a[name]
    //         })
    //     }
    //     else{state.allQuestions.sort((a, b) => {
    //         return a[name] - b[name]
    //     })}
    //
    // },
}

const actions = {
    indexQuestions({commit}) {
        axios.get('/api/questions')
            .then(response => {
                commit('setQuestions', response.data);
                // console.log(response);
            }).catch((error) => {
            console.log(error.response)
        })
    },

    storeQuestion({}, question) {
        axios.post('/api/questions', {
            name: question.name,
            phone: question.phone,
            text: question.text,
        })
            .then(response => {
                if (response.status === 201) {
                    store.dispatch('notifications/addNotification', {
                        name: 'Спасибо!',
                        description: 'В ближайшее время мы рассмотрим вашу заявку\n' +
                            'и свяжемся с вами, чтобы обсудить все необходимые вопросы. ',
                        status: 'Success'
                    })
                }
                // console.log(response);
            }).catch((error) => {
            console.log(error.response)
        })
    },
    destroyQuestion({commit}, questionId) {
        commit('deleteQuestion', questionId);
        axios.delete(`/api/questions/${questionId}`)
            .then(response => {
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Запись c ID ${questionId} удалена.`,
                    status: 'Success'
                }).catch((error) => {
                    console.log(error.response)
                })
            })
    },
    updateQuestion({commit}, {questionId, seen}) {
        commit('seenQuestion', {questionId, seen})
        axios.patch(`/api/questions/${questionId}`, {seen: seen})
            .then(response => {
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: 'Статус вопроса с ID ' + questionId + ' изменен на ' + (seen ? '\"Обработано\"' : '\"Не обработано\"'),
                    status: 'Success'
                })
                    .catch((error) => {
                        console.log(error.response)
                    })

            })
    },
    sortQuestions({commit, state}, name) {
        state.sortStatus[name] = !(state.sortStatus[name])
        axios.get('/api/questions', {
            params: {
                orderBy: state.sortStatus[name] ? 'DESC' : 'ASC',
                sortBy: name
            }
        })
            .then(response => {
                commit('setQuestions', response.data);
                console.log(response);
            })
    }

}


const getters = {
    getAllQuestions(state) {
        return state.allQuestions
    },
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
