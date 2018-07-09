<template>
<div class="wrap">
  <div class="center">
    <div class="container-fluid">
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Titre</label>
    <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titre">
  </div>
  <div class="form-group">
    <label  for="upload">Choisir une image</label>
    <br>
    <input @change="imagePicked" ref="filebox" style="display:none" type="file" id="upload">
    <button @click.prevent="chooseIMG" class="btn btn-danger">Ajouter Image</button>
  </div>
    <img v-if="src" :src="src" alt="">
    
  <div class="form-group">
    <label for="exampleFormControlSelect1">Selection de type</label>
    <select v-model="type" name="type" class="custom-select">
      <option selected>Stage</option>
      <option >Competition</option>

  </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Text</label>
    <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button :disabled="title==''" @click.prevent="savePost" class="btn btn-success">Confirmer</button>
  <i v-if="state=='saving'" class="fa  fa-gear fa-spin"></i>
  <span v-if="state=='saving'">Saving Post ...</span>
  <span class="saved" v-if="state=='saved'">Post Saved</span>
</form>
    </div>
  </div>

</div>
</template>


<script>
import compressImage from "browser-compress-image";


export default {

  data(){
    return{
      title:'',
      text:'',
      type:'',
      src:null,
      state:false
    }
  },
  
  mounted(){
    // console.log(db);
  },
  firebase:{
    posts:db.ref('/posts')
  },
  methods:{
    async imagePicked(e){
      const files = e.target.files;
      const file = files[0];
      let rate=0.8;
      if(file){
        const compressedImage = await compressImage(file,rate);
        let base64 = compressedImage.shrunkBase64;
        this.src=base64;
      }
    },
    chooseIMG(){
      this.$refs.filebox.click();
    },
    savePost(){
      this.state='saving'
      let payload={
        title:this.title,
        type:this.type,
        text:this.text,
        image:this.src
      }
      console.log(payload);
      db.ref('/posts').push(payload).then(x=>{
        this.state='saved';
        this.title=this.text=this.type='';
        this.src=null
      });
      
    }
  }
}
</script>


<style lang="scss" scoped>
.btn{
  font-size: 2rem !important;
}
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

</style>


