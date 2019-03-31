// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/global.css'
import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Row, Col, List, Card, Cell, CellGroup } from 'vant'
import MyNavBar from '@/components/common/NavBar'
import * as filters from './filters'
// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false // 配置生产或开发环境

// 使用过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Row).use(Col)
Vue.use(List)
Vue.use(Card)
Vue.use(Cell).use(CellGroup)

Vue.component(MyNavBar.name, MyNavBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
