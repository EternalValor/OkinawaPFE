<template>
  <div id="app">
    <Header/>
   <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
let fire =firebase.initializeApp({
  apiKey: "AIzaSyBMLpb8yM_5POloefGolz6CcctLyQWSBlw",
  authDomain: "okinawa-89865.firebaseapp.com",
  databaseURL: "https://okinawa-89865.firebaseio.com",
  projectId: "okinawa-89865",
  storageBucket: "okinawa-89865.appspot.com",
  messagingSenderId: "263281679857"
})

let db = fire.database()
window.db=db;
import Header from "./components/Header"

export default {
  components:{
    Header
  },
   firebase:{
    posts:db.ref('/posts')
  },
  mounted(){
     this.$firebaseRefs.posts.on('value',(snap)=>{
       if(snap.val()){
        let data = Object.values(snap.val());
        this.$store.commit('setPosts',snap.val());
        let compPosts = data.filter(p=>p.type=='Competition');
        this.$store.commit('setCompPosts',compPosts);
        let stagePosts = data.filter(p=>p.type=='Stage');
        this.$store.commit('setStagePosts',stagePosts);
       }
    
    })
  }
}

</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

html{
  font-size: 62.5%;
  box-sizing: border-box;
}

body{
  font-size: 1.6rem !important;
  background: rgb(241, 241, 241) !important;
  font-family: 'Open Sans', sans-serif !important;
}
input,textarea,.form-control{
  font-size: 1.6rem !important;
}
.btn{
  font-size: 1.6rem;
}
.page{
  animation-duration: .5s !important;
}
</style>

