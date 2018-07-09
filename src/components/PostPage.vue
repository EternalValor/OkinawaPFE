<template>
  <div v-if="post" class="center">
    <h1 class="title">{{post.title}}</h1>
    <div class="img">
      <img :src="post.image" alt="">
    </div>
    <div class="text">
      <p>{{post.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['post'],
  mounted(){
    if(!this.post){
      db.ref('/posts').on('value',snap=>{
        let x= Object.values(snap.val());
      console.log(x);
      this.post=x.filter(post=>post.title==this.$route.params.title)[0];
      console.log(this.post);
      })
      
    }
  }
}
</script>

<style lang="scss" scoped>
.center{
  width: 80%;
  // background: white;
  margin: 2rem auto;
  text-align: center;
  
}

h1{
  margin: 1rem;
}

.img{
  width: 100%;
  height: 100%;
  img{
    // width: 100%;
    // height: auto;
    display: block;
    margin: 0 auto;
  }
}
</style>


