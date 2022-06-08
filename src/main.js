import { createApp } from 'vue';
import App from './App.vue';

import jQuery from "jquery";
import "./assets/css/style.css";
const $ = jQuery;
window.$ = $;

const app = createApp(App);
app.mount('#app')
