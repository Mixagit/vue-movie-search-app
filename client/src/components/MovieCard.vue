<template>
    <div class="movie" @click="$router.push(`/movies/${movie.id}`)">
        <div class="name">{{ movie.name }}</div>
        <div class="desc">{{ movie.description }}</div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped lang="sass">
.movie
    padding: 15px
    border: 1px solid black
    margin-top: 15px
    cursor: pointer
    .name
        font-size: 20px
        font-weight: bold
</style>
