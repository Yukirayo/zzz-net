import { createRouter, createWebHistory } from 'vue-router'
import Articles from '@/components/article/Articles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles',
      component: Articles
    },
    {
      path: '/dariy',
      name: 'dariy',
      component: () => import('../components/dariy/Dariy.vue')
    },
    {
      path: '/push',
      name: 'push',
      component: () => import('../components/article/PushArticle.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../components/user/User.vue')
    }
  ]
})

export default router
