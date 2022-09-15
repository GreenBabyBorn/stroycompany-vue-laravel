import axios from 'axios'
import router from "../js/router/router";
import store from "../js/store";

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_URL_API,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
})

instance.interceptors.response.use({}, error => {
    if(error.response.status === 401 || error.response.status === 419) {
        const token = localStorage.getItem('x-token')
        if (token) {
            localStorage.removeItem('x-token')
        }
        store.dispatch('notifications/addNotification', {
            name: 'Ошибка!',
            description: 'Вы не авторизованы.',
            status: 'Error'
        })
        router.push('/admin/login')
    }
    if(error.response.status === 404 ){
            router.push('/NotFound')
        }
    return Promise.reject(error);
})



export default instance
