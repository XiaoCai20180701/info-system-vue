<template>
  <div>
    <nav-bar title="新闻详情"/>
    <div class="content-top ">
      <div v-for="(item, index) in details" :key="index" class="news-detail-content content-bottom">
        <h3 class="title">{{item.title}}</h3>
        <van-row>
          <van-col :span="6"><small>{{item.click_count}}次点击</small></van-col>
          <van-col :span="8"><small>分类：民生经济</small></van-col>
          <van-col :span="9"><small>添加时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</small></van-col>
        </van-row>
        <div class="news-detail-text" v-html="item.v_html"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news-detail',
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
