<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html {
  background-color: rgba(100, 148, 237, 0.048);
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
  margin-bottom: 60px;
}

:root {
    --ms-bg: white;
    --ms-tag-bg: cornflowerblue;
    --ms-tag-color: white;
    --ms-ring-color: #3B82F630;
    --ms-option-bg-selected: cornflowerblue;
    --ms-option-bg-selected-pointed: cornflowerblue;
    --ms-border-color: cornflowerblue;
}
::selection {
    color: white;
    background: cornflowerblue;
}

</style>
