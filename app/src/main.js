import { createApp } from "vue";
import store from "./store";
import "./style.sass";
import App from "./App.vue";

const app = createApp(App);

app.use(store).mount("#app");
