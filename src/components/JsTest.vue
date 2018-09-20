<template>
  <div>
    <div>
      Js相关
    </div>
    <div style="background-color: cadetblue; height: 100%">
      <img src="/static/loading.jpg" style="vertical-align: middle; width: 100px; height: 100px; clip: rect(0px, 50px, 100px, 0px)"/>
    </div>
    <div>
      <h2 style="position: relative;">这是位于正常位置的标题relative</h2>
      <h2 style="position: fixed;top: 10px; right: 0">这是位于正常位置的标题fixed</h2>
      <h2 style="position: relative; left: -100px">这是位于正常位置的标题relative -100</h2>
      <!--<h2 style="position: relative; width: 300px; height: 1000px; overflow: scroll">
        这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。默认值是 visible。
      </h2>-->
      <img src="/static/loading.jpg" style="position: absolute; top: 0; vertical-align: middle; width: 100px; height: 100px"/>
      <!--<router-link to="/">routerLink</router-link>-->
    </div>
    <button type="button" @click="myClick">点击</button>
    <!--<div style="width: 100px; height: 100px; background-color: cadetblue">-->
    <router-view class="routerDefault" style=""></router-view>
    <del>删除线</del>
    <router-view class="slideBar" name="slideBar"></router-view>
    <router-view class="main" name="main"></router-view>
    <!--</div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to, from, next)
    // react to route changes...
    // don't forget to call next()
  },
  created () {
    // this.arrayInclude()
    // this.arrayFilter()
    // this.arraySome()
    // this.arrayReduce()
    //
    // this.arrayOther()
    // console.log('created $router', this.$router)
    console.log('created $route', this.$route)
    console.log('created $route path', this.$route.path)
    console.log('created $route params', this.$route.params)
  },
  mounted () {
    // console.log('mounted $route', this.$route)
  },
  watch: {
    '$route' (to, from) {
      console.log('jsTest watch', to, from)
      // 对路由变化作出响应...
    }
  },
  methods: {
    arrayInclude: function () {
      console.log(this)
      const characters = [
        'ironman',
        'black_widow',
        'hulk',
        'captain_america',
        'hulk',
        'thor'
      ]
      console.log('characters', characters)
      // 2
      console.log(characters.indexOf('hulk'))
      // -1
      console.log(characters.indexOf('batman'))
      // true
      console.log(characters.includes('hulk'))
      // false
      console.log(characters.includes('batman'))
    },
    getCharacter: function (name) {
      return character => character.name === name
      // return character => ({character: name})
      // return (character, index) => {
      //   if (index > 3) {
      //     return character.name === name
      //   } else {
      //     return character.name === name
      //   }
      // }
      // return function (character) {
      //   return character.name === name
      // }
    },
    arrayFilter: function () {
      const characters = [
        { id: 1, name: 'ironman' },
        { id: 2, name: 'black_widow' },
        { id: 3, name: 'captain_america' },
        { id: 4, name: 'captain_america' }
      ]
      // [{id: 3, name: "captain_america"}, 0: {id: 3, name: "captain_america"}]
      console.log(characters.filter(this.getCharacter('captain_america')))
      // {id: 3, name: "captain_america"}
      console.log(characters.find(this.getCharacter('captain_america')))
      characters.filter(function (item, index, array) {
        console.log('item', item, 'index', index, 'array', array)
      })
    },
    arraySome: function () {
    },
    arrayReduce: function () {
    },
    arrayOther () {
      const arrays = [
        'ironman',
        'black_widow',
        'hulk',
        'captain_america'
      ]
      const arrays2 = [
        'zhangsan',
        'lisi'
      ]
      console.log('arrayOther', arrays)
      console.log('arrayOther', arrays2)
    },
    myClick () {
      console.log('myClick')
      window.history.go(-1)
      // this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.routerDefault {
  background-color: chocolate;
}
.slideBar {
  background-color: cadetblue;
}
.main {
  background-color: lightcoral;
}
</style>
