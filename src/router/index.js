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
    component: () => import('@/views/Login')
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      }, {
        path: '/house',
        component: () => import('@/views/House')
      },
      {
        path: '/real',
        component: () => import('@/views/Real')
      },
      {
        path: '/my',
        component: () => import('@/views/My')
      },
      {
        path: '/map',
        component: () => import('@/views/Map')
      }

    ]
  },
  {
    path: '/collection',
    component: () => import('@/views/My/Collection')
  },
  {
    path: '/newpage',
    component: () => import('@/views/My/Newpage')
  },
  {
    path: '/myrent',
    component: () => import('@/views/Myrent')
  }
]

const router = new VueRouter({
  routes
})

export default router
