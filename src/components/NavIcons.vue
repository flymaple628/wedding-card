<template>
<div class="container ">
  <div class="icons">
        <router-link :to="{ path: 'list' }" >
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-home" aria-hidden="true"></i>
          </button>
        </router-link>
        <router-link :to="{ path: 'info' }" >
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-info" aria-hidden="true"></i>
          </button>
        </router-link>
        <router-link :to="{ path: 'map' }" >
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-map" aria-hidden="true"></i>
          </button>
        </router-link>
        <router-link :to="{ path: 'photo' }" >
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </button>
        </router-link>
        <!-- <router-link :to="{ path: 'info' }" >
          <button type="button" class="btn btn-primary btn-lg">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </button>
        </router-link> -->
  </div>
</div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'NavIcons',
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
.btn-lg{
  width:22%;
}
.icons{
  margin:15px auto;
}
</style>
