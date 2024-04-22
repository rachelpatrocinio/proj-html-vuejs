<template>
    <HeroBanner />
    <AcademySubjectsSection />
    <HomeTutoringSection />
    <EmpoweringChildren />
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import AcademySubjectsSection from './AcademySubjectsSection.vue';
import HomeTutoringSection from './HomeTutoringSection.vue';
import EmpoweringChildren from './EmpoweringChildren.vue';

export default {
    components:{
        HeroBanner,
        AcademySubjectsSection,
        HomeTutoringSection,
        EmpoweringChildren
    }
}
</script>

<style lang="scss" scoped>
</style>