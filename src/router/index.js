import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import First from '../views/First.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/first',
        name: 'first',
        component: First
      },
  ]
})

export default router