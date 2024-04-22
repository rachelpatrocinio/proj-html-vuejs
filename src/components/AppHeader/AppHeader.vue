<template>
    <header class="main-header">
        <div class="container-xxl d-flex justify-space-between">
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
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
</style>