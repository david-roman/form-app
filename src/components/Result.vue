<template>
  <div>
    <h2 v-if="ngoData['title'] && ngoData['acronym']">{{ ngoData['title'] }} - {{ ngoData['acronym'] }}</h2>
    <h2 v-else-if="ngoData['title']">{{ ngoData['title'] }}</h2>
    <h2 v-else-if="ngoData['acronym']">{{ ngoData['acronym'] }}</h2>
    <p v-if="ngoData['phone']">Phone:     {{ ngoData['phone'] }} </p>
    <p v-if="ngoData['mail']">Mail:       {{ ngoData['mail'] }} </p>
    <p v-if="ngoData['website']">Website: {{ ngoData['website'] }} </p>
  </div>
</template>

<script>
export default {
    name: 'Result',
    props: {
        ngoData: JSON
    }
}
</script>

<style scoped src="../assets/styles/result.css" />

<style scoped>
    p {
        font-size: 18px;
    }
</style>