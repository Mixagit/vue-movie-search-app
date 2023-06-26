import { createApp } from "vue";

import router from "./router/router";
import store from "./store";

import "./style.sass";
import App from "./App.vue";

const app = createApp(App);

app.use(router).use(store).mount("#app");
