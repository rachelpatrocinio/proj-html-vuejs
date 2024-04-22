<template>
    <section class="learning-possibilities">
        <div class="container-xxl">
            <div class="row d-flex">
                <div class="col-4">
                    <ul class="aside">
                        <li class="aside-list active"> What We Do</li>
                        <li class="aside-list">Degree Progamme</li>
                        <li class="aside-list">Career Achivements</li>
                        <li class="aside-list">Personal Managment</li>
                        <li class="aside-list">Steps To Success</li>
                        <li class="aside-list">Knowledge Transfer</li>
                    </ul>
                </div>
                <div class="col-9">
                    <h1 class="learning-possibilities-title">Learning Possibilities</h1>
                    <p class="learning-possibilities-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem, fugiat libero illum! Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!</p>
                    <div class="d-flex">
                        <ul class="checks col-8">
                            <li><font-awesome-icon class="check" :icon="['fas', 'check']" />We enrich lives learning.</li>
                            <li><font-awesome-icon class="check" :icon="['fas', 'check']" />Maximizing potential through individual attention.</li>
                            <li><font-awesome-icon class="check" :icon="['fas', 'check']" />The trusted name for specialized training.</li>
                            <li><font-awesome-icon class="check" :icon="['fas', 'check']" />People teach. People learn. This is where they connect.</li>
                        </ul>
                        <figure class="col-4 d-flex align-items-end">
                            <img src="../../../public/learning-possibilities/h12-tabs-icon-1.png">
                        </figure>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.learning-possibilities{
    margin: 100px 0;
    padding: 50px;
    color: gray;

    .aside-list{
        padding: 30px;
        border: 1px solid lightgray;
        border-bottom: none;
        cursor: pointer;
        font-size: 20px;

        &:hover{
            background-color: $brand-light-color;
        }

        &.active{
            color: $brand-color;
            border-left: 10px solid $brand-color;
        }
    }

    .aside-list:last-child{
        border-bottom: 1px solid lightgray;
    }

    .col-9{
        padding: 0 50px;

        .learning-possibilities-title{
            font-size: 60px;
            margin-top: 15px;
            color: black;
        }

        .learning-possibilities-description{
            color: gray;
            margin-top: 40px;
            font-size: 20px;
            line-height: 30px;
        }

        .checks{
        margin-top: 50px;
        font-size: 20px;

            li{
                padding: 10px 0;
            }

            .check{
                color: $brand-color;
                margin-right: 10px;
            }
        }

        img{
            width: 150px;
            object-fit: contain;

        }
    }
}




</style>