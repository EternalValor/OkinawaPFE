<template>
  <header id="header" class="alt">
    <div class="logo">
      <!-- <img src="" alt="">   -->
      <h1 class="logo_label">OKINAWA</h1>
    </div>
    <nav class="nav">

      <span class="menu">&nbsp;</span>
      <ul class="nav">
        <router-link to="/">
        <li class="nav_item">Acueil</li>
        </router-link>
        <router-link to="/stages">
        <li class="nav_item">Stage</li>
        </router-link>
        <router-link to="/comp">
        <li class="nav_item">Competition</li>
        </router-link>
        <router-link to="/prof">
          <li class="nav_item">Professeur</li>
        </router-link>
        <router-link to="/horaire">
          <li class="nav_item">Horaire</li>
        </router-link>
        <router-link v-if="!admin" to="/admin">
          <li class="nav_item"><i class="fa fa-user"></i></li>
        </router-link>
        <router-link to="/admin">
          <li v-if="admin" class="nav_item">Admin</li> 
        </router-link>
         
        <li @click="logout" v-if="admin" class="nav_item">Logout</li>  

      </ul>
      
    </nav>  
  </header>
</template>

<script>
export default {
  computed:{
    admin(){
      return this.$store.state.isLoggedIn;
  },
  },

  methods:{
    logout(){
      localStorage.setItem('LoggedIn',false);
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
  
}
</script>


<style lang="scss" scoped>
header{
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  background: black;
  .logo{
    margin-left: 10rem;
    &_label{
      color: white;
      text-transform: uppercase;
      letter-spacing: .2rem;
    }
  }
}
a{
  text-decoration: none;
  &:hover{
    color: unset !important;
    text-decoration: none !important;
  }
}

.nav{
  list-style: none;
  margin-left: auto;
  margin-right: 2rem;
  display: flex;
  &_item{
    cursor: pointer;
    color: white;
    margin-left: 1.5em;
    padding-left: 0;
    text-transform: uppercase;
  }

}

@media (max-width: 850px) {
  .nav__item {
    visibility: none;
    display: hidden;
  }
}
</style>

