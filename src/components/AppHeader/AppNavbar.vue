<template>
    <ul class="d-flex flex-wrap">
        <li class="menu-element" v-for="singleMenuElement in menu"> 
            <a :href="singleMenuElement.src">{{ singleMenuElement.name }}</a>
        </li>
    </ul>
    <ul class="d-flex">
        <li class="icon-element"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></li>
        <li class="icon-element p-relative">
            <font-awesome-icon :icon="['fas', 'bag-shopping']" />
            <span class="cart-icon">0</span>
        </li>
        <li class="icon-element"><font-awesome-icon :icon="['fas', 'bars']" /></li>
    </ul>
</template>

<script>
export default {
    props:{
        menu:{
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
.menu-element{
    padding: 10px 25px;
    cursor: pointer;

    &:hover{
        color: $brand-light-color;
    }
}

.icon-element{
    padding: 10px 10px;
    cursor: pointer;

    &:hover{
        color: $brand-light-color;
    }

    .cart-icon{
        display: block;
        border-radius: 99px;
        background-color: $brand-color;
        aspect-ratio: 1/1;
        width: 15px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
    }
}


</style>