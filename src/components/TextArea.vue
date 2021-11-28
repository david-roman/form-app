<template>
  <textarea 
    v-model="description"
    rows="5"
    placeholder="Write a description of the NGO you are looking for."
    :class="[active? 'selected' : null]"
    @focus="active = true"
    @blur="active = false"
  />
</template>

<script>

export default {
    data() {
        return {
            description: "",
            active: false
        }
    }
}
</script>

<style scoped src="../assets/styles/textArea.css" />
