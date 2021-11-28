<template>
  <MultiSelect 
    v-model="selected"
    mode="tags"
    :options="optionList"
    :closeOnSelect="false"
    :searchable="true"
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
    data() { 
        return {
            selected: []
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css" />

<style>
    .multiselect.is-active {
        box-shadow: 0 0 0 var(--ms-ring-width,3px) var(--ms-ring-color,rgba(100,149,237,.18823529411764706));
    }

    .multiselect-tag {
        background-color: cornflowerblue;
    }
    .multiselect-option.is-selected {
        background: var(--ms-option-bg-selected, rgba(100,149,237,1))
    }
    .multiselect-option.is-selected.is-pointed {
        background: var(--ms-option-bg-selected, rgba(100,149,237,1))
    }
</style>
