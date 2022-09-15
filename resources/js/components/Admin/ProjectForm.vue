<template>
    <!--     Нормальная реализация валидации  -->
    <form @submit.prevent="storeProject" class="project-form">
        <label class="project-form__label form__label">Название проекта<input
            @blur="v$.project.name.$touch"
            @input="v$.project.name.$touch"
            :class="{ invalid: v$.project.name.$error}"
            v-model.trim="project.name"
            class="project-form__input form__input"
            type="text" name="name"
            placeholder="Введите название проекта">
            <span class="invalid-message" v-for="error of v$.project.name.$errors"
                  :key="error.$uid">{{ error.$message }}</span>
        </label>
        <label class="project-form__label form__label">Годы разработки проекта<input
            @blur="v$.project.years.$touch"
            @input="v$.project.years.$touch"
            :class="{ invalid: v$.project.years.$error}"
            v-model.trim="project.years"
            class="project-form__input form__input"
            name="years"
            placeholder="Введите годы разработки проекта">
            <span class="invalid-message" v-for="error of v$.project.years.$errors"
                  :key="error.$uid">{{ error.$message }}</span>
        </label>
        <label class="project-form__label form__label">Описание проекта<textarea
            @blur="v$.project.description.$touch"
            @input="v$.project.description.$touch"
            :class="{ invalid: v$.project.description.$error}"
            v-model.trim="project.description"
            class="project-form__input form__input" name="description"
            placeholder="Введите описание проекта"></textarea>
            <span class="invalid-message" v-for="error of v$.project.description.$errors"
                  :key="error.$uid">{{ error.$message }}</span>
        </label>
        <label class="project-form__label form__label"><input


            accept=".png,.jpg,.jpeg,.webp"
            id="photo"
            ref="photo"
            v-on:change="handleFileUpload"
            class="project-form__input form__input" type="file">
            <button type="button" class="open-file" :class="{ invalid: v$.project.photo.$error}">Выбрать фотографию
            </button>
            <!--            <span class="invalid-message" v-for="error of v$.project.photo.$errors"-->
            <!--                  :key="error.$uid">{{ error.$message }}</span>-->
        </label>
        <button :class="{ disabled: v$.project.$errors.length }" class="project-form__btn form__btn" type="submit">
            Создать проект
        </button>
    </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, maxLength, helpers} from '@vuelidate/validators'

export default {
    name: "ProjectForm",
    mounted() {
        const open = document.querySelector('.open-file');


        const input = this.$refs.photo
        input.insertAdjacentElement('beforebegin', open);

        const inputTrigger = () => {

            input.click();
            this.v$.project.photo.$touch

        }

        open.addEventListener('click', inputTrigger)


    },
    data() {
        return {
            v$: useVuelidate(),
            project: {
                name: '',
                years: '',
                description: '',
                photo: null,
            }
        }
    },
    validations() {
        return {
            project: {
                name: {required: helpers.withMessage('Это поле обязательно!', required)},
                years: {required: helpers.withMessage('Это поле обязательно!', required)},
                description: {required: helpers.withMessage('Это поле обязательно!', required)},
                photo: {required: helpers.withMessage('Это поле обязательно!', required)},
            }
        }
    },
    methods: {

        handleFileUpload() {
            const reader = new FileReader();

            reader.onload = ev => {
                console.log(ev.target.result)


                document.querySelector('#photo-preview').insertAdjacentHTML('afterbegin', `<img src="${ev.target.result}"/>`);
            }

            reader.readAsDataURL(this.$refs.photo.files[0]);
            if (document.querySelector('#photo-preview').contains(document.querySelector('#photo-preview img'))) {
                document.querySelector('#photo-preview img').remove();
            }
            this.project.photo = this.$refs.photo.files[0];
            // console.log(this.project.photo )

        },
        async storeProject() {
            const isFormCorrect = await this.v$.project.$validate()

            if (!isFormCorrect) {
                v$.project.$touch()
                return
            }
            let formData = new FormData();
            formData.append('photo', this.project.photo)
            formData.append('name', this.project.name)
            formData.append('years', this.project.years)
            formData.append('description', this.project.description)
            this.$store.dispatch('projects/storeProject', formData)

        }
    }
}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

input[type=file] {
    display: none;
}


</style>
