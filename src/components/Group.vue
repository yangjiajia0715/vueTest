<template>
<div >
  <button >按钮2</button>
  <div id="div" style="display: flex; background-color: cadetblue">
    <div onclick="this.innerHTML = '改变'">云课堂</div>
    <div>上课状态</div>
    <div v-if="true">其他内容</div>
  </div>
  <!--@onmousemove="mOver(this)" @onmouseout="mOut(this)"this-->
</div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      show: false
    }
  },
  created () {
    window.onload = function () {
      var div = document.getElementById('div')
      console.log('div', div)
      div.onmouseout = function (event) {
        console.log('onmouseout')
        this.show = false
      }
      div.onmouseover = function (event) {
        console.log('onmouseover')
        this.show = true
      }
    }
  },
  methods: {
    mover (obj) {
      this.show = true
      console.log('鼠标移到上面了', obj)
    },
    mout (obj) {
      this.show = false
      console.log('鼠标移走了', obj)
    }
  }
}
</script>
