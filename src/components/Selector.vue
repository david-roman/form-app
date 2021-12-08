<template>
  <Select 
    v-model="selected"
    :options="optionList"
    :searchable="true"
    @="$emit('change-val', selected)"
  />
</template>

<script>
import Select from "@vueform/multiselect"

export default {

    name: 'Selector',
    components: {
        Select
    },
    props: {
        optionList: Array,
    },
    emits: ['change-val'],
    data() { 
        return {
            selected: ""
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css" />