<template>
  <AppHeader :menu="this.store.menuHeader"/>
  <AppMain/>
  <AppFooter :courses="this.store.popularCourses" :support="this.store.support"/>
</template>

<script>
import {store} from './store.js'
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
      store
    }
  }
}
</script>