<template>
  <img
    alt="Earth"
    src="./assets/earth.png"
    width="300"
    height="155"
  >
  <br /><br />
  <ReqForm />
  <br /><br />
</template>

<script>
import ReqForm from './components/ReqForm.vue'

export default {
  name: 'App',
  components: {
    ReqForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3d3d3d;
  margin-top: 60px;
}
body {
  background-color: whitesmoke;
}
</style>
