import Vuex from 'vuex'
import auth from "./modules/auth"
import questions from "./modules/questions";
import projects from "./modules/projects";
import notifications from "./modules/notifications";
import reviews from "./modules/reviews";


export default new Vuex.Store({
    modules: {
        auth,
        questions,
        projects,
        notifications,
        reviews,
    }
})
