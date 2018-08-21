<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="jump" >Group</button>
    <button @click="login()" >登录</button>
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
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{checked}}</label>
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
      checked: false,
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
    },
    login: function (message) {
      this.$router.push({name: 'login'})
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
