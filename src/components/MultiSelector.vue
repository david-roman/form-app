<template>
  <MultiSelect 
    v-model="selected"
    mode="tags"
    :options="optionList"
    :closeOnSelect="false"
    :searchable="true"
    @="emitSelected()"
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
        area: {
            type: String,
            default: ""
        }
    },
    emits: ['change-val'],
    data() { 
        return {
            selected: []
        }
    },
    methods: {
        emitSelected() {
            if (this.area != "")
                this.selected = [this.area, ...this.selected];

            this.$emit('change-val', this.selected);
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css" />