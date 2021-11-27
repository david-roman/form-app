<template>
  <Select 
    v-model="selected"
    :options="optionList"
    :searchable="true"
  />
  <!-- <p>Selected: {{ selected }}</p> -->
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

<style>
    .multiselect.is-active {
        box-shadow: 0 0 0 var(--ms-ring-width,3px) var(--ms-ring-color,rgba(100,149,237,.18823529411764706));
    }
    .multiselect-search {
    margin: var(--ms-tag-my,.25rem) 0 0;
    padding-left: var(--ms-py,.5rem);
    align-items: center;
    }
    .multiselect-option.is-selected {
        background: var(--ms-option-bg-selected, rgba(100,149,237,1))
    }
    .multiselect-option.is-selected.is-pointed {
        background: var(--ms-option-bg-selected, rgba(100,149,237,1))
    }


</style>