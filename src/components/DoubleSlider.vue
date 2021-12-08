<template>
  <Slider 
    v-model="values"
    @="$emit('change-val', values)"
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
        minVal: Number,
        maxVal: Number
    },
    emits: ['change-val'],
    data() { 
        return {
            values: [this.minVal, this.maxVal]
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
