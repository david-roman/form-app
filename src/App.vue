<template>
  <!-- <img
    alt="Earth"
    src="./assets/blue_earth.png"
    width="300"
    height="300"
  >
  <br /><br /> -->
  <Title />
  <br /><br />
  <ReqForm />
  <br /><br />
</template>

<script>
import Title from './components/Title.vue'
import ReqForm from './components/ReqForm.vue'

export default {
  name: 'App',
  components: {
    Title,
    ReqForm
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}

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
