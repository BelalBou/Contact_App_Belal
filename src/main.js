import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import "vue3-toastify/dist/index.css";
import Toast from "vue3-toastify";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Toast, {
  autoClose: 3000,
});

app.mount("#app");
