import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryView from '@/views/CountryView.vue'
import ExperienceDetailView from '@/views/ExperienceDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/country/:id',
      name: 'country',
      component: CountryView,
      children: [
        {
          path: 'experience/:exp',
          name: 'experience',
          component: ExperienceDetailView,
        },
      ],
    },
  ],
})

export default router
