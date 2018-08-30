<template>
  <div style="display: flex; flex-direction: column">
    <div>
      预加载演示
    </div>
    <div>
      <img v-show="false" :src="url" style="width: 60%" alt="图片提示" title="鼠标滑过时显示的文字提示" :onload="onloadImage()"/>
    </div>
    <audio controls="controls" src=""></audio>
    <video controls="controls" src=""></video>
    <div>
      <video rel="search"></video>
    </div>
    <div>
      <!--<div v-for="(item, index) in images">-->
        <!--<div>{{index}}-{{item}}</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://resource.italentek.com.cn/courseware/image/77764921157e4737a62ca32cecc24958.jpg',
      images: ['aaaa', 'bbb']
    }
  },
  methods: {
    playVideo () {
      // new Video
      // var image = new Image()
    },
    playAudio () {
    },
    onloadImage () {
      console.log('图片加载成功')
    }
  }
}
</script>

<style scoped>

</style>
