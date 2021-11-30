<template>
  <Title :title="'NGO RECOMMENDER'" />
  <br /><br />
  <div id="block">
    <br />
    <p>Fill the following requirements form to get your recommended NGOs:</p>
    <br />
    <Button
      :text="'Fill Form'"
      :route="'/form'"
    />
  </div>
</template>

<script>
import Title from "../components/Title.vue"
import Button from "../components/Button.vue"

export default {
    name:"HomePage",
    components: {
        Title,
        Button
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