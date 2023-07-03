<template>
    <div v-if="movies.length > 0">
        <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
    components: { MovieCard },
    props: {
        movies: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped lang="sass"></style>
