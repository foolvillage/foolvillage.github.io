const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/photo",
        component: Photo
    },
    {
        path: "/about",
        component: About
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount("#app")