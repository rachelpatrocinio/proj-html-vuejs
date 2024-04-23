<template>
    <div class="up-button d-none" id="up-button" @click="goUp">
        <font-awesome-icon :icon="['fas', 'chevron-up']" />
        <p>TOP</p>
    </div>
</template>

<script>
export default {
    methods:{
        goUp(){
            window.scrollTo(0,0);
        },
        showUpButton(){
            const button = document.getElementById("up-button");
            button.classList.remove('d-none');
            button.classList.add('d-block');
        }
    },
    mounted(){
        setTimeout(() => {
            this.showUpButton()
        },2500);
    }
}
</script>


<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
.d-block{
    display: block;
}

.d-none{
    display: none;
}

.up-button{
    background-color: $brand-color;
    width: 70px;
    height: 70px;
    line-height: 30px;
    color: white;
    text-align: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    cursor: pointer;
    animation: slide-in-right 0.9s ease-in;
}

@keyframes slide-in-right{
    0%{
        opacity:0;
        transform: translateX(50px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>