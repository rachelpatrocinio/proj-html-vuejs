<template>
    <HeroBanner />
    <AcademySubjects />
    <HomeTutoring />
    <EmpoweringChildren />
    <AcademyInstructors />
    <LearningPossibilities />
    <OnlineCourses />
    <PricingPlans />
    <AcademiesLogos />
    <UpButton/>
</template>

<script>
import HeroBanner from './HeroBanner.vue';
import AcademySubjects from './AcademySubjects.vue';
import HomeTutoring from './HomeTutoring.vue';
import EmpoweringChildren from './EmpoweringChildren.vue';
import AcademyInstructors from './AcademyInstructors.vue';
import LearningPossibilities from './LearningPossibilities.vue';
import OnlineCourses from './OnlineCourses.vue';
import PricingPlans from './PricingPlans.vue';
import AcademiesLogos from './AcademiesLogos.vue';
import UpButton from './UpButton.vue';


export default {
    components:{
        HeroBanner,
        AcademySubjects,
        HomeTutoring,
        EmpoweringChildren,
        AcademyInstructors,
        LearningPossibilities,
        OnlineCourses,
        PricingPlans,
        AcademiesLogos,
        UpButton
    }
}
</script>

<style lang="scss" scoped>
</style>