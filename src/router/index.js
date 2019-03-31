import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Search from '@/components/search/Search'
import Shopcart from '@/components/shopcart/Shopcart'
import VIP from '@/components/vip/VIP'
import NewsList from '@/components/home/news/NewsList'
import NewsDetail from '@/components/home/news/NewsDetail'
import PhotoList from '@/components/home/photo/PhotoList'
import PhotoDetail from '@/components/home/photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/VIP',
      name: 'vip',
      component: VIP
    },
    {
      path: '/news/list',
      name: 'news-list',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'news-detail',
      component: NewsDetail
    },
    {
      path: '/photo/list/:categoryId',
      name: 'photo-list',
      component: PhotoList
    },
    {
      path: '/photo/detail',
      name: 'photo-detail',
      component: PhotoDetail
    }
  ]
})
