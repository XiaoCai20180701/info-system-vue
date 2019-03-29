<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" :width="414" :height="200"/>
      </van-swipe-item>
    </van-swipe>
    <van-row class="home-cell">
      <van-col span="8" class="center" v-for="(item,index) in cols" :key="index">
        <router-link :to="item.router">
          <span>{{item.title}}</span>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        images: [
          'http://img4.imgtn.bdimg.com/it/u=1613956431,2718453929&fm=26&gp=0.jpg',
          'http://img5.imgtn.bdimg.com/it/u=1019556629,1997215440&fm=26&gp=0.jpg'
        ],
        cols: [
          {
            title: '新闻资讯',
            router: {name: 'news-list'}
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-cell {
    margin: 20px 0
  }
  .center {
    text-align: center;
  }
</style>
