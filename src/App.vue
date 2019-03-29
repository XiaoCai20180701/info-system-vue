<template>
  <div id="app">
    <van-nav-bar
      title="信息系统"
      fixed
      class="nav-top-bar"
    />
    <router-view class="content" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/VIP">会员</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" to="/Shopcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/Search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        active: 0
      }
    },
    watch: {
    },
    mounted: function () {
      let name = this.$router.history.current.name
      if (name === 'vip') {
        this.active = 1
      } else if (name === 'shopcart') {
        this.active = 2
      } else if (name === 'search') {
        this.active = 3
      } else {
        this.active = 0
      }
    }
  }
</script>

<style>
  .content {
    margin-top: 46px;
  }
  .nav-top-bar {
    background: #1989fa;
  }
  .nav-top-bar .van-nav-bar__title {
    color: #fff;
  }
</style>
