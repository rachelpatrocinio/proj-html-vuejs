<template>
    <HeroBanner />
    <AcademySubjectsSection />
    <HomeTutoringSection />
    <EmpoweringChildren />
    <StudentsReviews />
    <LearningPossibilities />
    <OnlineCourses />
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import AcademySubjectsSection from './AcademySubjectsSection.vue';
import HomeTutoringSection from './HomeTutoringSection.vue';
import EmpoweringChildren from './EmpoweringChildren.vue';
import StudentsReviews from './StudentsReviews.vue';
import LearningPossibilities from './LearningPossibilities.vue';
import OnlineCourses from './OnlineCourses.vue';


export default {
    components:{
        HeroBanner,
        AcademySubjectsSection,
        HomeTutoringSection,
        EmpoweringChildren,
        StudentsReviews,
        LearningPossibilities,
        OnlineCourses
    }
}
</script>

<style lang="scss" scoped>
</style>