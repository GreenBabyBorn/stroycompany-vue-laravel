<template>
    <section class="questions">
        <div class="questions__container page-layout__container">
            <div class="questions__top page-layout__top">
                <h2 class="questions__title title">
                    Управление вопросами
                </h2>

            </div>
            <div class="questions__bottom page-layout__bottom">
                <table class="questions__table">
                    <thead class="questions__thead">
                    <tr class="questions__tr">
                        <th style="cursor: pointer" @click="this.$store.dispatch('questions/sortQuestions', 'id' );"
                            class="questions__th">
                            <div>ID
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                     viewBox="-96 0 512 512">
                                    <path
                                        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
                                </svg>
                            </div>

                        </th>
                        <th class="questions__th" style="cursor: pointer"
                            @click="this.$store.dispatch('questions/sortQuestions', 'name' );">
                            <div>Имя
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                     viewBox="-96 0 512 512">
                                    <path
                                        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
                                </svg>
                            </div>
                        </th>
                        <th class="questions__th">Телефон</th>
                        <th class="questions__th">Текст сообщения</th>
                        <th class="questions__th" style="cursor: pointer"
                            @click="this.$store.dispatch('questions/sortQuestions', 'created_at' );">
                            <div>Дата и время
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                     viewBox="-96 0 512 512">
                                    <path
                                        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
                                </svg>
                            </div>
                        </th>
                        <th class="questions__th" style="cursor: pointer"
                            @click="this.$store.dispatch('questions/sortQuestions', 'seen' );">
                            <div>
                                Статус
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                     viewBox="-96 0 512 512">
                                    <path
                                        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
                                </svg>
                            </div>
                        </th>
                        <th class="questions__th">Действия</th>

                    </tr>

                    </thead>

                    <tbody class="questions__tbody">
                    <transition-group name="list">
                        <tr class="questions__tr" v-for="item in this.$store.getters['questions/getAllQuestions']"
                            :key="item.id">
                            <td class="questions__td">{{ item.id }}</td>
                            <td class="questions__td">{{ item.name }}</td>
                            <td class="questions__td"><a :href="'tel:'+item.phone" class="">{{ item.phone }}</a></td>
                            <td class="questions__td">{{ item.text ? item.text : '-' }}</td>
                            <td class="questions__td">{{ item.date + ' в ' + item.time }}</td>
                            <td class="questions__td">
                                <button class="questions__btn-seen" :class="{seen: item.seen}"
                                        @click="seenQuestion(item.id, !item.seen)">
                                    {{ item.seen ? 'Обработано' : 'Не обработано' }}
                                </button>
                            </td>
                            <td class="questions__td">
                                <button class="questions__btn-del" @click="deleteQuestion(item.id)">Удалить</button>
                            </td>
                        </tr>
                    </transition-group>
                    </tbody>
                </table>
            </div>
        </div>
    </section>


</template>

<script>
import ProjectForm from "../../../components/Admin/ProjectForm";

export default {
    name: "Dashboard",
    components: {
        ProjectForm
    },
    data() {
        return {}
    },
    methods: {
        deleteQuestion(questionId) {
            this.$store.dispatch('questions/destroyQuestion', questionId)
        },
        seenQuestion(questionId, seen) {
            this.$store.dispatch('questions/updateQuestion', {
                questionId: questionId,
                seen: seen
            })
        },

    },

    created() {
        this.$store.dispatch('questions/indexQuestions')

    }

}
</script>

<style scoped lang="scss">
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

.questions {
    &__btn-del {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        font-family: Consolas, monospace;
        text-transform: uppercase;
        color: #393939;
        padding: 15px 30px;
        background: #ff7171;
        text-align: center;

        transition: all .3s ease 0s;
    }

    &__btn-seen {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        font-family: Consolas, monospace;
        text-transform: uppercase;
        color: #393939;
        padding: 15px 30px;
        background: #ffcd71;
        text-align: center;
        white-space: nowrap;
        transition: all .3s ease 0s;

        &.seen {
            background: #66e766;
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        //gap: 90px;
        //@include adaptiveValue("gap", 40, 20);
    }

    &__top {
    }

    &__title {
    }

    &__bottom {
        overflow-x: auto;
    }

    &__table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    &__thead {
        //background: #e8ebf1;

    }

    &__tr {


    }

    &__th {
        padding: 10px;
        //text-align: left;
        font-family: Consolas, monospace;
        //border: 1px solid #000;
        background: #A7C186;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:nth-child(odd) {
            background: #eae3d3;
        }

    }

    &__tbody {
        tr {
            &:nth-child(even) {
                background: #f6f6f6;
            }
        }
    }

    &__td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ddd;

        line-height: 140%;
    }
}


</style>
