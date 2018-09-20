import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Group from '@/components/Group'
import Login from '../components/Login'
import Preload from '../components/Preload'
import Animation from '../components/Animation'
import JsTest from '../components/JsTest'
import RouterChild from '../components/RouterChild'
// const Foo = {template: '<div>foo</div>'}
Vue.use(Router)
// const routes = [
//   {path: '/foo', component: Foo},
//   {}
// ]
//
// const router = new VueRouter({
//   routes: routes
// })
//
// const app = new Vue({
//   router
// }).$mount('#app')
// style="width: 200px; height: 200px"
const TemplateDefault = { template: '<div>我是默认模板TemplateDefault</div>' }
const TemplateSlideBar = { template: '<div>TemplateSlideBar</div>' }
const TemplateMain = { template: '<div>TemplateMain</div>' }
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
    },
    {
      path: '/jsTest/:type',
      name: 'jstest',
      component: JsTest,
      children: [
        {
          path: 'show',
          name: 'show',
          component: RouterChild
        },
        {
          path: '',
          components: {
            default: TemplateDefault,
            slideBar: TemplateSlideBar,
            main: TemplateMain
          }
        }
      ]
    }
  ]
})
