import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "About",
            component: AboutView,
        }
    ] 
})

createApp(App).use(router).mount('#app')
