<template>
  <div class="main">
    <Stage/>
      <!-- <h1 class="main_head">Blog Posts</h1> -->
    <div class="blog">
      <Post v-for="p in $store.state.posts" :key="p.title" :post="p"/>
     
    </div>
  </div>
</template>

<script>
import Post from "./Post"
import Stage from "./Stage"


export default {
  components:{
    Post,
    Stage
  }
}
</script>


<style lang="scss" scoped>
.main{
  width: 100%;

  &_head{
    padding: 5rem ;
    color: hsl(0, 0%, 15%);
    text-transform: uppercase;
  }
}
.blog{
  text-align: center;
  margin: 5rem auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
}


</style>


