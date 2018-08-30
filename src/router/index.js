import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Group from '@/components/Group'
import Login from '../components/Login'
import Preload from '../components/Preload'
import Animation from '../components/Animation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/preload',
      name: 'preload',
      component: Preload
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation
    }
  ]
})
