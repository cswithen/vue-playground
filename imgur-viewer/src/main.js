import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App";
import { store } from "./store";

// components for routes
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

const routes = [
  { path: "/oauth2/callback", component: AuthHandler },
  { path: "/upload", component: UploadForm },
  { path: "/", component: ImageList },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
