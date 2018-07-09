<template>
<div class="wrap">
  <div class="center">
    <div class="container-fluid">
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Titre</label>
    <input v-model="post.title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titre">
  </div>
  <div class="form-group">
    <label  for="upload">Choisir une image</label>
    <br>
    <input @change="imagePicked" ref="filebox" style="display:none" type="file" id="upload">
    <button @click.prevent="chooseIMG" class="btn btn-danger">Ajouter Image</button>
  </div>
    <img v-if="post.image" :src="post.image" alt="">
    
  <div class="form-group">
    <label for="exampleFormControlSelect1">Selection de type</label>
    <select v-model="post.type" name="type" class="custom-select">
      <option selected>Stage</option>
      <option >Competition</option>
  </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Text</label>
    <textarea v-model="post.text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button :disabled="post.title==''" @click.prevent="updatePost" class="btn btn-success">Confirmer</button>
  <i v-if="state=='saving'" class="fa  fa-gear fa-spin"></i>
  <span v-if="state=='saving'">Updating Post ...</span>
  <span class="saved" v-if="state=='saved'">Post Updated</span>
</form>
    </div>
  </div>

</div>
</template>


<script>
import compressImage from "browser-compress-image";


export default {

  props:['ogPost'],

  data(){
    return{
      post:{
        title:'',
        text:'',
        type:'',
        image:null,
      },
      state:false
    }
  },
  
  mounted(){
    this.post=Object.assign({},this.ogPost);
    console.log(this.ogPost['key']);

  },
  methods:{
    async imagePicked(e){
      const files = e.target.files;
      const file = files[0];
      let rate=0.8;
      if(file){
        const compressedImage = await compressImage(file,rate);
        let base64 = compressedImage.shrunkBase64;
        this.post.image=base64;
      }
    },
    chooseIMG(){
      this.$refs.filebox.click();
    },
    updatePost(){
      this.state='saving'
      let  payload=this.post;
      db.ref(`/posts/${this.ogPost['key']}`).update(payload).then(x=>{
        this.state='saved';
        this.post={
        title:'',
        text:'',
        type:'',
        image:null,
      }
      });
      
    }
  }
}
</script>


<style lang="scss" scoped>
.wrap{
  position: relative;
  height: calc(100vh - 70px);
  // overflow: hidden;
}
.center *{
  font-size: 2.5rem !important;
}
.center{
  // position: absolute;
  background: white;
  margin: 4rem auto;
  padding: 2rem;
  width: 85%;
  // height: 85%;
  // top: 50%;
  // left: 50%;
  border-radius: 10px;
  // transform: translate(-50%,-50%);
  border: 1px solid #b3b3b3;
}
select{
  height: calc(5rem + 2px) !important;
}
.form-group{
  margin-bottom: 3rem;
}
img{
  margin: 1rem 0;
  height: 150px;
  width: auto;
}
.fa,.saved{
  margin: 0 2rem;
}

.btn{
  font-size: 2rem !important;
}

</style>


