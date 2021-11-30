<template>
  <router-link
    :to="route"
    :class="[active? 'hover' : null]"
    @mouseover="active = true"
    @mouseleave="active = false"
    @click="clicked = !clicked"
  >
    {{ text }}
  </router-link>
</template>

<script>

export default {
    name: "Button",
    props: {
        text: String,
        route: String,
    },
    data() {
        return {
            active: false,
        }
    }
}
</script>

<style scoped src="../assets/styles/button.css" />

