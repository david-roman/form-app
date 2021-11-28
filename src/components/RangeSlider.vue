<template>
  <Slider 
    v-model="values"
  />
</template>

<script>
import Slider from "@vueform/slider"

export default {

    name: 'RangeSlider',
    components: {
        Slider
    },
    props: {
        // min: Number,
        // max: Number
    },
    data() { 
        return {
            values: [1950, 2022]
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
