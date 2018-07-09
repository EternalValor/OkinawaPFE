import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    posts:[],
    compPosts:[],
    stagePosts:[],
    isLoggedIn:!!localStorage.getItem('LoggedIn'),
    
  },
  mutations: {
    login(state){
      localStorage.setItem('LoggedIn',true);      
      state.isLoggedIn=true;
    },
    logout(state){
      localStorage.setItem('LoggedIn',false);
      state.isLoggedIn=false;
    },
    setPosts(state,posts){
      state.posts=posts;
    },
    setCompPosts(state,posts){
      state.compPosts=posts;
    },
    setStagePosts(state,posts){
      state.stagePosts=posts;
    }

  },
  actions: {
  
  }
})
