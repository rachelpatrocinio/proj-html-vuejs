<template>
    <section class="hero-banner">
        <div class="container-xl">
            <div class="row" v-for="(hero,i) in this.store.heroBanner" :key="i" :class="i === this.store.currentSlideIndex ? 'd-block': 'd-none'">
                <h1 class="hero-title"> {{hero.title}}</h1>
                <p class="hero-description">{{ hero.description }}</p>
                <button> REGISTER NOW </button>
                <div class="dots">
                    <span v-for="(img,i) in this.store.heroBanner" :key="i" class="dot">
                        <font-awesome-icon :icon="['fas', 'circle']" v-if="i === this.store.currentSlideIndex"/>
                        <font-awesome-icon :icon="['far', 'circle']" v-else/>
                    </span>
                </div>
                <div class="prev" @mouseover="stopSlider" @mouseleave="playSlider" @click="prev"><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
                <div class="next" @mouseover="stopSlider" @mouseleave="playSlider" @click="next"><font-awesome-icon :icon="['fas', 'chevron-right']" /></div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../../store.js';
export default {
    data(){
        return{
            store,
            interval: ''
        }
    },
    methods:{
        next(){
            this.store.currentSlideIndex++;
            if(this.store.currentSlideIndex === this.store.reviews.length){
                this.store.currentSlideIndex = 0
            }
            // console.log(this.store.currentSlideIndex)
            const heroBanner = document.querySelector('.hero-banner');
            heroBanner.style.backgroundImage = `url('../../../public/hero-banner/${this.store.heroBanner[this.store.currentSlideIndex].img}')`;  
        },
        prev(){
            this.store.currentSlideIndex--;
            if(this.store.currentSlideIndex < 0){
                this.store.currentSlideIndex = this.store.reviews.length-1
            }
            // console.log(this.store.currentSlideIndex)
            const heroBanner = document.querySelector('.hero-banner');
            heroBanner.style.backgroundImage = `url('../../../public/hero-banner/${this.store.heroBanner[this.store.currentSlideIndex].img}')`;    
        },
        playSlider(){
            this.interval = setInterval(this.next, 3000) 
        },
        stopSlider(){
            clearInterval(this.interval);
            this.interval = ''
        }
    },
    mounted(){
        this.playSlider();
        const heroBanner = document.querySelector('.hero-banner');
        heroBanner.style.backgroundImage = `url('../../../public/hero-banner/${this.store.heroBanner[this.store.currentSlideIndex].img}')`;  
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.hero-banner{
    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:100vh;
    color: white;
    position: relative;
    
    .row{
        text-align: center;
        padding: 300px 0;
        
        .hero-title{
            font-size: 80px;
        }

        .hero-description{
            @include paragraph-descriptions;
        }

        button{
            background-color: $brand-color;
            margin-top: 30px;
            padding: 20px 30px ;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;

            &:hover{
                background-color: $brand-light-color;
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

.dots{
    margin-top: 300px;
}

.dot{
    color: white;
    padding: 5px;
}
</style>