import Comments from '../comments.vue'
import Login from '../login.vue'
import Logout from '../logout.vue'

import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: Comments },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;