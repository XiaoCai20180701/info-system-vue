<template>
  <div>
    <nav-bar title="图文分享" />
    <div class="content-top">
      <!-- 上有图文分类 -->
      <div class="link-title">
        <router-link v-for="(item, index) in categoryList" :key="index" :to="{name: 'photo-list', params: {categoryId: item.id}}">
          {{item.name}}
        </router-link>
      </div>
      <!-- 下有对应的图文列表 -->
      <div class="content-bottom">
        <div v-for="(item, index) in photoList" :key="index" class="photo-item">
          <router-link :to="{name: 'photo-detail'}">
            <img :src="item.img_url" class="photo-item-img"/>
            <p class="photo-text">{{item.text}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'photo-list',
    data () {
      return {
        photoList: [],
        categoryList: []
      }
    },
    beforeRouteUpdate (to, from, next) {
      // 路由复用，但参数(query||params)改变触发
      //  console.log(to)
      this.getPhotoList(to.params.categoryId)
      next()
    },
    created () {
      this.getCategoryList()
      let categoryId = this.$route.params.categoryId
      this.getPhotoList(categoryId)
    },
    methods: {
      getPhotoList (categoryId) {
        this.$axios.get('getPhotoList/' + categoryId)
          .then(res => {
            this.photoList = res.data.list
          })
          .catch(err => console.log('图文列表获取失败', err))
      },
      getCategoryList () {
        this.$axios.get('getCategoryList')
          .then(res => {
            console.log('4444', res)
            this.categoryList = res.data
          })
          .catch(err => console.log('图文分类获取失败', err))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .photo-item {
    position: relative;
  }
  .photo-text {
    position: absolute;
    bottom: 0;
    margin: 0;
    width: 100%;
    padding: 10px;
    background: rgba(255,255,255,0.3);
  }
  .photo-item-img {
    width: 100%;
    height: 200px;
  }
  .link-title {
    padding: 0 15px;
    margin: 5px 0 10px;
    white-space: nowrap;
    overflow-x: scroll;
  }
  .link-title a {
    margin: 0 10px;
  }
</style>
