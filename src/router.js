import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Stages from './components/Stages.vue';
import Comp from './components/Comp.vue';

import Admin from './components/Admin.vue';
import AddPost from './components/AddPost.vue';
import EditPost from './components/EditPost.vue';
import Prof from './components/Prof.vue';
import Horaire from './components/Horaire.vue';
import PostPage from './components/PostPage.vue';










Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/stages',
      name: 'stages',
      component: Stages
    },
    {
      path: '/comp',
      name: 'comp',
      component: Comp
    },
    {
      path: '/prof',
      name: 'prof',
      component: Prof
    },
    {
      path: '/horaire',
      name: 'horaire',
      component: Horaire
    },
    {
      path: '/addPost',
      name: 'add',
      component: AddPost
    },
    {
      path: '/editPost',
      name: 'edit',
      props:true,
      component: EditPost
    },
    {
      path: '/post/:title',
      name: 'postPage',
      props:true,
      component: PostPage
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter:(to,from,next)=>{
        let x = localStorage.getItem('LoggedIn');
        if(x=='true'){
          next();
        }else{
          next('/login');
        }
        
      }
    }
  ]
})
