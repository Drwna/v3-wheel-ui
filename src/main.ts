import "./index.scss";
import "./lib/wheel.scss";
import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./router";
import 'github-markdown-css/github-markdown-light.css';
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component('Markdown',Markdown);
