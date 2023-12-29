import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/admin',
            component: () => import('../views/Admin.vue'),
            redirect: '/admin/home',
            children: [
                {
                    path: 'info',
                    name: '员工信息',
                    component: () => import('../views/Information.vue')
                },
                {
                    path: 'analytics',
                    name: '统计分析',
                    component: () => import('../views/Analytics.vue')
                },
                {
                    path: 'dormitory',
                    name: '宿舍管理',
                    component: () => import('../views/Dormitory.vue')
                },
                {
                    path: 'modify',
                    name: '信息修改',
                    component: () => import('../views/Modify.vue')
                },
                {
                    path: 'search',
                    name: '信息查询',
                    component: () => import('../views/Search.vue')
                },
                {
                    path: 'salary',
                    name: '工资管理',
                    component: () => import('../views/Salary.vue')
                },
                {
                    path: 'entry',
                    name: '员工入职',
                    component: () => import('../views/Entry.vue')
                },
                {
                    path: 'dimission',
                    name :'员工离职',
                    component: () => import('../views/Dimission.vue')
                },
                {
                    path: 'attendance',
                    name: '考勤管理',
                    component: () => import('../views/Attendance.vue')
                },
                {
                    path : 'train',
                    name: '培训管理',
                    component: () => import('../views/Train.vue')
                },
                {
                    path: 'home',
                    name: '首页',
                    component: () => import('../views/Home.vue')
                }
            ]
        }
    ]
})

export default router