import axios from '../../../axios/axios-instance'
import router from "../../router/router";
import store from "../index";

const state = {
    errors: [],
}

const actions = {
    loginUser({commit}, user) {
        return new Promise((resolve) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login', {
                    email: user.email,
                    password: user.password
                })
                    .then(response => {
                        localStorage.setItem('x-token', response.config.headers['X-XSRF-TOKEN'])
                        router.push('/admin/dashboard')
                        store.dispatch('notifications/addNotification', {
                            name: 'Успешно!',
                            description: response.data.name + ', добро пожаловать.',
                            status: 'Success'
                        })
                        // console.log(response)
                    })
                    .catch((error) => {
                        store.dispatch('notifications/addNotification', {
                        name: 'Ошибка!',
                        description: 'Введены неверные данные.',
                        status: 'Error'
                    })

                })

            });
        });
    },
    registerUser({}, user) {
        return new Promise((resolve) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/register', {
                    name: user.name,
                    phone: user.phone,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                    .then(response => {
                        router.push('/admin/login')
                        store.dispatch('notifications/addNotification', {
                            name: 'Успешно!',
                            description: 'Вы зарегистрированы, необходимо авторизоваться.',
                            status: 'Success'
                        })

                    }).catch((error) => {
                    if (error.response.data.errors.email) {
                        store.dispatch('notifications/addNotification', {
                            name: 'Ошибка!',
                            description: 'Этот Email уже занят.',
                            status: 'Error'
                        })
                    }
                    if (error.response.data.errors.phone) {
                        store.dispatch('notifications/addNotification', {
                            name: 'Ошибка!',
                            description: 'Этот номер телефона уже занят.',
                            status: 'Error'
                        })
                    }
                    console.log(error.response)
                })

            });
        });
    },
    logout() {
        axios.post('/api/logout')
            .then(response => {
                localStorage.removeItem('x-token')
                router.push('/admin/login')
                store.dispatch('notifications/addNotification', {
                    name: 'Успешно!',
                    description: 'Вы вышли из системы.',
                    status: 'Success'
                })
                console.log(response)
            })
    }
}

const mutations = {
    setErrors(state, invalidCredentials) {
        state.errors = invalidCredentials
    },
}

const getters = {
    errors(state) {
        return state.errors
    },
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
