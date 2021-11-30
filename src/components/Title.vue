<template>
  <div id="titleArea">
    <h1 id="title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String,
    },
}
</script>

<style scoped>
    #titleArea {
        margin: 0;
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: cornflowerblue;
    }
    #title {
        color: white;
        font-size: 40px;
    }
</style>