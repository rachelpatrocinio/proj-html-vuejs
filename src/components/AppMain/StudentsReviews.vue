<template>
    <section class="students-reviews">
        <div class="container-lg">
            <div class="row">
                <div class="slider">
                    <div class="slider-item" :class="i === this.store.currentSlideIndex ? 'active' : 'd-none' "  v-for="(singleReview,i) in this.store.reviews" :key="i">
                        <img :src="`../../../public/students-reviews/${singleReview.src}`" alt="student">
                        <p class="student-review">{{ singleReview.review }}</p>
                        <p class="student-name">{{ singleReview.name }}</p>
                        <p class="dots">
                            <span  v-for="(singleReview,i) in this.store.reviews" :key="i" @click="this.store.currentSlideIndex = i" :class="i === this.store.currentSlideIndex ? 'colored': ''" class="dot"><font-awesome-icon :icon="['far', 'circle']" /></span>
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
                this.store.currentSlideIndex = 2
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

.students-reviews{
    // background-color: $brand-color;
    background-image: url('../../../public/students-reviews/interactive-map-slider-img-1.png');
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
          
            img{
                border-radius: 999px; 
                width: 200px;
                display: block;
                margin: 0 auto;
            }
        
            .student-review{
                font-size: 20px;
                margin-top: 30px;
                line-height: 30px;
            }

            .student-name{
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

.colored{
    color: $gold-color;
}

.active{
    display: block;
}

.d-none{
    display: none;
}
</style>