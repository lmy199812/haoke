import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'layout'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      }, {
        path: '/house',
        name: 'house',
        component: () => import('@/views/House')
      },
      {
        path: '/real',
        name: 'real',
        component: () => import('@/views/Real')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/My')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
