import { createStore } from "vuex";
import { movieModule } from "./movieModule";

export default createStore({
    modules: {
        movie: movieModule,
    },
});
