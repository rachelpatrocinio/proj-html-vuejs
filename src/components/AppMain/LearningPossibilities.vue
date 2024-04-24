<template>
    <section class="learning-possibilities">
        <div class="container-xxl">
            <div class="row d-flex flex-wrap">
                <div class="col-4 col-md-12">
                    <ul class="aside">
                        <li v-for="(element,i) in this.store.learningPossibilities" :key="i" class="aside-list" @click="this.store.currentIndex = i" :class="i === this.store.currentIndex ? 'active':''"> {{element.object}}</li>
                    </ul>
                </div>
                <div class="col-8 col-md-12 content" v-for="(element,i) in this.store.learningPossibilities" :key="i" :class="i === this.store.currentIndex ? 'd-block':'d-none'" >
                    <h1 class="learning-possibilities-title">{{element.title}}</h1>
                    <p class="learning-possibilities-description">{{element.description}}</p>
                    <div class="d-flex">
                        <ul class="checks col-8">
                            <li v-for="check in element.checks" :key="i"><font-awesome-icon class="check" :icon="['fas', 'check']" />{{ check }}</li>
                        </ul>
                        <figure class="col-4 d-flex justify-content-end align-items-end">
                            <img :src="`../../../public/learning-possibilities/${element.img}`">
                        </figure>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import {store} from '../../store.js';
export default {
    data(){
        return{
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;


.learning-possibilities{
    margin: 100px 0;
    padding: 50px;
    color: $light-gray;

    .aside-list{
        padding: 30px;
        border: 1px solid $lightest-gray;
        border-bottom: none;
        cursor: pointer;
        font-size: 20px;

        &:hover{
            color: $brand-color;
            border-left: 10px solid $brand-color;
        }

        &.active{
            color: $brand-color;
            border-left: 10px solid $brand-color;
        }
    }

    .aside-list:last-child{
        border-bottom: 1px solid $lightest-gray;
    }

    .content{
        padding: 0 50px;

        .learning-possibilities-title{
            font-size: 60px;
            margin-top: 15px;
            color: $dark-color;
        }

        .learning-possibilities-description{
            @include paragraph-descriptions;
        }

        .checks{
        margin-top: 50px;
        font-size: 20px;

            li{
                padding: 10px 0;
                display: flex;
            }

            .check{
                color: $brand-color;
                margin-right: 10px;
            }
        }

        img{
            width: 150px;
            object-fit: contain;
        }
    }
}

@media screen and (max-width: 992px){

    .aside{
        margin-bottom: 50px;
    }
}
</style>