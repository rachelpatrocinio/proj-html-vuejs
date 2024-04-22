<template>
    <HeroBanner />
    <AcademySubjectsSection />
    <HomeTutoringSection />
    <EmpoweringChildren />
    <StudentsReviews />
    <LearningPossibilities />
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import AcademySubjectsSection from './AcademySubjectsSection.vue';
import HomeTutoringSection from './HomeTutoringSection.vue';
import EmpoweringChildren from './EmpoweringChildren.vue';
import StudentsReviews from './StudentsReviews.vue';
import LearningPossibilities from './LearningPossibilities.vue';

export default {
    components:{
        HeroBanner,
        AcademySubjectsSection,
        HomeTutoringSection,
        EmpoweringChildren,
        StudentsReviews,
        LearningPossibilities
    }
}
</script>

<style lang="scss" scoped>
</style>