import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Posts from '@/components/Posts'
import PostDetails from '@/components/PostDetails'

import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/', name: 'Header', component: Header
    // },
      {
          path: '/', name: 'Posts', component: Posts
      },
      {
          path: '/post/:id', name: 'post', component: PostDetails
      }

  ]
})
