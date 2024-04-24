<template>
    <footer class="main-footer">
        <div class="container-xxl">
            <div class="row d-flex flex-wrap">
                <div class="col-3 col-md-6 description">
                    <img src="../../../public/logo/footer-logo-1.png" alt="logo iAcademy">
                    <p class="footer-description">Providing Life Changing <br> Experiences Through <br> Education. Class That Fit Your <br> Busy Life. Closer to Home</p>
                    <p><font-awesome-icon :icon="['fas', 'phone-volume']" class="icon"/> 1-677-124-44227</p>
                    <p><font-awesome-icon :icon="['far', 'clock']" class="icon"/>Mon - Sat 8.00 - 18.00</p>
                
                </div>
                <div class="col-3 col-md-6 courses">
                    <h1>Popular Courses</h1>
                    <ul>
                        <li v-for="course in courses">
                            <h2>{{ course.subject }}</h2>
                            <p>{{ course.name }}</p>
                        </li>
                    </ul>
                </div>
                <div class="col-3 col-md-6 support">
                    <h1>Support</h1>
                    <ul>
                        <li v-for="sup in support">
                            <a :href="sup.src">{{ sup.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3 col-md-6 flexible-learning">
                    <h1>Flexible Learning</h1>
                    <img src="../../../public/footer/footer-img-1.png" alt="world map">
                </div>
            </div>
            <div class="row d-flex flex-wrap justify-space-between">
                <p class="col-md-12">Copyrights 2017 <font-awesome-icon :icon="['far', 'copyright']" />Mikado Themes</p>
                <ul class="d-flex col-12-md">
                    <li>CALL +44 300 303 0266</li>
                    <li>FOLLOW US</li>
                    <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props:{
        courses:{
            type: Array
        },
        support:{
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

h1{
    margin-bottom: 50px;
    font-size: 28px;
    line-height: 45px;
}

.main-footer{
    padding-top: 150px;
    background-color: $brand-dark-color;
    color: white;
    line-height: 30px;

    .row:first-child{
        border-bottom: 1px solid $light-gray;
        padding: 100px 0;

        .description{
            color: $lightest-gray;
            
            img{
                margin-bottom: 50px;
                width: 200px;
            }

            .footer-description{
                font-size: 18px;
                margin-bottom: 30px;
            }

            p{
                font-size: 18px;

                .icon{
                    margin-right: 20px;
                    margin-top: 20px;
                }
            }
        }

        .courses{
            li{
                margin-bottom: 20px;
                color: $light-gray;

                h2{
                    color: $lightest-gray;
                    font-size: 20px;
                }

                p{
                    font-size: 18px;
                }
            }
        }

        .support{
            li{
                font-size: 18px;
                color: $lightest-gray;

                &:hover{
                    color: $brand-color;
                }
            }
        }
    }

    .row:last-child{
        padding: 30px 0;
        color: $light-gray;
        font-size: 18px;

        li{
            margin-right: 10px;
        }
    }
}

@media screen and (max-width: 992px){
    .col-md-6{
        margin-top: 30px;
    }

    .main-footer{
        padding: 0 50px;
    }
}
</style>