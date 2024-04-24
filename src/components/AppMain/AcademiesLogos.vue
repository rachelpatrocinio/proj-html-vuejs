<template>
    <section class="academies-logos">
        <div class="container-xxl">
            <div class="row d-flex flex-wrap">
                <div class="col-3 col-sm-12" v-for="logo in this.store.academyLogos">
                    <img :src="`../../../public/academies-logos/${logo.img}`" :alt="logo.name">
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
.row{
    padding: 100px 0;
}

@media screen and (max-width: 768px) {
    .row{
        text-align: center;

        div{
            margin-top: 30px;
        }
    }
}
</style>