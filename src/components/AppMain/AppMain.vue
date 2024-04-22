<template>
    <HeroBanner />
    <AcademySubjectsSection />
    <HomeTutoringSection />
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import AcademySubjectsSection from './AcademySubjectsSection.vue';
import HomeTutoringSection from './HomeTutoringSection.vue';

export default {
    components:{
        HeroBanner,
        AcademySubjectsSection,
        HomeTutoringSection
    }
}
</script>

<style lang="scss" scoped>
</style>