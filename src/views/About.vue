<template>
  <Title :title="'ABOUT THIS TOOL'" />
  <br /><br />
  <div id="block">
    <br />
    <p>This page is still in progress and will be concluded as soon as possible.</p>
  </div>
</template>

<script>
import Title from "../components/Title.vue"

export default {
    name:"HomePage",
    components: {
        Title,
    }
}
</script>

<style scoped>
    #block {
        padding-inline: 20%;
    }
    p {
        font-size: 18px;
    }
</style>