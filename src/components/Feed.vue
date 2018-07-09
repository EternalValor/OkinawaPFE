<template>
  <div class="feed animated fadeIn">
    <Post :post="post" v-for="post in posts" :key="post['_key']" />
  </div>
</template>

<script>
import Post from "./Post";
export default {
  props:['posts'],
  mounted(){
    console.log(this.posts);
  },
  components:{
    Post
  },

}
</script>


<style lang="scss" scoped>
.feed{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>


