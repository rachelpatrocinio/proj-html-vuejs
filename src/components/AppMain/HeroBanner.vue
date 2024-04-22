<template>
    <section class="hero-banner">
        <div class="container d-flex justify-content-center">
            <div class="row">
                <h1 class="hero-title"> Contemporary Ideas</h1>
                <p class="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum numquam ea excepturi laudantium, tempore voluptas ratione odio mollitia corrupti perspiciatis magnam, reprehenderit laboriosam accusantium temporibus iusto minima?</p>
                <button> REGISTER NOW </button>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.hero-banner{
    background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url('../../../public/course-9-f-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh;
    color: white;

    .row{
        padding: 300px 300px;
        text-align: center;

        .hero-title{
            font-size: 80px;
        }

        .hero-description{
            margin-top: 20px;
            font-size: 20px;
        }

        button{
        background-color: $brand-color;
        margin-top: 30px;
        padding: 20px 30px ;
        border: none;
        color: white
    }
    }
}

</style>