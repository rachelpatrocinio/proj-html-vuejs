<template>
  <AppHeader :menu="this.menu"/>
  <AppMain />
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppMain from './components/AppMain/AppMain.vue'
import AppFooter from './components/AppFooter/AppFooter.vue'

export default {
  components:{
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      menu: [
        {
            name: 'HOME',
            src: ''
        },
        {
            name: 'COURSES',
            src: ''
        },
        {
            name: 'INSTRUCTORS',
            src: ''
        },
        {
            name: 'EVENTS',
            src: ''
        },
        {
            name: 'PAGES',
            src: ''
        },
        {
            name: 'ELEMENTS',
            src: ''
        }
      ]
    }
  }
}
</script>

<style>
</style>
