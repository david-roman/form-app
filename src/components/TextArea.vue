<template>
  <textarea 
    v-model="description"
    rows="5"
    placeholder="Write a description of the NGO you are looking for."
    :class="[active? 'selected' : null]"
    @input="$emit('change-val', description)"
    @focus="active = true"
    @blur="active = false"
  />
</template>

<script>

export default {
    emits: ['change-val'],
    data() {
        return {
            description: "",
            active: false
        }
    }
}
</script>

<style scoped src="../assets/styles/textArea.css" />
