import { createRouter, createWebHistory } from "vue-router"
import Form from "../views/ReqForm.vue"
import Home from "../views/HomePage.vue"
import About from "../views/About.vue"

const routes = [
    {
        path: "/form",
        name: "Form",
        component: Form
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router