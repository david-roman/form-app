<template>
  <Select 
    v-model="selected"
    :options="optionList"
    :searchable="true"
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
    data() { 
        return {
            selected: ""
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css" />