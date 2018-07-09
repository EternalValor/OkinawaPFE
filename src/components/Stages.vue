<template>
  <div class="page animated fadeIn">
    <Banner :text="'Stage'" :subText="' '" :src="src"/>
    <Feed :posts="posts"/>
  </div>
</template>

<script>
import Banner from "./Banner";
import Feed from "./Feed";
const Image = require('../assets/img/Stage.jpg')

export default {
  components:{
    Banner,
    Feed
  },
  data(){
    return{
      src:Image
    }
  },
  computed:{
    posts(){
      return this.$store.state.stagePosts;
    }
  }
}
</script>

