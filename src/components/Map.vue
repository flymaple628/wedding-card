<template>
<div class="main" >
  <nav-icons></nav-icons>
  <div class="container">
    <div class="row d-block d-sm-none">
      <div class="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.987372071753!2d120.34621751885622!3d23.234102933654206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd9c73d45004735e!2z5rC05p6X6YeM5rS75YuV5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1520050765015" width="350" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
    <div class="row d-none d-sm-block ">
      <div class="col-sm-6 offset-sm-3">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.987372071753!2d120.34621751885622!3d23.234102933654206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd9c73d45004735e!2z5rC05p6X6YeM5rS75YuV5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1520050765015" width="500" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-12  ">
        <p>地址：734台南市六甲區民族街269號</p>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-12 col-sm-12 ">
        <a href="https://goo.gl/maps/RmpPnb56b452"
          target="_blank"
          class="btn btn-primary btn-block btn-lg" >
          Google Map
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Map',
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe{
  margin:0 auto;
}
</style>
