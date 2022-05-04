import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash, History
  // https://google.com/#/search
  // 이런 형태로 해시태그를 붙인다, Hash 모드를 사용해야만 
  // 특정 페이지에서 새로고침 했을 때 페이지를 찾을 수 없다 라는 메시지 방지 가능
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },

  // pages 구분해주는 역할
  routes: [
    {
      // 페이지를 구분해주는 각각의 경로
      // https://google.com/
      // 이런 경우, 메인페이지로 이동하였을 때, 어떠한 component로 이동할 것인지 설정
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      // https://google.com/about
      // 해당 페이지로 이동하였을 때, 보여질 component
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})