<template>
  <div id="block">
    <Button
      :text="'Home page'"
      :route="'/'"
    />
    <Button
      :text="'About'"
      :route="'/about'"
    />
  </div>
</template>

<script>
import Button from "./Button.vue"

export default {
    components: {
        Button
    }
}
</script>

<style scoped>
    #block {
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }
</style>