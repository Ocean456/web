import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/admin/info'
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/admin',
            component: () => import('../views/Admin.vue'),
            children: [
                {
                    path: 'info',
                    component: () => import('../views/Information.vue')
                },
                {
                    path: 'analytics',
                    component: () => import('../views/Analytics.vue')
                },
                {
                    path: 'dormitory',
                    component: () => import('../views/Dormitory.vue')
                },
                {
                    path: 'modify',
                    component: () => import('../views/Modify.vue')
                },
                {
                    path: 'search',
                    component: () => import('../views/Search.vue')
                },
                {
                    path: 'salary',
                    component: () => import('../views/Salary.vue')
                },
                {
                    path: 'position',
                    component: () => import('../views/Position.vue')
                }
            ]
        }
    ]
})

export default router