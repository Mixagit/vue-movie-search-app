<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import MovieList from "@/components/MovieList.vue";

export default {
    components: { MovieList },
    data() {
        return {
            moviesTest: "",
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
    },
    mounted() {
        this.fetchMovies();
    },
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
            @change="setSelectedSort($event.target.value)"
        >
            <option disabled value="">Выберите из списка</option>
            <option
                v-for="option in sortOptions"
                :key="option.value"
                :value="option.value"
            >
                {{ option.name }}
            </option>
        </select>
        <MovieList :movies="sortedAndSearchedMovies" />
        <div>oru</div>
        <div class="page__wrapper">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
                :class="{
                    'current-page': page === pageNumber,
                }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
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
.page__wrapper
  display: flex
  margin-top: 15px
.page
  border: 1px solid black
  padding: 10px
.current-page
  border: 2px solid teal
</style>
