import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from "../store";
import {ElMessage} from "element-plus";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/login',
            meta: {requiresAuth: false}
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue'),
            meta: {requiresAuth: false}
        },
        {
            path: '/admin',
            component: () => import('../views/Admin.vue'),
            redirect: '/admin/info',
            children: [
                {
                    path: 'info',
                    name: '员工信息',
                    component: () => import('../views/Information.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'analytics',
                    name: '统计分析',
                    component: () => import('../views/Analytics.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'dormitory',
                    name: '宿舍管理',
                    component: () => import('../views/Dormitory.vue'),
                    meta: {requiresAuth: true}

                },
                {
                    path: 'modify',
                    name: '信息修改',
                    component: () => import('../views/Modify.vue'),
                    meta: {requiresAuth: true}

                },
                {
                    path: 'search',
                    name: '信息查询',
                    component: () => import('../views/Search.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'salary',
                    name: '工资管理',
                    component: () => import('../views/Salary.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'entry',
                    name: '员工入职',
                    component: () => import('../views/Entry.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'dimission',
                    name: '员工离职',
                    component: () => import('../views/Dimission.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'attendance',
                    name: '考勤管理',
                    component: () => import('../views/Attendance.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'training',
                    name: '培训管理',
                    component: () => import('../views/Training.vue'),
                    meta: {requiresAuth: true}
                },
                {
                    path: 'home',
                    name: '首页',
                    component: () => import('../views/Home.vue'),
                    meta: {requiresAuth: true}
                }
            ]
        },
        {
            path: '/staff',
            component: () => import('../views/Staff.vue'),
            meta: {requiresAuth: true}
        }
    ]
})


router.beforeEach((to, _, next) => {
    const store = useUserStore();
    if (to.meta.requiresAuth && !store.isLoggedIn && to.path !== '/login') {
        ElMessage.warning('请先登录');
        next('/login');
/*    } else if (store.type === 'USER' && to.path.startsWith('/admin')) {
        next('/staff')*/
    } else {
        next();
    }
});

export default router