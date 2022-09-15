import {createRouter, createWebHistory} from 'vue-router';
import store from "../store";
import Home from "../views/pages/Home";
import About from '../views/pages/About'
import Contacts from "../views/pages/Contacts";
import Projects from "../views/pages/Projects"
import Services from "../views/pages/Services";
import Prices from "../views/pages/Prices";
import Login from "../views/pages/Auth/Login";
import Register from "../views/pages/Auth/Register";
import Dashboard from "../views/pages/Admin/Dashboard";
import NotFound from "../views/pages/NotFound";
import Project from "../views/pages/Project";
import AdminProjects from "../views/pages/Admin/AdminProjects";
import Reviews from "../views/pages/Reviews";
import AdminReviews from "../views/pages/Admin/AdminReviews";

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            auth: false,
            title: "СтройКом | Главная",
        }
    },
    {
        path: "/:catchAll(.*)",
        name: 'NotFound',
        component: NotFound,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            auth: false,
            title: "СтройКом | Упс...",
        }
    },
    {
        path: "/projects",
        name: 'Projects',
        component: Projects,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            title: "СтройКом | Проекты",
            auth: false,
        },
        beforeEnter: (to, from) => {

            store.state.projects.allProjects = {};
            // store.dispatch('projects/showProject', to.params.id)
            // store.state.projects.oneProject = {};
        },
    },
    {
        path: "/projects/:id",
        name: 'Project',
        component: Project,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            auth: false,

        },
        beforeEnter: (to, from) => {

            store.state.projects.oneProject = {};
            store.dispatch('projects/showProject', to.params.id)
            // store.state.projects.oneProject = {};
        },
    },
    {
        path: "/about",
        name: 'About',
        component: About,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            auth: false,
            title: "СтройКом | О нас",
        }
    },
    {
        path: "/services",
        name: 'Services',
        component: Services,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            title: "СтройКом | Услуги",
            auth: false,
        }
    },
    {
        path: "/prices",
        name: 'Prices',
        component: Prices,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            auth: false,
            title: "СтройКом | Цены",
        }
    },
    {
        path: "/contacts",
        name: 'Contacts',
        component: Contacts,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            auth: false,
            title: "СтройКом | Контакты",
        }
    },
    {
        path: "/admin/login",
        name: 'Login',
        component: Login,
        meta: {
            header: null,
            footer: null,
            auth: false,
            title: "СтройКом | Авторизация",
        }
    },
    {
        path: "/admin/register",
        name: 'Register',
        component: Register,
        meta: {
            header: null,
            footer: null,
            auth: false,
            title: "СтройКом | Регистрация",
        }
    },
    {
        path: "/admin/dashboard",
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            header: 'AdminHeader',
            footer: 'TheFooter',
            auth: true,
            title: "СтройКом | Панель управления",
        },

    },
    {
        path: "/admin/projects",
        name: 'AdminProjects',
        component: AdminProjects,
        meta: {
            header: 'AdminHeader',
            footer: 'TheFooter',
            auth: true,
            title: "СтройКом | Управление проектами",
        },

    },
    {
        path: "/reviews",
        name: 'Reviews',
        component: Reviews,
        meta: {
            header: 'TheHeader',
            footer: 'TheFooter',
            title: "СтройКом | Отзывы",
        },
    },
    {
        path: "/admin/reviews",
        name: 'AdminReviews',
        component: AdminReviews,
        meta: {
            header: 'AdminHeader',
            footer: 'TheFooter',
            auth: true,
            title: "СтройКом | Управление отзывами",
        },

    },

];

const router = createRouter({
    routes: routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    },

});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'СтройКом'
    const token = localStorage.getItem('x-token')
    if (!token) {
        if (to.meta.auth) {
            return next({
                name: 'Login'
            })
        }
    } else {
        if (to.name === 'Login' || to.name === 'Register') {
            return next({
                name: 'Dashboard'
            })
        }
    }
    next()


})


export default router
