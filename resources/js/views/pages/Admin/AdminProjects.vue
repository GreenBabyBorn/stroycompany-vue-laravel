<template>
    <section class="projects-admin">
        <div class="projects-admin__container page-layout__container">
            <div class="projects-admin__top page-layout__top">
                <h2 class="projects-admin__title title">
                    Создание проекта
                </h2>
            </div>
            <div class=" page-layout__bottom layout__item">

                <div id="photo-preview" class="layout__left"></div>
                <div class="layout__right">
                    <ProjectForm class="projects-admin__form"></ProjectForm>
                </div>

            </div>
        </div>
    </section>
    <section class="projects-admin">
        <div class="projects-admin__container page-layout__container">
            <div class="projects-admin__top page-layout__top">
                <h2 class="questions__title title">
                    Все проекты и этапы
                </h2>
            </div>
            <div class="projects-admin__bottom page-layout__bottom">
                <transition-group name="list">
                    <div v-for="project in this.$store.getters['projects/getAllProjects']" :key="project.id"
                         class="projects-admin__project project">
                        <div class="project__info">
                            <div class="project__img">
                                <img v-bind:src="project.photo.path" alt="Картинка проекта">
                            </div>
                            <!--                            <span class="project__id">{{ project.id }} </span>-->
                            <div class="project__body">
                                <h3 class="project__name"><input class="project__input" v-model="project.name"
                                                                 @blur=" this.$store.dispatch('projects/updateProject', {id: project.id,data: {name: project.name}})">
                                </h3>
                                <span class="project__years"><input class="project__input" v-model="project.years"
                                                                    @blur=" this.$store.dispatch('projects/updateProject', {id: project.id,data: {years: project.years}})"></span>
                                <p class="project__description"><textarea class="project__input"
                                                                          v-model="project.description"
                                                                          @blur=" this.$store.dispatch('projects/updateProject', {id: project.id,data: {description: project.description}})"></textarea>
                                </p>
                            </div>
                            <button title="Удалить проект"
                                    @click="this.$store.dispatch('projects/destroyProject',  project.id)"
                                    class="project__delete delete-btn">
                            </button>
                        </div>

                        <div class="project__info-stages">
                            <transition-group name="list">
                                <div v-for="stage in project.stages" :key="project.id" class="project__stages">
                                    <div class="project__img">
                                        <img v-bind:src="stage.photo.path" alt="Картинка этапа'">
                                    </div>
                                    <div class="project__body-stage">
                                        <h3 class="project__name"><input class="project__input" v-model="stage.name"
                                                                         @blur=" this.$store.dispatch('projects/updateStage', {id: stage.id,data: {name: stage.name}})">
                                        </h3>
                                        <span class="project__years"><input class="project__input" v-model="stage.years"
                                                                            @blur=" this.$store.dispatch('projects/updateStage', {id: stage.id,data: {years: stage.years}})"></span>
                                        <p class="project__description"><textarea class="project__input"
                                                                                  v-model="stage.description"
                                                                                  @blur=" this.$store.dispatch('projects/updateStage', {id: stage.id,data: {description: stage.description}})"></textarea>
                                        </p>
                                    </div>


                                    <button title="Удалить этап"
                                            @click="this.$store.dispatch('projects/destroyStage',  stage.id)"
                                            class="project__delete delete-btn">
                                    </button>
                                </div>
                            </transition-group>
                            <ProjectStageForm :project-id="project.id"></ProjectStageForm>
                        </div>

                    </div>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>

import ProjectForm from "../../../components/Admin/ProjectForm";
import ProjectStageForm from "../../../components/Admin/ProjectStageForm";


export default {
    name: "AdminProjects",

    components: {
        ProjectForm,
        ProjectStageForm
    },
    created() {
        this.$store.dispatch('projects/indexProjects')


    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0);
}

.projects-admin {
    &__form {

    }

    &__container {
    }

    &__top {
    }

    &__bottom {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__project {
    }
}

.delete-btn {
    width: 20px;
    height: 20px;
    position: relative;
    @media (max-width: $tablet) {
        align-self: end;
    }

    &:hover {
        &::before, &::after {
            background-color: #ff3131;
        }

    }

    &::before, &::after {
        content: "";
        height: 2px;
        border-radius: 5px;
        background-color: #000;
        left: 0;
        position: absolute;
        width: 100%;
        transition: all .3s ease 0s;
    }


    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
}

.project {
    &__input {
        //display: inline-block;
        background: inherit;
        width: 100%;

    }

    display: flex;
    flex-direction: column;

    &__body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1 0 auto;
    }

    &__body-stage {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1 0 auto;

    }

    &__info {
        display: flex;
        //margin-bottom: 20px;
        //justify-content: space-between;
        gap: 20px;
        padding: 20px;
        //background: #DFD1A7;
        border: #A7C186 2px solid;
        @media (max-width: $tablet) {

            flex-direction: column-reverse;
        }
    }

    &__id {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
    }


    &__name, &__name input {
        font-weight: 600;
    }


    &__years {
    }

    &__description {
        & textarea {
            width: 100%;
            display: block;
            height: 100%;
            resize: vertical;
        }
    }

    &__img {
        flex: 0 0 200px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }

    &__stages {

        display: flex;

        gap: 30px;
        padding: 20px;
        justify-content: space-between;
        border-bottom: 1px solid #E5E5E5;
        @media (max-width: $tablet) {

            flex-direction: column-reverse;
        }
    }

    &__info-stages {
        border-left: 2px solid #DFD1A7;
        @include adaptiveValue("margin-left", 60, 20);

    }
}
</style>
