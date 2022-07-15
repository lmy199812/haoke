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
      },
      {
        path: '/fujian',
        name: 'fujian',
        component: () => import('@/components/FuJian'),
        children: [
          {
            path: '/collection',
            name: 'collection',
            component: () => import('@/views/Collection')
          },
          {
            path: '/lease',
            name: 'lease',
            component: () => import('@/views/Lease')
          },
          {
            path: '/recode',
            name: 'recode',
            component: () => import('@/views/Recode')
          }, {
            path: '/homeone',
            name: 'homeone',
            component: () => import('@/views/Homeone')
          },
          {
            path: '/personal',
            name: 'personal',
            component: () => import('@/views/Personal')
          }, {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/Contact')
          }
        ]

      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
