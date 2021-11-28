<template>
  <div id="block">
    <br />
    <p id="italics">Leave empty the fields you are not interested in.</p>
    <br />
    <p>Choose the NGO headquarters' country.</p>
    <Selector :optionList="countries" />
    <br />
    <p>Select the NGO's action scope</p>
    <Selector :optionList="scopes" />
    <br />
    <p>Define the range of years of the NGO's establishment.</p>
    <RangeSlider 
      :min="minYear"
      :max="maxYear"
    />
    <br />
    <p>Define the range of members of the NGO.</p>
    <RangeSlider 
      :min="minYear"
      :max="maxYear"
    />
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
import RangeSlider from "./RangeSlider.vue"
import { continents, countries, languagesAll } from "countries-list"

export default {
    name: 'ReqForm',
    components: {
        Selector,
        MultiSelector,
        TextArea,
        RangeSlider
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
                        'Other sources'],
            generalAreas: ['Area'],
            minYear: 1950,
            maxYear: 2022
        }
    }
}
</script>

<style scoped src="../assets/styles/button.css" />

<style scoped>
    #block {
        padding-inline: 20%;
    }
    p {
        font-size: 18px;
    }
    #italics {
        font-style: italic;
    }
</style>