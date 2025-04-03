import BusinessPage from '@/views/BusinessPage.vue'
import IntroPage from '@/views/IntroPage.vue'
import HomePage from '@/views/HomePage.vue'
import SponsorPage from '@/views/SponsorPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import AboutPage from '@/views/subpage/AboutPage.vue'
import TransManagementPage from '@/views/subpage/TransManagement.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/intro',
    name: 'intro',
    component: IntroPage,
    children: [
      { path: 'about', name: 'about', component: AboutPage },
      { path: 'transManagement', name: 'transManagement', component: TransManagementPage },
    ],
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessPage,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: SponsorPage,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 배포 시점에 사용할 URL을 사용
  routes,
})

export default router
