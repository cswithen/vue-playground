import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App";
import { store } from "./store";

// components for routes
import AuthHandler from "./components/AuthHandler";

const routes = [{ path: "/oauth2/callback", component: AuthHandler }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
