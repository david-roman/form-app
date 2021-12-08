import { createRouter, createWebHistory } from "vue-router"
import Form from "../views/ReqForm.vue"
import Home from "../views/HomePage.vue"
import About from "../views/About.vue"
import Results from "../views/Results.vue"


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
    },
    {
        path: "/results",
        name: "Results",
        component: Results,
        props: route => (route.query)
    }
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router