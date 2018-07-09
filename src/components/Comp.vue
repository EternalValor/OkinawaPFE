<template>
  <div class="page animated fadeIn">
    <Banner :text="'Competition'" :subText="''" :src="src"/>
    <Feed :posts="posts"/>
  </div>
</template>

<script>
import Banner from "./Banner"
import Feed from "./Feed"
const Image = require('../assets/img/cmp.jpg')


export default {
   data(){
    return{
      src:Image
    }
  },
  components:{
    Banner,
    Feed
  },
  computed:{
    posts(){
      return this.$store.state.compPosts;
    }
  }
}
</script>

