<template>
    <HeroBanner />
    <AcademySubjectsSection />
    <HomeTutoringSection />
    <EmpoweringChildren />
    <StudentsReviews />
    <LearningPossibilities />
    <OnlineCourses />
    <PricingPlans />
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import AcademySubjectsSection from './AcademySubjectsSection.vue';
import HomeTutoringSection from './HomeTutoringSection.vue';
import EmpoweringChildren from './EmpoweringChildren.vue';
import StudentsReviews from './StudentsReviews.vue';
import LearningPossibilities from './LearningPossibilities.vue';
import OnlineCourses from './OnlineCourses.vue';
import PricingPlans from './PricingPlans.vue';


export default {
    components:{
        HeroBanner,
        AcademySubjectsSection,
        HomeTutoringSection,
        EmpoweringChildren,
        StudentsReviews,
        LearningPossibilities,
        OnlineCourses,
        PricingPlans
    }
}
</script>

<style lang="scss" scoped>
</style>