<template>
    <section class="students-reviews">
        <div class="container-lg">
            <div class="row d-flex flex-column align-items-center">
                <img src="../../../public/students-reviews/instructor-img-6.jpg" alt="student">
                <p class="student-review">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat harum cumque quo ipsum obcaecati repudiandae, nihil consequatur et laboriosam expedita laborum! Labore accusantium quia fugit quis delectus et minima aut quibusdam maiores commodi incidunt, accusamus illum!"</p>
                <p class="student-name">Joan Collins</p>
                <p class="dots">
                    <span class="dot"><font-awesome-icon :icon="['far', 'circle']" /></span>
                    <span class="dot"><font-awesome-icon :icon="['fas', 'circle']" /></span>
                    <span class="dot"><font-awesome-icon :icon="['far', 'circle']" /></span>
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.students-reviews{
    // background-color: $brand-color;
    background-image: url('../../../public/students-reviews/interactive-map-slider-img-1.png');
    background-color: $brand-color;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 300px;
    padding: 200px 0;
    color: white;

    img{
        border-radius: 999px; 
        width: 200px;
        display: block;
    }

    .student-review{
        font-size: 20px;
        margin-top: 30px;
        line-height: 30px;
        width: 50%;
        text-align: center;
    }

    .student-name{
        font-size: 20px;
        margin-top: 30px;
    }

    .dots{
        margin-top: 100px;

        .dot{
            padding: 5px;
            color: $brand-light-color;
        }
    }

}
</style>