<template>
  <div class="page animated slideInLeft">
   <Banner :text="'OKINAWA ASSOCIATION'" :subText="'Karate-Aerobic-Musculation'" :src="src"/>
   <Main/>
   <div>
     <div class="footer__banner">
    <div class="footer__title">
       <h1>Rejoignez-nous et vivez l’expérience <br> avec OKINAWA</h1>
    </div>
    <div class="contact">
      <div class="oneofthree">
        <h1 class="titre__oneofthree">Qui Sommes-Nous ?</h1>
        <p class="para__oneofthree">Qui Sommes-Nous ? OKINAWA est une assossiation de Karate ,Musculation et aerobic.</p>
      </div>
      <div class="oneofthree">
        <h1 class="titre__oneofthree">Contactez-nous</h1>
        <p class="para__oneofthree">
          <ul class="para__list"><li>+212 6 11 22 30 40</li>
              <li>+212 6 40 21 21 50</li>
              <li>okinawa18@gmail.com</li>
            </ul>


        </p>
      </div>
      <div class="oneofthree">
        <h1 class="titre__oneofthree">Suivez-nous</h1>
        <p class="para__oneofthree">
          <a href="#"><img src="../assets/social-media/fb.png"></a>
          <a href="#"><img src="../assets/social-media/gm.png"></a>
          <a href="#"><img src="../assets/social-media/yt.png"></a>

   
        </p>
      </div>
    </div>
  </div>
  <div class="footer">
    <!-- TODO -->
  </div>
   </div>

  </div>
</template>

<script>
import Banner from "./Banner"
import Main from "./Main"

const Image = require('../assets/img/stage2.jpg')


export default {
  data(){
    return{
      src:Image
    }
  },
  components:{
    Banner,
    Main
  }
}
</script>
<style type="scss" scoped>
  .footer__banner{
  position: relative;
  width: 100%;
  height: 70vh;
  background: linear-gradient(to right,rgba(0,0,0,.65),rgba(0,0,0,.65)),url(../assets/img/footer.jpeg);
  background-size: cover;
  background-position: center;
}

.footer__title{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.footer__title h1{
 color: white;
 font-size: 4.5rem;
 font-weight: 700;
 width: max-content;
}
.contact{
   position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  height: 50%;
  transform: translateX(-50%);
  display:flex;
}
.oneofthree{
  margin: 2rem;
  width: calc(100%/3 - 4rem);
  padding: 3rem;
}

.titre__oneofthree{
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

.para__oneofthree{
  color: #949494;
  font-size: 1.6rem;
  line-height: 2.2rem;
  word-break: normal;
  text-align: left;
}
.para__list{
   color:#949473;
   
}

.footer{
  height: 50px;
  background: white;
}

@media (max-width: 700px) {
  .footer__banner {
    overflow: scroll;
  }

  .footer__banner::-webkit-scrollbar {
    display: none;
  }

  .footer__title {
    width: 100%;
  }
    .footer__title h1{
      width: 80%;
      margin: 0 auto;
    font-size: 1.8rem;
    text-align: center;
    line-height: 3rem;
  }

  .contact {
    flex-wrap: wrap;
  }

  .oneofthree {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  
  .para__oneofthree {
    text-align: center;
    list-style: none;
  }

  .para__list {
    list-style: none;
  }
    
}
</style>
