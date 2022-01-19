<template>
  <Slider 
    v-model="value"
    @="$emit('change-val', value)"
  />
</template>

<script>
import Slider from "@vueform/slider"

export default {

    name: 'RangeSlider',
    components: {
        Slider
    },
    emits: ['change-val'],
    data() { 
        return {
            value: 3
        }
    }
}
</script>

<style src="@vueform/slider/themes/default.css" />

<style>
:root {
  --slider-connect-bg: cornflowerblue;
  --slider-tooltip-bg: cornflowerblue;
  --slider-handle-ring-color: #3B82F630;
}
</style>
