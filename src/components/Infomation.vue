<template>
<div class="main" >
  <nav-icons></nav-icons>
  <div class="container">

    <div class="row story">
      <div class="col-12">
        <p>
          那一年，我們偶然相遇

沒想到世界這麼大

兩顆小小的心從此被繫在一起

我們看到彼此的好

也看到彼此對自己的重要

在這個美麗的日子

我們決定讓幸福延續

期望快樂回憶裡

有您的祝福與參與



Hank與Carol敬邀
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
  color: rgb(49, 49, 49);
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
