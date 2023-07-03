export const movieModule = {
    state: () => ({
        movies: [
            { id: 1, name: "movie 2", desc: "desc 5" },
            { id: 2, name: "movie 1", desc: "desc 4" },
            { id: 3, name: "movie 5", desc: "desc 1" },
            { id: 4, name: "movie 3", desc: "desc 3" },
            { id: 5, name: "movie 6", desc: "desc 2" },
            { id: 6, name: "movie 4", desc: "desc 6" },
        ],
        isMoviesLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            { value: "name", name: "По названию" },
            { value: "desc", name: "По описанию" },
        ],
    }),
    getters: {
        sortedMovies(state) {
            return [...state.movies].sort((movie1, movie2) =>
                movie1[state.selectedSort]?.localeCompare(
                    movie2[state.selectedSort]
                )
            );
        },
        sortedAndSearchedMovies(state, getters) {
            return getters.sortedMovies.filter((movie) =>
                movie.name
                    .toLowerCase()
                    .includes(state.searchQuery.toLowerCase())
            );
        },
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        },
        setLoading(state, bool) {
            state.isMoviesLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchMovies({ state, commit }) {
            try {
                commit("setLoading", true);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit("setMovies", response.data);
            } catch (e) {
                console.log(e);
            } finally {
                commit("setLoading", false);
            }
        },
        async loadMoreMovies({ state, commit }) {
            try {
                commit("setPage", state.page + 1);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit("setMovies", [...state.movies, ...response.data]);
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true,
};
