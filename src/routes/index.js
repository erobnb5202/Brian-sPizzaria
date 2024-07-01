import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage.vue";
import Products from "../components/Products.vue";
import Aboutus from "../components/Aboutus.vue";
import Contactus from "../components/Contactus.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: Aboutus,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: Contactus,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router