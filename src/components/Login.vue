<template>
    <div style="display: flex; flex-direction: column" @click="addF()" onload="onloadInfo()">
      登录页面
      <div>
        <label>用户名</label> <input type="text" id="username" onchange="onchangeInfo()"/>
      </div>
      <div>
        <label>密码</label><input type="text" id="password" onchange="onchangeInfo()"/>
      </div>
      <p id="info"></p>
    </div>
</template>

<script>
export default {
  created () {
    // setTimeout(() => {
    //   alert('对不起, 要你久候')
    // }, 3000)
    var data1 = 0
    function count1 () {
      console.log('count1:', data1++)
      console.log('count1:', typeof data1)
      console.log('count1:', Object.prototype.toString.call(data1))
      if (data1 === 3) {
        clearInterval(timeId)
      }
    }
    var timeId = setInterval(count1, 2000)
  },
  methods: {
    addF () {
      var txt = 'text'
      var persion = {
        firstName: 'yang',
        lastName: 'jia',
        id: 3
      }
      isNaN(4)
      txt.search()
      console.log('persion', persion.firstName)
    },
    onloadInfo () {
      console.log('onloadInfo', this)
    },
    onchangeInfo () {
      var username = document.getElementById('username').value.toUpperCase()
      var password = document.getElementById('password').value.toUpperCase()
      document.getElementById('info').innerHTML = username + password
      console.log('onchangeInfo', this)
    }
  }
}

</script>

<style scoped>

</style>
