<template>
  <div id="demo">
    <button v-on:click="showHello = !showHello">Toggle</button>
    <button v-on:click="change()">改变</button>
    <!--:duration="{ enter: 5000, leave: 8000 }"-->
    <transition
      name="fade"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled">
        <p v-if="showHello">hello</p>
    </transition>
    <button @click="show = !show">Toggle bounce</button>
    <!--duration="5000"-->
    <transition name="bounce">
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    <button @click="showSlideFade = !showSlideFade">Toggle SlideFade</button>
    <transition name="slide-fade">
      <p v-if="showSlideFade">Lorem</p>
    </transition>
    <button @click="showAppear = !showAppear">Toggle appear</button>
    <transition name="test-appear">
      <p v-if="showAppear">test-appear</p>
    </transition>
    <transition>
      <table v-if="items.length > 0">
        <!-- ... -->
      </table>
      <p v-else>Sorry, no items found.</p>
    </transition>
    <!--<transition>
      <button v-if="isEditing" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition>-->
    <!--<transition>
      <button v-bind:key="isEditing">
        {{ isEditing ? 'Save' : 'Edit' }}
      </button>
    </transition>-->
    <transition mode="out-in">
      <button v-bind:key="docState">
        {{ buttonMessage }}
      </button>
    </transition>
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <button @click="jQueryAnim()">jQuery动画</button>
    <div id="stuAvatar" style="position:absolute; left: 0px; top: 0px; height: 100%; z-index: 0; background-color: chocolate">
      <div id="redTeamDiv" style="position:absolute; left: 10px; top: 50px; display: flex; flex-direction: column; flex-wrap: wrap; height: 90%; background-color: antiquewhite">
        <div v-for="item in items" v-bind:key="item" >
          <div style="width: 80px; height: 80px; margin: 10px; background-color: cadetblue">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 页面加载完毕
// window.onload = function () {
//   alert('Hello 王守义')
// }
function move () {
  // var jq = require('jquery')
  // // alert('Hello 王凤')
  // $(function () {
  //   alert('Hello 王凤')
  // })
}
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      showHello: true,
      showSlideFade: true,
      showAppear: true,
      isEditing: true,
      docState: 'saved',
      show: true
    }
  },
  created () {
    console.log('animation $route', this.$route)
  },
  computed: {
    buttonMessage: function () {
      switch (this.docState) {
        case 'saved': return 'Edit'
        case 'edited': return 'Save'
        case 'editing': return 'Cancel'
      }
    }
  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function (el) {
      // ...
      console.log('beforeEnter', el)
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    enter: function (el, done) {
      // ...
      console.log('enter', el)
      done()
    },
    afterEnter: function (el) {
      // ...
      console.log('afterEnter', el)
    },
    enterCancelled: function (el) {
      // ...
      console.log('enterCancelled', el)
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      // ...
      console.log('beforeLeave', el)
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    leave: function (el, done) {
      // ...
      console.log('leave', el)
      done()
    },
    afterLeave: function (el) {
      // ...
      console.log('afterLeave', el)
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...
      console.log('leaveCancelled', el)
    },
    change: function () {
      this.isEditing = !this.isEditing
      if (this.docState === 'saved') {
        this.docState = 'edited'
      } else if (this.docState === 'edited') {
        this.docState = 'editing'
      } else if (this.docState === 'editing') {
        this.docState = 'saved'
      }
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    jQueryAnim: function () {
      move()
      // $(function () {
      //   alert('Hello 王凤')
      // })
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in 3s;
    /*animation-iteration-count: 3;*/
  }
  .bounce-leave-active {
    animation: bounce-in 3s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0) translate(60px, 60px);
      color: blue;
    }
    50% {
      transform: scale(1.5) translate(300px, 300px);
      color: red;
    }
    100% {
      transform: scale(1) translate(400px, 400px) ;
      color: chocolate;
    }
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 3s linear;
    transition-timing-function: linear;
    transition-delay: 1s;
  }
  .slide-fade-leave-active {
    transition: all 8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(300px) translateY(300px);
    opacity: 0;
  }
  /*@keyframes slide-fade-in {*/
    /*0% {*/
      /*transform: scale(0);*/
    /*}*/
    /*50% {*/
      /*transform: scale(10.5);*/
    /*}*/
    /*100% {*/
      /*transform: scale(1);*/
    /*}*/
  /*}*/

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 3s;
  }
  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
