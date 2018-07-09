<template>
  <!-- BANNER -->
  <div :style="getBg()" class="banner">
    <div class="text">
      <h1 class="text__title">{{text}}</h1>
      <h3 class="text__sub__title">{{subText}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props:['src','text','subText'],
  methods:{
    getBg(){
      return { backgroundImage: `url(${this.src})` }
    },
  }
}
</script>


<style lang="scss" scoped>
.banner{
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 40%;
  position: relative;
}
.text{
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%,-26%);
  color: white;
  text-align: center;
  width: max-content;
}

.text__title{
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: .5rem;
  text-transform: uppercase;
  color: white;
}
.text__sub__title{
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: .2rem;
  text-transform: uppercase;
}

.quote{
  height: 250px;
  background: white;
}

@media (max-width: 850px) {
  .text {
    &__title {
      font-size: 4rem;
    }
    
    &__sub__title {
      font-size: 2rem;
    }
  }
}

@media (max-width: 700px) {
  .banner {
    height: 40vh;
  }
  .text {
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    &__title {
      // width: 80%;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    &__sub__title {
      display: none;
    }
  }
}
</style>

