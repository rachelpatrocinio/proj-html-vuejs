<template>
    <section class="empowering-children">
        <div class="container-xxl">
            <div class="row d-flex flex-wrap">
                <div class="col-6 col-md-12">
                    <img src="../../../public/children-empowering/h5-img-2.jpg" alt="empowering-children">
                </div>
                <div class="col-6 col-md-12">
                    <h1 class="children-potential-title">Empowering <br> Children to Reach <br> Their Potencial.</h1>
                    <p class="children-potential-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, rerum accusamus perferendis excepturi ab molestias quisquam perspiciatis quo quia?</p>
                    <div class="d-flex">
                        <p class="numbers d-flex flex-column">
                            <span>168</span>
                            <span>User Stories</span>
                        </p>
                        <p class="numbers d-flex flex-column">
                            <span>347</span>
                            <span>Events</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;


.empowering-children{
    padding: 50px;

    .col-6{
        padding: 20px;
        .children-potential-title{
            font-size: 60px;
            color: $dark-color;
        }

        .children-potential-description{
            @include paragraph-descriptions;
            color: $light-gray;
        }

        .numbers{
            color: $brand-color;
            width: 50%;
            margin-top: 30px;
            font-weight: 500;
            font-size: 25px;

            span:first-child{
                font-size: 60px;
                margin-bottom: 5px;
            }
        }
    }
}
</style>