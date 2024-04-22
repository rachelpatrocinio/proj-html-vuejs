<template>
    <ul class="d-flex">
        <li class="menu-element" v-for="singleMenuElement in menu"> {{ singleMenuElement.name }}</li>
    </ul>
    <ul class="d-flex">
        <li class="icon-element"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></li>
        <li class="icon-element"><font-awesome-icon :icon="['fas', 'bag-shopping']" /></li>
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
.menu-element{
    padding: 10px 25px;
}

.icon-element{
    padding: 10px 10px;
}


</style>