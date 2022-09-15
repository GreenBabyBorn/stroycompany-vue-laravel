import axios from '../../../axios/axios-instance'
import store from "../index";

const state = {
    allReviews: [],
    approvedReviews: []
}

const mutations = {
    setReviews(state, reviews) {
        state.allReviews = reviews;
    },setApprovedReviews(state, reviews) {
        state.approvedReviews = reviews;
    },
    // seenQuestion(state, {questionId, seen}) {
    //     state.allQuestions.find(question => question.id === questionId).seen = seen
    //
    // },
    setStatusReview(state, reviewId){
        state.allReviews.find(review => review.id === reviewId).status = !state.allReviews.find(review => review.id === reviewId).status
    },
    deleteReview(state, reviewId) {
        state.allReviews = state.allReviews.filter((el) => {
            return el.id !== reviewId
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
    indexReviews({commit}) {
        axios.get('/api/reviews')
            .then(response => {
                commit('setReviews', response.data);
                // console.log(response);
            }).catch((error) => {
            console.log(error.response)
        })
    },
    indexApprovedReviews({commit}) {
        axios.get('/api/reviews/approved')
            .then(response => {
                commit('setApprovedReviews', response.data);
                // console.log(response);
            }).catch((error) => {
            console.log(error.response)
        })
    },

    storeReview({}, review) {
        axios.post('/api/reviews', {
            author: review.author,
            email: review.email,
            text: review.text,
        })
            .then(response => {
                if (response.status === 201) {
                    store.dispatch('notifications/addNotification', {
                        name: 'Спасибо за отзыв!',
                        description: 'Ваш отзыв отправлен, после проверки модератором, будет опубликован.',
                        status: 'Success'
                    })
                }
                // console.log(response);
            }).catch((error) => {
            console.log(error.response)
        })
    },
    updateReview({commit}, {reviewId, reviewStatus }) {

        axios.patch(`/api/reviews/${reviewId}`, {status: reviewStatus})
            .then(response => {
                console.log(reviewStatus)
                console.log(response)
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: reviewStatus ?  'Отзыв снят с публикации' : 'Отзыв опубликован' ,
                    status: 'Success'
                })
                    .catch((error) => {
                        console.log(error.response)
                    })

            })
        commit('setStatusReview', reviewId)
    },
    destroyReview({commit}, reviewId) {
        commit('deleteReview', reviewId);
        axios.delete(`/api/reviews/${reviewId}`)
            .then(response => {
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: `Отзыв c ID ${reviewId} удален.`,
                    status: 'Success'
                }).catch((error) => {
                    console.log(error.response)
                })
            })
    },

}


const getters = {
    getAllReviews(state) {
        return state.allReviews
    },
    getApprovedReviews(state) {
        return state.approvedReviews
    },
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
