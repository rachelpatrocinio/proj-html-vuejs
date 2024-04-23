<template>
    <section class="hero-banner">
        <div class="container-xl">
            <div class="row">
                <h1 class="hero-title"> Contemporary Ideas</h1>
                <p class="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum numquam ea excepturi laudantium, tempore voluptas ratione odio mollitia corrupti perspiciatis magnam, reprehenderit laboriosam accusantium temporibus iusto minima?</p>
                <button> REGISTER NOW </button>
                <div class="dots">
                    <span class="dot"><font-awesome-icon :icon="['far', 'circle']" /></span>
                    <span class="dot"><font-awesome-icon :icon="['fas', 'circle']" /></span>
                    <span class="dot"><font-awesome-icon :icon="['far', 'circle']" /></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.hero-banner{
    background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url('../../../public/hero-banner/course-9-f-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:100vh;
    color: white;
    position: relative;
    
    .row{
        text-align: center;
        padding: 300px 0;
        
        .hero-title{
            font-size: 80px;
        }

        .hero-description{
            margin-top: 30px;
            font-size: 20px;
        }

        button{
            background-color: $brand-color;
            margin-top: 30px;
            padding: 20px 30px ;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;

            &:hover{
                background-color: $brand-light-color;
            }
        }
    }
}


.dots{
    margin-top: 300px;
}

.dot{
    color: white;
    padding: 5px;
}

</style>