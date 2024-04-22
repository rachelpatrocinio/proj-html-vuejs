<template>
    <header class="main-header">
        <div class="container d-flex justify-space-between">
            <AppLogo />
            <AppNavbar :menu="this.menu"/>
        </div>
    </header>
</template>

<script>
import AppLogo from './AppLogo.vue';
import AppNavbar from './AppNavbar.vue';

export default {
    components:{
        AppLogo,
        AppNavbar,
    },
    props:{
        menu:{
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.main-header{
    padding: 30px;
    color: white;
    width: 100%;
    position: absolute;
    z-index: 100;
}
</style>