// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component:()=> import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component:()=> import('@/views/Login.vue')
      },
      {
        path: 'register',
        component:()=> import('@/views/Registration.vue')
      },
      {
        path: 'reset',
        component:()=> import('@/views/ResetPass.vue')
      },
    ]
  },
  {
    path: '/student',
    component:()=> import('@/layouts/StudentLayout.vue'),
    children: [
      {
        path: '',
        component:()=> import('@/views/student/Dashboard.vue'),
      },
      {
        path: 'dashboard',
        component:()=> import('@/views/student/Dashboard.vue'),
      },
      {
        path: 'messages',
        component:()=> import('@/views/student/Messages.vue'),
      },
      {
        path: 'reports',
        component:()=> import('@/views/student/Reports.vue'),
      },
      {
        path: 'classes',
        component:()=> import('@/views/student/Classes.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
