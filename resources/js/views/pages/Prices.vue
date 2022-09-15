<template>
    <section class="prices page-layout">
        <div class="prices__container page-layout__container">
            <div class="prices__top page-layout__top">
                <h1 class="prices__title title">Цены</h1>
                <router-link to="/" class="page-layout__back"><img src="/img/arrow.svg" alt="Стрелка назад">На главную
                </router-link>
            </div>
            <div class="prices__bottom page-layout__bottom">
                <div class="prices__accordion accordion">
                    <!--                    <div v-for="accordion in accordions" :key="accordion.title" class="accordion__item">-->
                    <!--                        <div @click="accordion.active = !accordion.active" class="accordion__head" :class="{active: accordion.active}">-->
                    <!--                            <button :class="{active: accordion.active}"  class="accordion__open"></button>-->
                    <!--                            <h3 class="accordion__title">{{accordion.title}}</h3>-->
                    <!--                        </div>-->
                    <!--                        <div class="accordion__content">-->
                    <!--                            <div v-for="item in accordion.items" :key="item.name"  class="accordion__content-item">-->
                    <!--                                <p class="accordion__name">{{ item.name }}</p>-->
                    <!--                                <span class="accordion__price">{{item.price}}</span>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <div class="accordion__item ">
                        <div class="accordion__head active">
                            <button class="accordion__open"></button>
                            <h3 class="accordion__title">Инженерно-геологические изыскания</h3>
                        </div>
                        <div class="accordion__content">
                            <div class="accordion__content-item">
                                <p class="accordion__name">Буровые работы</p>
                                <span class="accordion__price">От 18 000₽ / опыт</span>
                            </div>
                            <div class="accordion__content-item">
                                <p class="accordion__name">Гидрогеологические изыскания</p>
                                <span class="accordion__price">От 600₽ / п. м.</span>
                            </div>
                            <div class="accordion__content-item">
                                <p class="accordion__name">Геофизические исследования</p>
                                <span class="accordion__price">От 400₽ / п. м.</span>
                            </div>
                            <div class="accordion__content-item">
                                <p class="accordion__name">Камеральная обработка</p>
                                <span class="accordion__price">От 10 000₽ / опыт</span>
                            </div>
                            <div class="accordion__content-item">
                                <p class="accordion__name">Лабораторные исследования</p>
                                <span class="accordion__price">От 3 500₽ / р. м.</span>
                            </div> <div class="accordion__content-item">
                                <p class="accordion__name">Полевые испытания грунтов</p>
                                <span class="accordion__price">От 10 000₽</span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion__item">
                        <div class="accordion__head">
                            <button class="accordion__open"></button>
                            <h3 class="accordion__title">Инженерно-геологические изыскания</h3>
                        </div>
                        <div class="accordion__content">
                            <div class="accordion__content-item">
                                <p class="accordion__name">Буровые работы</p>
                                <span class="accordion__price">От 18 000₽ / опыт</span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion__item">
                        <div class="accordion__head">
                            <button class="accordion__open"></button>
                            <h3 class="accordion__title">Инженерно-экологические изыскания</h3>
                        </div>
                        <div class="accordion__content">
                            <div class="accordion__content-item">
                                <p class="accordion__name">Буровые работы</p>
                                <span class="accordion__price">От 18 000₽ / опыт</span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion__item">
                        <div class="accordion__head">
                            <button class="accordion__open"></button>
                            <h3 class="accordion__title">Инженерно-гидрметеорологические изыскания</h3>
                        </div>
                        <div class="accordion__content">
                            <div class="accordion__content-item">
                                <p class="accordion__name">Буровые работы</p>
                                <span class="accordion__price">От 18 000₽ / опыт</span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion__item">
                        <div class="accordion__head">
                            <button class="accordion__open"></button>
                            <h3 class="accordion__title">Инженерно-геотехнический изыскания</h3>
                        </div>
                        <div class="accordion__content">
                            <div class="accordion__content-item">
                                <p class="accordion__name">Буровые работы</p>
                                <span class="accordion__price">От 18 000₽ / опыт</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Prices",
    // data(){
    //   return {
    //
    //       accordions: [
    //           {
    //               title: 'Инженерно-геологические изыскания',
    //               active: false,
    //               items: [
    //                   {
    //                       name: 'Буровые работы',
    //                       price: 'От 18 000₽ / опыт',
    //                   },
    //                   {
    //                       name: 'Буровые работы',
    //                       price: 'От 18 000₽ / опыт',
    //                   },
    //                   {
    //                       name: 'Буровые работы',
    //                       price: 'От 18 000₽ / опыт',
    //                   },
    //                   {
    //                       name: 'Буровые работы',
    //                       price: 'От 18 000₽ / опыт',
    //                   },
    //                   {
    //                       name: 'Буровые работы',
    //                       price: 'От 18 000₽ / опыт',
    //                   }
    //               ]
    //           },
    //           {
    //               title: 'Инженерно-геодезические изыскания',
    //               active: false,
    //               items: [
    //                   {
    //                       name: 'Буровые работы',
    //                       price: 'От 18 000₽ / опыт',
    //                   }
    //               ]
    //           }
    //       ]
    //   }
    // },

    mounted() {
        document.querySelectorAll('.accordion__head').forEach((item) => {
            item.classList.contains('active') ? item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px' : null ;
            item.addEventListener('click', (e) => {
                const self = e.currentTarget;

                self.classList.toggle('active')
                const accordionContent = self.nextElementSibling

                if (accordionContent.style.maxHeight) {
                    accordionContent.style.maxHeight = null
                } else {
                    accordionContent.style.maxHeight = null
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
                }
            })

        });
    }

}
</script>

<style lang="scss" scoped>
@use "./resources/sass/mixins.scss" as * ;
@use "./resources/sass/_variables.scss" as * ;

.prices {
    &__accordion {
    }
}

.accordion {
    &__item {
        padding: 20px 0;
        border-bottom: 1px solid #E5E5E5;
    }

    &__head {
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
    }

    &__head.active &__open {
        &::before {
            transform: rotate(180deg);
        }

        &::after {
            transform: rotate(180deg);
        }
    }

    &__open {

        width: 24px;
        height: 24px;
        position: relative;
        flex: 0 0 auto;
        &::before, &::after {
            content: '';
            position: absolute;

            left: 0;
            width: 100%;
            height: 1px;
            background: black;
            transition: all .3s ease 0s;
        }

        &::before {
            transform: rotate(90deg);
        }

        &::after {
            transform: rotate(180deg);
        }
    }

    &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;
        color: #393939;
    }


    &__content {
        .active + & {
            //display: block;

            //transform: translateY(100%);
            padding-bottom: 20px;
            padding-left: 40px;
            margin-top: 20px;
            opacity: 1;
        }

        //display: none;
        //transform: translateY(0);
        max-height: 0;
        overflow: hidden;
        //padding: 0 20px;
        opacity: 0;

        transition: all .3s ease 0s;
        border-left: 1px solid #DFD1A7;
        margin-left: 35px;


    }

    &__content-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0 30px 0;
        border-bottom: 1px solid #E5E5E5;
        @media (max-width: $tablet) {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
        }
    }

    &__name {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        color: #393939;
    }

    &__price {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        text-align: right;
        color: #393939;
        @media (max-width: $tablet) {
            font-weight: 700;
        }

    }
}
</style>
