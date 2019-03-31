<template>
  <div>
    <nav-bar title="新闻列表"/>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
      class="news-list content-top"
    >
      <div class="item content-bottom"
        v-for="item in newsList"
        :key="item.id"
        center
      >
        <van-row class="row">
          <router-link :to="{name: 'news-detail',query: {id: item.id}}">
            <van-col :span="5">
              <img :src="item.img_url" :width="60" class="news-item-img"/>
            </van-col>
            <van-col :span="18" offset="1" >
              <div class="custom-text">{{item.title}}</div>
              <van-row class="news-item-subtitle">
                <van-col :span="9">点击数：{{item.click_count}}</van-col>
                <van-col :span="15">发表时间：{{item.publish_time | dateFormat('YYYY-MM-DD') }}</van-col>
              </van-row>
            </van-col>
          </router-link>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
  export default {
    name: 'news-list',
    data () {
      return {
        list: [
          {
            id: 0,
            title: '新闻标题',
            count: 5,
            time: '20190109',
            imageURL: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'
          }
        ],
        newsList: [],
        loading: false,
        error: false,
        finished: false
      }
    },
    created () {
      this.getNewsList()
    },
    methods: {
      onLoad () {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              id: i,
              title: '新闻标题',
              count: 9,
              time: '20190308',
              imageURL: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'
            })
          }
          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true
          }
        }, 500)
        // 若数据加载失败，执行下面代码
        // })
      },
      getNewsList () {
        this.$axios.get('getNewsList')
          .then(res => {
            let list = res.data
            this.newsList = list
            console.log(res)
          })
          .catch(err => console.log('新闻列表获取失败', err))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 10px 15px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 24px;
    position: relative;
    background-color: #fff;
    color: #323233;
    font-size: 14px;
    overflow: hidden;
    border-bottom: 1px solid #ebedf0;
  }
  .row {
    width: 100%;
  }
  .news-item-img {
    vertical-align: top;
  }
  .news-item-subtitle {
    margin-top: 5px;
    font-size: 12px;
    line-height: 20px;
    color: #1989fa;
  }
</style>
