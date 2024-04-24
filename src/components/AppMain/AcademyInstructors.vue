<template>
    <section class="academy-instructors" id="instructors">
        <div class="container-lg">
            <div class="row">
                <div class="slider">
                    <div class="slider-item col-md-6" :class="i === this.store.currentSlideIndex ? 'd-block' : 'd-none' "  v-for="(singleReview,i) in this.store.reviews" :key="i">
                        <img :src="`../../../public/instructors/${singleReview.img}`" alt="student">
                        <p class="instructor-review">{{ singleReview.review }}</p>
                        <p class="instructor-name">{{ singleReview.name }}</p>
                        <p class="dots">
                            <span  v-for="(singleReview,i) in this.store.reviews" :key="i" @click="this.store.currentSlideIndex = i" class="dot">
                                <font-awesome-icon :icon="['fas', 'circle']" v-if="i === this.store.currentSlideIndex"/>
                                <font-awesome-icon :icon="['far', 'circle']" v-else/>
                            </span>
                        </p>
                        <div class="prev" @click="prev"><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
                        <div class="next" @click="next"><font-awesome-icon :icon="['fas', 'chevron-right']" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../../store.js';
export default {
    methods:{
        prev(){
            this.store.currentSlideIndex--;
            if(this.store.currentSlideIndex < 0){
                this.store.currentSlideIndex = this.store.reviews.length-1
            }
        },
        next(){
            this.store.currentSlideIndex++;
            if(this.store.currentSlideIndex === this.store.reviews.length){
                this.store.currentSlideIndex = 0
            }
        }
    },
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


.academy-instructors{
    // background-color: $brand-color;
    background-image: url('../../../public/instructors/interactive-map-slider-img-1.png');
    background-color: $brand-color;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 300px;
    padding: 200px 0;
    color: white;
    position: relative;


    .slider{
        text-align: center;

        .slider-item{
            margin: 0 auto;
          
            img{
                border-radius: 999px; 
                width: 200px;
                display: block;
                margin: 0 auto;
            }
        
            .instructor-review{
                @include paragraph-descriptions;
            }

            .instructor-name{
                font-size: 20px;
                margin-top: 30px;
            }

            .dots{
                margin-top: 100px;

                .dot{
                    padding: 5px;
                }
            }

            .prev{
                position: absolute;
                font-size: 20px;
                left: 40px;
                top:50%;

            }
            
            .next{
                position: absolute;
                font-size: 20px;
                right: 40px;
                top:50%;
            }
        }
    }
}
</style>