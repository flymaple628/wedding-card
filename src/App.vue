<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
a,a:hover{
  text-decoration:none;
}
.btn-outline-primary{
  color: #81D8D0;
  border: 0px;

}
.btn-primary,.btn-outline-primary:hover,.btn-primary:hover{
  background-color: #81D8D0;
  border: 0px;
  cursor: pointer;
}
.btn-primary:hover{
  background-color: rgb(100, 168, 161);
}
</style>
