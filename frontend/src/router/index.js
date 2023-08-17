// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    component:()=> import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        component: () => import('@/views/Login.vue'),
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
  },
  {
    path: '/tutor',
    component:()=> import('@/layouts/TutorLayout.vue'),
    children: [
      {
        path: '',
        component:()=> import('@/views/tutor/Dashboard.vue'),
      },
      {
        path: 'dashboard',
        component:()=> import('@/views/tutor/Dashboard.vue'),
      },
      {
        path: 'messages',
        component:()=> import('@/views/tutor/Messages.vue'),
      },
      {
        path: 'classes',
        component:()=> import('@/views/tutor/Classes.vue'),
      },
      {
        path: 'calender',
        component:()=> import('@/views/tutor/Calender.vue'),
      },
      {
        path: 'students',
        component:()=> import('@/views/tutor/Students.vue'),
      },
      {
        path: 'reports',
        component:()=> import('@/views/tutor/Reports.vue'),
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
