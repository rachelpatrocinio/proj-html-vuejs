<template>
    <section class="academy-subjects">
        <div class="container-xl">
            <div class="row d-flex">
                <div class="col-2">
                    <div class="subject-card flex-column">
                        <img src="../../../public/subjects/h5-custom-icon-1.png" alt="languages-subject-logo">
                        <h3 class="subject-title">Languages</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="subject-card flex-column">
                        <img src="../../../public/subjects/h5-custom-icon-2.png" alt="software-subject-logo">
                        <h3 class="subject-title">Software</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="subject-card flex-column">
                        <img src="../../../public/subjects/h5-custom-icon-3.png" alt="business-subject-logo">
                        <h3 class="subject-title">Business</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="subject-card flex-column">
                        <img src="../../../public/subjects/h5-custom-icon-4.png" alt="chemistry-subject-logo">
                        <h3 class="subject-title">Chemistry</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="subject-card flex-column">
                        <img src="../../../public/subjects/h5-custom-icon-5.png" alt="science-subject-logo">
                        <h3 class="subject-title">Science</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="subject-card flex-column">
                        <img src="../../../public/subjects/h5-custom-icon-6.png" alt="diy&craft-subject-logo">
                        <h3 class="subject-title">DIY & Craft</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
.subject-card{
    margin: 20px;
    padding: 70px 10px;
    border: 1px solid lightgray;
    background-color: $brand-light-bg;
    display: flex;
    align-items: center;

    .subject-title{
        margin-top: 20px;
    }
}
</style>