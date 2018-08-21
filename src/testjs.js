import Vue from 'vue'
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
