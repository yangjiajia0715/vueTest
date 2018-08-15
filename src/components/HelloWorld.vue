<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="jump" >跳转</button>
    <button @click="counter += 1" >点击加1</button>
    <p>按钮点击了{{counter}}次</p>
    <button v-on:click="counter += 2" >点击加2</button>
    <button v-on:click.once="say('hi')">Say hi once</button>
    <button v-on:click.prevent="say('what')">Say what</button>
    <input v-model="msgM" placeholder="编辑我..."/>
    <p>消息是：{{msgM}}</p>
    <p>textarea 元素：</p>
    <p style="white-space: pre">{{msgM2}}</p>
    <textarea v-model="msgM2" placeholder="多行文本输入..."></textarea>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      counter: 0,
      msg: 'Welcome to Your Vue.js App',
      msgM: '文本1',
      msgM2: '文本2'
    }
  },
  methods: {
    addCard () {
      if (!this.food.type) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    jump: function () {
      console.log(this)
      this.$router.push({name: 'Group'})
    },
    say: function (message) {
      alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
