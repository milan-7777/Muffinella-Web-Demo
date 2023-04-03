import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/womansday',
      name: 'womansday',
      component: () => import('../views/WomansDayView.vue')
    },
    {
      path: '/valentinesday',
      name: 'valentinessday',
      component: () => import('../views/ValentinesDayView.vue')
    },
    {
      path: '/newyear',
      name: 'newyear',
      component: () => import('../views/NewYearView.vue')
    },
    {
      path: '/halloween',
      name: 'halloween',
      component: () => import('../views/HalloweenView.vue')
    },
    {
      path: '/easter',
      name: 'easter',
      component: () => import('../views/EasterView.vue')
    },
    {
      path: '/themecupcakes',
      name: 'themecupcakes',
      component: () => import('../views/ThemeCupcakesView.vue')
    },
    

  ]
})

export default router
