<template>
<div class="main" >
  <div class="container">
    <div class="row title">
      <div class="col-12">
        <h1 class="">俊仁   ＆   佳伶 </h1>
        <h1>婚宴邀約</h1>
      </div>
    </div>
    <div class="d-flex justify-content-center  m-2">
      <div class="col-6  col-sm-3 ">
        <router-link :to="{ path: 'info' }" >
          <button type="button" class="btn btn-outline-primary btn-block btn-lg">婚禮資訊</button>
        </router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center m-2">
      <div class="col-6  col-sm-3 ">
        <router-link :to="{ path: 'info' }" >
          <button type="button" class="btn btn-outline-primary btn-block btn-lg">交通資訊</button>
        </router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center m-2">
      <div class="col-6  col-sm-3 ">
        <button type="button" class="btn btn-outline-primary btn-block btn-lg">婚紗影片</button>
      </div>
    </div>
    <div class="d-flex justify-content-center m-2">
      <div class="col-6  col-sm-3 ">
        <button type="button" class="btn btn-outline-primary btn-block btn-lg">幸福留言</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MainList',
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
h1{
  text-align: center;
}
.main{
  /* background-color: aquamarine; */
  background: url("http://img01.tooopen.com/downs/images/2011/3/28/sy_20110328143553394751.jpg") no-repeat center center;
  background-size:650px 800px;
  height: 700px;
}
.back{
  z-index: 0;
  position: absolute;
}
.title{
  padding-top:220px;
  padding-bottom: 20px;
}
</style>
