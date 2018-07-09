<template>
<div>
  <div class="head">
  <h1>Welcome Admin</h1>
   <button class="btn btn-success" @click="createPost">Creer un nouveau Post</button>
  </div>
    <table v-if="posts.length!==0" class="table animated fadeIn">
  <thead>
    <tr>
      <th scope="col">Titre</th>
      <th scope="col">Image</th>
      <th scope="col">Type</th>
      <th scope="col">Text</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="p in posts" :key="p.key">
      <td>{{p.title}}</td>
      <td><img :src="p.image" alt=""></td>
      <td>{{p.type}}</td>
      <td>{{p.text}}</td>
      <td><button @click.prevent="editPost(p)" class="btn btn-info">Update</button></td>
      <td><button @click.prevent="deletePost(p)" class="btn btn-danger">Delete</button></td>

    </tr>
  </tbody>
</table>
</div>
  
</template>

<script>

export default {

computed:{
  posts(){
    let posts = Object.values(this.$store.state.posts);
    let keys=Object.keys(this.$store.state.posts);
    for(let i=0;i<posts.length;i++){
      posts[i].key = keys[i];
    }

    return posts;
  }
},

methods:{
  deletePost(p){
    db.ref(`/posts/${p.key}`).remove();
  },
  editPost(post){
    this.$router.push({name:'edit',params:{ogPost:post}});
  },
  createPost(){
    this.$router.push('/addPost');
  },
   
}
}
</script>


<style lang="scss" scoped>
.head{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  h1{
    padding: 2rem 0;
  }
}
.btn{
  font-size: 1.6rem !important;
}
img{
  width: auto;
  height: 100px;
}
table{
  width: 80% !important;
  margin: 0 auto !important;
}
th,td{
  text-align: center !important;
      border: 1px solid #dee2e6 !important;
      vertical-align: middle !important;
}
</style>


