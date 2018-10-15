<template>
    <div>
      <!-- background-color: grey-->
      <div style="display: flex;">
        <ul>
          <li v-for="(item, index) in naviItem" v-bind:key="index" @click="onClickNavi(index)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div>
        css
        <div>正常文本</div>
        <strong>加粗strong</strong>
        <b>加粗strong</b>
        &nbsp;
        <i>斜体i</i>
        <em>斜体em</em>
        &nbsp;
        <u>下划线</u>
        <ins>ins</ins>
        <del>删除线</del>
        <s>删除s</s>
      </div>
      <div>
        <p>
          如果 visible 属性绑定的变量位于不会正常工作。此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，在事件回调中执行中对应的 mutation 更新 visible 属性绑定的变量的值。
        </p>
        <p>
          如果 visible 属性绑定的变量位于的内不会正常工作。此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，在事件回调中执行中对应的 mutation 更新 visible 属性绑定的变量的值。
        </p>
        <p>
          如果 visible 属性绑定的变量位于的内不会正常工作。此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，在事件回调中执行中对应的 mutation 更新 visible 属性绑定的变量的值。
        </p>
      </div>
      <table border="1" align="center" cellspacing="0" cellpadding="0">
        <caption>
          姓名表格
        </caption>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
        </tr>
        <tr>
          <td  rowspan="2">张三</td>
          <td>6</td>
        </tr>
        <tr>
          <!--<td>李四</td>-->
          <td>8</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'css',
  data () {
    return {
      naviItem: [
        {name: '首页'},
        {name: '关于我们'},
        {name: '在线教室'},
        {name: '隐私协议'}
      ]
    }
  },
  methods: {
    onClickNavi (index) {
      console.log('onClickNavi index:', index)
    }
  }
}
</script>

<style scoped>
  ins {
    /*text-decoration: none;*/
  }
  del {
    text-decoration: line-through;
  }
  del {
    font-style: italic;
  }
  p {
    width: 1000px;
    text-align: left;
    text-indent: 2em;
    font-size: 16px;
  }
  td {
    text-align: left;
    /*border-bottom: 12px solid red;*/
    /*background-color: chocolate*/
  }
  ul {
    display: flex;
    /*background-color: aquamarine;*/
  }
  li {
    list-style-type: none;
    position: relative;
    margin: 0 10px;
    padding: 10px 10px;
  }
  li:hover {
    color: red;
    font-weight: bold;
  }
  li::before {
    position: absolute;
    top: 0;
    left: 0;
    /*top: 0;*/
    /*!*content: 'before伪元素';*!*/
    content: '';
    /*width: 100%;*/
    height: 100%;
    width: 100%;
    /*width: 0;*/
    border-bottom: 2px solid red;
    /*background-color: chocolate;*/
    /*transition: 6s all ease-in;*/
    z-index: -1;
  }
  /*li::before:hover{*/
    /*z-index: 1;*/
  /*}*/
  li:hover::before{
    /*position: absolute;*/
    width: 100%;
    top: 0;
    left: 0;
    /*transform: translate(33%, 0);*/
    transition-delay: 0.1s;
    border-bottom: 2px solid blue;
    /*border-bottom-color: #eb2116;*/
    /*border-bottom: 2px solid red;*/
    /*z-index: -1;*/
  }
</style>
