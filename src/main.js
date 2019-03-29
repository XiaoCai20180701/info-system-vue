// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Row, Col, List, Card, Cell, CellGroup } from 'vant'

// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false // 配置生产或开发环境

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Row).use(Col)
Vue.use(List)
Vue.use(Card)
Vue.use(Cell).use(CellGroup)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
