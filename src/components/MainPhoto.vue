<template>
<div class="main" >
<nav-icons></nav-icons>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img-fluid" src="http://aaronwalk.com/wp-content/uploads/2018/02/marrypic1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-fluid" src="http://aaronwalk.com/wp-content/uploads/2018/02/marrypic15.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-fluid" src="http://aaronwalk.com/wp-content/uploads/2018/02/marrypic8.jpg" alt="First slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</template>

<script>

export default {
  /* eslint-disable */
  name: 'MainPhoto',
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
#carouselExampleIndicators{
  margin: 0 auto;
  max-width:800px;
}
img{
  width:50%;
}
</style>
