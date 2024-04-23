<template>
    <section class="online-courses">
        <div class="container-xxl">
            <div class="row d-flex flex-wrap">
                <div class="col-12">
                    <h1 class="online-courses-title">Popular Online Courses</h1>
                    <p class="online-courses-description">Lorem Ipsum etc kung papa load if then you can be a won full . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempore impedit quia ut molestiae enim. Accusantium voluptatum doloribus quos ex.</p>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            <img src="../../../online-courses/course-5-f-img.jpg">
                        </div>
                        <div class="card-body">
                            <div class="card-body-header d-flex justify-space-between">
                                <div>
                                    <h3>Android Developer</h3>
                                    <h4>David Sanders</h4>
                                </div>
                                <div>   
                                    <span class="badge free">FREE</span>
                                </div>
                            </div>
                            <div class="card-body-content">
                                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui architecto ipsum eum ab laudantium, optio aspernatur debitis placeat enim cupiditate necessitatibus ratione facere tenetur soluta, vitae dolor. Quis, voluptas!</p>
                                <div class="card-icons d-flex">
                                    <font-awesome-icon :icon="['fas', 'user']" />
                                    <p>1</p>
                                    <font-awesome-icon :icon="['fas', 'tag']" class="tag"/>
                                    <p>PROGRAMMING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            <img src="../../../online-courses/course-6-f-img.jpg">
                        </div>
                        <div class="card-body">
                            <div class="card-body-header d-flex justify-space-between">
                                <div>
                                    <h3>Web Designing</h3>
                                    <h4>Jennifer Powell</h4>
                                </div>
                                <div>   
                                    <span class="badge free">FREE</span>
                                </div>
                            </div>
                            <div class="card-body-content">
                                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui architecto ipsum eum ab laudantium, optio aspernatur debitis placeat enim cupiditate necessitatibus ratione facere tenetur soluta, vitae dolor. Quis, voluptas!</p>
                                <div class="card-icons d-flex">
                                    <font-awesome-icon :icon="['fas', 'user']" />
                                    <p>1</p>
                                    <font-awesome-icon :icon="['fas', 'tag']" class="tag" />
                                    <p>PROGRAMMING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            <img src="../../../online-courses/course-12-f-img.jpg">
                        </div>
                        <div class="card-body">
                            <div class="card-body-header d-flex justify-space-between">
                                <div>
                                    <h3>Financial Modeling</h3>
                                    <h4>Edward Bowman</h4>
                                </div>
                                <div>   
                                    <span class="badge pay">$20</span>
                                </div>
                            </div>
                            <div class="card-body-content">
                                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui architecto ipsum eum ab laudantium, optio aspernatur debitis placeat enim cupiditate necessitatibus ratione facere tenetur soluta, vitae dolor. Quis, voluptas!</p>
                                <div class="card-icons d-flex">
                                    <font-awesome-icon :icon="['fas', 'user']" />
                                    <p>1</p>
                                    <font-awesome-icon :icon="['fas', 'tag']" class="tag" />
                                    <p>BUSINESS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.online-courses{
    padding: 150px 0;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    background-image: url('../../../public/online-courses/page-background-img.png');
    background-position: bottom;
 
    .online-courses-title{
        font-size: 60px;
        text-align: center;
    }

    .online-courses-description{
        color: gray;
        margin-top: 40px;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }

    .card{
        margin: 30px;
        margin-top: 100px;
        border: 1px solid lightgrey;

        .card-body{
            background-color: white;
            padding: 20px;
            margin-top: 10px;

            h4{
                margin-top: 10px;
                color: lightgrey;
            }

            .card-body-description{
                color: gray;
                margin-top: 40px;
                font-size: 18px;
                line-height: 30px;
            }

            .card-icons{
                margin-top: 40px;
                color: gray;

                p{
                    margin: 0 7px;
                }

                .tag{
                    transform: scalex(-1);
                    margin-left: 10px;
                }
            }
        }
    }
}

.badge{
    border-radius: 100px;
    width: 50px;
    text-align: center;
    font-size: 14px;
    color: white;
    display: block;
}

.badge.pay{
    background-color: $brand-color;
}

.badge.free{
    background-color: $gold-color;
}
</style>