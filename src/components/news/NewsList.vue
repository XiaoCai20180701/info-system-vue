<template>
  <div>
    <van-nav-bar
      title="新闻列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      class="nav-bar-fixed"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
      class="news-list"
    >
      <div class="item"
        v-for="(item, index) in list"
        :key="item"
        center
      >
        <van-row class="row">
          <van-col :span="5">
            <img :src="item.imageURL" :width="60" class="news-item-img"/>
          </van-col>
          <van-col :span="18" offset="1" >
            <div class="custom-text">{{item.title + (index+1)}}</div>
            <van-row class="news-item-subtitle">
              <van-col :span="9">点击数：{{item.count}}</van-col>
              <van-col :span="15">发表时间：{{item.time}}</van-col>
            </van-row>
          </van-col>
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
            title: '新闻标题',
            count: 5,
            time: '2019-01-08',
            imageURL: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'
          }
        ],
        loading: false,
        error: false,
        finished: false
      }
    },
    methods: {
      onLoad () {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              title: '新闻标题',
              count: 9,
              time: '2019-03-08',
              imageURL: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'
            })
            console.log(this.list)
          }
          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true
          }
        }, 500)
        // 若数据加载失败，执行下面代码
        // fetchSomeThing().catch(() => {
        //  this.error = true;
        // })
      },
      onClickLeft () {

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
  .news-list {
    margin-top: 98px;
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
  .nav-bar-fixed {
    margin-top: 46px;
  }
</style>
