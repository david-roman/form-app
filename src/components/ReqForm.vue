<template>
  <div id="block">
    <h3>NGO REQUIREMENTS FORM</h3>
    <br />
    <p>Leave empty the fields you are not interested in.</p>
    <br />
    <p>Choose the NGO headquarters' country.</p>
    <Selector :optionList="countries" />
    <br />
    <p>Select the NGO's action scope</p>
    <Selector :optionList="scopes" />
    <br />
    <p>Define the range of years of the NGO's establishment.</p>
    <br />
    <p>Define the range of members of the NGO.</p>
    <br />
    <p>Choose the NGO's used languages.</p>
    <MultiSelector :optionList="languages" />
    <br />
    <p>Select the NGO's funding methods</p>
    <MultiSelector :optionList="funding" />
    <br />
    <p>Write a description about the desired NGO.</p>
    <TextArea />
    <br />
    <p>Choose the NGO's continents of activity.</p>
    <MultiSelector :optionList="continents" />
    <br />
    <p>Choose the NGO's countries of activity.</p>
    <MultiSelector :optionList="countries" />
    <br />
    <p>Choose the NGO's general areas of activity.</p>
    <MultiSelector :optionList="generalAreas" />
    <br />
    <button>Submit</button>
  </div>
</template>

<script>
import Selector from "./Selector.vue"
import MultiSelector from "./MultiSelector.vue"
import TextArea from "./TextArea.vue"
import { continents, countries, languagesAll } from "countries-list"

export default {
    name: 'ReqForm',
    components: {
        Selector,
        MultiSelector,
        TextArea
    },
    data() {
        return {
            continents: Object.values(continents).sort(),
            countries: Object.keys(countries).map(key => countries[key].name).sort(),
            languages: Object.keys(languagesAll).map(key => languagesAll[key].name).sort(),
            scopes: ['International', 'Local', 'National', 'Regional'],
            funding: ['Donations and grants from domestic sources',
                        'Fees for education and training services',
                        'Fees for providing consulting or research services',
                        'Foreign and international grants',
                        'Fundraising campaigns',
                        'Funds from other Non-Governmental Organizations',
                        'Funds from Religious Institutions',
                        'Grants from Governments',
                        'Membership fees or dues',
                        'Product sales and business services',
                        'Other sources', ],
            generalAreas: ['Area']
        }
    }
}
</script>

<style scoped>
    #block {
        padding-inline: 20%;
    }
    button {
        font-family: Avenir, Helvetica, Arial, sans-serif;

        position: relative;
        margin: 0 auto;

        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        flex-wrap: wrap;

        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        cursor: text;
        outline: none;

        border: var(--ms-border-width,1px) solid var(--ms-border-color,#d1d5db);
        border-radius: var(--ms-radius,4px);
        background: var(--ms-bg,#fff);
        font-size: var(--ms-font-size,1rem);
        font-family: inherit;
        min-height: calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);
        padding: var(--ms-py,.875rem);
    }

</style>