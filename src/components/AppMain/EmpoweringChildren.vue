<template>
    <section class="empowering-children">
        <div class="container-xxl">
            <div class="row d-flex">
                <div class="col-6">
                    <img src="../../../public/children-empowering/h5-img-2.jpg" alt="empowering-children">
                </div>
                <div class="col-6">
                    <h1 class="children-potential-title">Empowering <br> Children to Reach <br> Their Potencial.</h1>
                    <p class="children-potential-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, rerum accusamus perferendis excepturi ab molestias quisquam perspiciatis quo quia? Pariatur molestiae quos, cupiditate distinctio perspiciatis maiores.</p>
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

.empowering-children{
    padding: 50px;

    .col-6{
        padding: 20px;
        .children-potential-title{
            font-size: 60px;
        }

        .children-potential-description{
            font-size: 20px;
            margin-top: 20px;
            color: gray;
            line-height: 30px;
        }

        .numbers{
            color: $brand-color;
            width: 50%;
            margin-top: 30px;
            font-weight: 500;
            font-size: 25px;

            span:first-child{
                font-size: 80px;
                margin-bottom: 5px;
            }
        }
    }
}

</style>