<template>
    <section class="academy-subjects">
        <div class="container-xxl">
            <div class="row d-flex">
                <div class="col-2" v-for="(subject,i) in this.store.subjects" :key="i">
                    <div class="subject-card d-flex flex-column align-items-center" >
                        <img :src="`../../../public/subjects/${subject.img}`" alt="languages-subject-logo">
                        <h3 class="subject-title">{{ subject.subject }}</h3>
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
.academy-subjects{
    padding: 30px 0;

    .subject-card{
        margin: 10px;
        padding: 70px 10px;
        border: 1px solid lightgray;
        background-color: $brand-light-bg;

        .subject-title{
            margin-top: 20px;
            color: $dark-color;
        }
    }
}

</style>