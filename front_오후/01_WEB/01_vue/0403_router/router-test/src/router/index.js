import { createRouter, createWebHistory } from 'vue-router';

/**
 * 라우터 생성
 * createRouter()
 * - 라우터 인스턴스 생성 메소드
 * - 인자로 history, routes 필요
 *
 * history : 라우터 인스턴스에 전달되는 브라우저 히스토리 인스턴스
 * routes : 라우트 정보가 담긴 배열
 *
 */
const routes = [
  {
    path: '/',
    // 지연 로딩 적용!
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/members',
    component: () => import('@/pages/Members.vue'),
  },
  {
    path: '/members/:id',
    component: () => import('@/pages/MemberInfo.vue'),
  },
  {
    path: '/videos',
    component: () => import('@/pages/Videos.vue'),
  },
  {
    path: '/students',
    component: () => import('@/pages/Students.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
