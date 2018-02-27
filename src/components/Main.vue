<template>
<div class="main" @click="list">
  <div class="container">
    <div class="row title">
      <div class="col-12">
        <div class="word">
          <h4>敬請參加</h4>
          <h2 >俊仁＆佳伶 的婚禮</h2>
          <h3 >2018/03/24 12:00</h3>
          <p>點擊前往</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Main',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    list(){
      this.$router.push('list');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  text-align: center;
  color: #81D8D0;
}
.main{
  /* background-color: aquamarine; */
  /* background: url("http://img01.tooopen.com/downs/images/2011/3/28/sy_20110328143553394751.jpg") no-repeat center center; */
  background: url('../assets/main.jpg') no-repeat center center;
  height: 700px;
}
.back{
  z-index: 0;
  position: absolute;
}
.title{
  padding-top:220px;
  padding-bottom: 20px;
  margin-left:15%;
  margin-right:15%;
  cursor: pointer;
}
.word{
  background-color: rgba(255, 255, 255, 0.8);
  padding:5%;
}
</style>
