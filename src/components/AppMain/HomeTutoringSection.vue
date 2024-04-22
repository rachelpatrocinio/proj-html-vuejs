<template>
    <section class="home-tutoring">
        <div class="container-xxl">
            <h1 class="home-tutoring-title">The Trusted Name <br> for In-Home Tutoring.</h1>
            <p class="home-tutoring-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quae praesentium voluptatem nemo at doloremque, tempore eum, vitae eaque expedita ut laborum. Suscipit explicabo neque recusandae, quidem aliquid harum veniam.</p>
            <a href="#"> LEARN MORE </a>
            <img src="../../../public/home-tutoring/h5-img-1.jpg" alt="Home Tutoring">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.home-tutoring{
    padding: 50px 0;
    .home-tutoring-title{
        font-size: 60px;
    }

    .home-tutoring-description{
        font-size: 20px;
        margin-top: 20px;
        color: gray;
        line-height: 30px;
    }

    a{
        display: block;
        margin-top: 40px;
        color: $brand-color;
        font-weight: 600;

        &:hover{
            color: $brand-light-color;
        }
    }

    img{
        width: 100%;
    }
}
</style>