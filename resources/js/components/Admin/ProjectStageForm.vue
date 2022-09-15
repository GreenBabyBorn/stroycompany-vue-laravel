<template>
    <form @submit.prevent="storeStage" class="stage-form">
        <label class="stage-form__label form__label">Название этапа<input
            v-model.trim="stage.name"
            class="stage-form__input form__input"
            type="text" name="name"
            placeholder="Введите название проекта">
            <!--            <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.required.$invalid">Это поле обязательное</span>-->
            <!--            <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.email.$invalid">Некорректный Email</span>-->
        </label>
        <label class="stage-form__label form__label">Годы разработки этапа<input
            v-model.trim="stage.years"
            class="stage-form__input form__input"
            name="years"
            placeholder="Введите годы разработки проекта">
            <!--            <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.required.$invalid">Это поле обязательное</span>-->
            <!--            <span class="invalid-message" v-if="this.v$.user.email.$error && this.v$.user.email.email.$invalid">Некорректный Email</span>-->
        </label>
        <label class="stage-form__label form__label">Описание этапа<textarea
            v-model.trim="stage.description"
            class="stage-form__input form__input" name="description" placeholder="Введите описание проекта"></textarea>
        </label>
        <label class="stage-form__label form__label">Фотография этапа<input
            id="photo"
            ref="photo"
            v-on:change="handleFileUpload"
            class="stage-form__input form__input"  type="file" placeholder="Введите описание проекта">
        </label>
        <button class="stage-form__btn form__btn"  type="submit">Добавить этап</button>
    </form>
</template>

<script>
import store from "../../store";

export default {
    name: "ProjectStageForm",
    props:{
      projectId: {
          type: Number,
          required: true
      },
    },
    data(){
        return{
            stage: {
                name: '',
                years: '',
                description: '',
                photo: null,
            }
        }
    },
    methods:{
        handleFileUpload(){
            this.stage.photo = this.$refs.photo.files[0];

        },
        storeStage(){
            let formData = new FormData();
            formData.append('photo',this.stage.photo)
            formData.append('name',this.stage.name)
            formData.append('years',this.stage.years)
            formData.append('description',this.stage.description)

            store.dispatch('projects/storeStage', {data: formData, id: this.projectId})

        }
    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;




.stage-form {
    display: flex;
    flex-direction: column;


    padding: 20px;

    &__label {

    }

    &__input {

    }

    &__btn {

    }
}
</style>
