<template>
  <MultiSelect 
    v-model="selected"
    mode="tags"
    :options="optionList"
    :closeOnSelect="false"
    :searchable="true"
    @="$emit('change-val', selected)"
  />
</template>

<script>
import MultiSelect from "@vueform/multiselect"

export default {

    name: 'Selector',
    components: {
        MultiSelect
    },
    props: {
        optionList: Array,
    },
    emits: ['change-val'],
    data() { 
        return {
            selected: []
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css" />