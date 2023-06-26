import { createStore } from "vuex";
import { testModule } from "./testModule";

export default createStore({
    modules: {
        test: testModule,
    },
});
