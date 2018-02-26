<template>
<div class="main" >
  <nav-icons></nav-icons>
  <div class="container">

    <div class="row story">
      <div class="col-12">
        <p>
          經過多年的愛情長跑，我們要結婚摟！
        </p>
        <p>
          <br>
        日期：2018年03月24日
        </p>
        <p>
        時間：12:00
        </p>
        <p>
        地點：富盈囍宴會館
        </p>
        <p>
        地址：屏東市和平路422號
        </p>
        <p>
        電話：:08-7341199
        </p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Infomation',
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
p{
  text-align: center;
  font-size: 22px;
  color: #666;
}
.main{
  /* background-color: aquamarine; */
  background: url("http://pic.qiantucdn.com/58pic/27/68/69/94m58PICUjA.jpg!/fw/300/clip/0x400a0a0") no-repeat center center;
  background-size:650px 800px;
  height: 800px;
}
.back{
  z-index: 0;
  position: absolute;
}
.title{
  padding-top:220px;
  padding-bottom: 20px;
}
.story{
  padding-top:100px;
  padding-bottom: 20px;
  margin-left:25%;
  margin-right:25%;
}
@media screen and (max-width: 480px) {
  .story{
    padding-top:100px;
    padding-bottom: 20px;
    margin-left:0%;
    margin-right:0%;
  }
}
</style>
