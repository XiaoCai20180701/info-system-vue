<template>
  <div>
    <nav-bar title="图文详情"/>
    <div class="content-top ">
      <div v-for="(item, index) in details" :key="index" class="photo-detail-content content-bottom">
        <h3 class="title">{{item.title}}</h3>
        <van-row>
          <van-col :span="6"><small>{{item.click_count}}次浏览</small></van-col>
          <van-col :span="7"><small>分类：民生经济</small></van-col>
          <van-col :span="10"><small>发起时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</small></van-col>
        </van-row>
        <div class="photo-detail-text">
          <van-row>
            <van-col :span="8"><img src="https://img.yzcdn.cn/2.jpg"/></van-col>
            <van-col :span="8"><img src="https://img.yzcdn.cn/2.jpg"/></van-col>
            <van-col :span="8"><img src="https://img.yzcdn.cn/2.jpg"/></van-col>
          </van-row>
          <van-button type="default" @click="openImagePreview">默认按钮</van-button>
          <div v-html="item.v_html"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ImagePreview } from 'vant'
  export default {
    name: 'photo-detail',
    data () {
      return {
        details: []
      }
    },
    created () {
      // 获取路由查询字符串参数id
      // let id = this.$route.query.id
      this.getNewsDetail()
    },
    methods: {
      getNewsDetail () {
        this.$axios.get('getNewsDetail')
          .then(res => {
            this.details = res.data
          })
          .catch(err => console.log('', err))
      },
      openImagePreview () {
        ImagePreview({
          images: [
            'https://img.yzcdn.cn/1.jpg',
            'https://img.yzcdn.cn/2.jpg'
          ],
          startPosition: 1,
          onClose () {
            // do something
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 100%
  }
</style>
