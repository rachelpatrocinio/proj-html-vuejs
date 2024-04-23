<template> 
    <section class="pricing-plans">
        <div class="container-xxl">
            <h1 class="pricing-plans-title">Pricing Plans</h1>
            <p class="pricing-plans-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, odio? Lorem Ipsum.</p>
        
            <table>
                <thead>
                    <tr>
                        <th>
                            <p>Save up 40% <br> by paying weekly</p>
                        </th>
                        <th>
                            <img src="../../../public/pricing-plans/h5-custom-icon-7.png" alt="">
                            <p>Standrad <br> $12</p>
                        </th>
                        <th class="active">
                            <img src="../../../public/pricing-plans/h5-custom-icon-8.png" alt="">
                            <p>Professional <br> $59</p>
                        </th>
                        <th>
                            <img src="../../../public/pricing-plans/h5-custom-icon-9.png" alt="">
                            <p>Advanced <br> $88</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number Of Courses</td>
                        <td>2</td>
                        <td>4</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>15 Days</td>
                        <td>30 Days</td>
                        <td>30 Days</td>
                    </tr>
                    <tr>
                        <td>Web Designing</td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                    </tr>
                    <tr>
                        <td>Human-Centered Design</td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                    </tr>
                    <tr>
                        <td>Basic Marketing</td>
                        <td><font-awesome-icon :icon="['fas', 'x']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                    </tr>
                    <tr>
                        <td>Python for Everybody</td>
                        <td><font-awesome-icon :icon="['fas', 'x']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                    </tr>
                    <tr>
                        <td>Android Developer</td>
                        <td><font-awesome-icon :icon="['fas', 'x']" /></td>
                        <td><font-awesome-icon :icon="['fas', 'x']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                    </tr>
                    <tr>
                        <td>Business English</td>
                        <td><font-awesome-icon :icon="['fas', 'x']" /></td>
                        <td><font-awesome-icon :icon="['fas', 'x']" /></td>
                        <td><font-awesome-icon class="check" :icon="['fas', 'check']" /></td>
                    </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td></td>
                    <td><button>GET IT NOW</button></td>
                    <td><button class="active">GET IT NOW</button></td>
                    <td><button>GET IT NOW</button></td>
                </tr>
            </tfoot>
            </table>
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


.pricing-plans{
    padding: 150px 0;
    background-image: url('../../../public/online-courses/page-background-img.png');
    background-position: top;
    border-bottom: 1px solid lightgray;

    .pricing-plans-title{
        font-size: 60px;
        text-align: center;
    }

    .pricing-plans-description{
        color: gray;
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }
}

table{
    margin-top: 100px;
    width: 100%;
    background-color: white;
    border-collapse: collapse;

    thead{
        font-size: 30px;

        th{
            border-top: 10px solid $brand-light-color;
            border-left: 1px solid lightgray;
            border-bottom: 1px solid lightgray;
            padding: 50px 0;
            width: calc(100% / 4);
    

            &:first-child{
                text-align: left;
                padding: 50px;
                vertical-align: bottom;
            }

            &:last-child{
                border-right: 1px solid lightgray;
            }

            &:not(:first-child){
            background-color: $brand-lightest-color;
            }
        }
    
    }

    tbody{
        color: gray;

        td{
            padding: 20px;
            font-size: 20px;
            border-bottom: 1px solid lightgray;
            border-left: 1px solid lightgray;
            text-align: center;

            &:first-child{
                text-align: left;
            }

            &:last-child{
                border-right: 1px solid lightgray;
            }
        }
    }

    tfoot{
        text-align: center;

        td{
            padding: 20px;
            font-size: 20px;
            text-align: center;

            &:not(:first-child){
            background-color: $brand-lightest-color;
            border-bottom: 1px solid lightgray;
            border-left: 1px solid lightgray;
            }

            &:last-child{
                border-right: 1px solid lightgray;
            }

        }
    }
}


button{
    background-color: white;
    padding: 20px;
    border: 1px solid lightgray;
}

button.active{
    background-color: $brand-color;
    color: white;
    border: none;
}

.check{
    color: $brand-color;
}

th.active{
    border-top: 10px solid $brand-color;
}
</style>