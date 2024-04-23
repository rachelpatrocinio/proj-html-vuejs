<template>
  <AppHeader :menu="this.menuHeader"/>
  <AppMain />
  <AppFooter :courses="this.popularCourses" :support="this.support"/>
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
      menuHeader: [
        {
            name: 'HOME',
            src: '#'
        },
        {
            name: 'COURSES',
            src: '#'
        },
        {
            name: 'INSTRUCTORS',
            src: '#'
        },
        {
            name: 'EVENTS',
            src: '#'
        },
        {
            name: 'PAGES',
            src: '#'
        },
        {
            name: 'ELEMENTS',
            src: '#'
        }
      ],
      popularCourses: [
        {
          subject: 'Business English',
          name: 'Preston Marshall'
        },
        {
          subject: 'Social Computing',
          name: 'David Sanders'
        },
        {
          subject: 'Learn Spanish',
          name: 'Jennie King'
        },
      ],
      support: [
        {
          name: 'User Dashboard',
          src: '#'
        },
        {
          name: 'Contact Us',
          src: '#'
        },
        {
          name: 'FAQ',
          src: '#'
        },
        {
          name: 'Course Offer',
          src: '#'
        },
        {
          name: 'Events',
          src: '#'
        }
      ]
    }
  }
}
</script>

<style>
</style>
