<template>
  <div @click="gotoPost(post)" class="post animated fadeIn">
    <div class="title">
      <h1>{{post.title}}</h1>
    </div>
    <div class="img">
      <img :src="post.image">
    </div>
    <div class="text">
    <p>{{shorten(post.text,130)}}</p>
    </div>
  </div>
</template>


<script>
import {shorten} from "../helpers.js"
export default {
  props:['post'],
  methods:{
    shorten,
    gotoPost(post){
      this.$router.push({name:'postPage',params:{post,title:post.title}})
    }
  }
  
}
</script>

<style lang="scss" scoped>
.post{
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  transition: 0.3s;
  text-align: center;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: calc(100%/3 - 2rem);
  margin:1rem;
  height: 500px;
  border: 1px solid lightgray;  
  display: flex;
  flex-direction: column;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text{
    background: whitesmoke;
    padding: 2rem;
    height: 20%;
    display: flex;
  border-radius: 4px;

    align-items: center;
    justify-content: center;
    p{
      font-size: 1.8rem !important;
    }
  }
  .title{
  border-radius: 4px;

        background: rgb(26, 25, 25);
    color: white;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img{
    
    transition: all .3s;
    cursor: pointer;
    // padding: .7rem;
    border-radius: 6px;
    // background: #F3F6FA;
    // border: 1px solid lightgray;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .post { 
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
}
</style>

