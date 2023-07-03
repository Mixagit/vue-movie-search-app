<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import MovieList from "../components/MovieList.vue";
export default {
    components: { MovieList },
    data() {
        return {
            tests: "",
        };
    },
    methods: {
        ...mapMutations({
            setMovies: "movie/setMovies",
            setSearchQuery: "movie/setSearchQuery",
            setSelectedSort: "movie/setSelectedSort",
        }),
        ...mapActions({
            loadMoreMovies: "movie/loadMoreMovies",
            fetchMovies: "movie/fetchMovies",
        }),
        createMovie(movie) {
            this.movies.push(movie);
            this.dialogVisible = false;
        },
        removeMovie(movie) {
            this.movies = this.movies.filter((p) => p.id !== movies.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    // mounted() {
    //     this.fetchMovies();
    // },
    computed: {
        ...mapState({
            movies: (state) => state.movie.movies,
            isMoviesLoading: (state) => state.movie.isMoviesLoading,
            selectedSort: (state) => state.movie.selectedSort,
            searchQuery: (state) => state.movie.searchQuery,
            page: (state) => state.movie.page,
            limit: (state) => state.movie.limit,
            totalPages: (state) => state.movie.totalPages,
            sortOptions: (state) => state.movie.sortOptions,
        }),
        ...mapGetters({
            sortedMovies: "movie/sortedMovies",
            sortedAndSearchedMovies: "movie/sortedAndSearchedMovies",
        }),
    },
};
</script>

<template>
    <div class="container">
        <h1 class="header">Список фильмов</h1>
        <input
            :value="searchQuery"
            @input="setSearchQuery($event.target.value)"
            placeholder="Поиск...."
        />
        <select
            :value="selectedSort"
            @change="setSelectedSort"
            :options="sortOptions"
        />
        <MovieList :movies="sortedAndSearchedMovies" v-if="!isPostsLoading" />
    </div>
</template>

<style scoped lang="sass">
.container
    margin: 100px
    text-align: center
.movie
    padding: 15px
    border: 1px solid black
    margin-top: 15px
</style>
