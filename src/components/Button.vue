<template>
  <router-link
    :to="{name: route, query: reqs}"
    :class="[active? 'hover' : null]"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    {{ text }}
  </router-link>
</template>

<script>
// @click="submit ? $emit('submit-form') : null"
export default {
    name: "Button",
    props: {
        text: String,
        route: String,
        reqs: {
          type: Object,
          default: () => ({})
        }
        // submit: {
            // type: Boolean,
            // default: false
        // }
    },
    // emits: ['submit-form'],
    data() {
        return {
            active: false,
        }
    }
}
</script>

<style scoped src="../assets/styles/button.css" />

