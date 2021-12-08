<template>
  <Title :title="'REQUIREMENTS FORM'" />
  <br /><br />
  <div id="block">
    <br />
    <p id="italics">Leave empty the fields you are not interested in.</p>
    <br />
    <p>Define the number of resulting NGOs.</p>
    <SingleSlider
      :min="minNGOs"
      :max="maxNGOs"
      @change-val="changeSelectedNGOs"
    />
    <br />
    <p>Choose the NGO headquarters' country.</p>
    <MultiSelector
      :optionList="countries"
      @change-val="changeSelectedHQ"
    />
    <br />
    <p>Select the NGO's action scope.</p>
    <MultiSelector
      :optionList="scopes"
      @change-val="changeSelectedScope"
    />
    <br />
    <p>Define the range of years of the NGO's establishment.</p>
    <DoubleSlider
      :min="minYear"
      :minVal="minYear"
      :max="maxYear"
      :maxVal="maxYear"
      @change-val="changeSelectedYears"
    />
    <br />
    <p>Define the range of members of the NGO.</p>
    <DoubleSlider 
      :min="minMembers"
      :minVal="minMembers"
      :max="maxMembers"
      :maxVal="maxMembers"
      @change-val="changeSelectedMembers"
    />
    <br />
    <p>Select the NGO's funding methods</p>
    <MultiSelector
      :optionList="funding"
      @change-val="changeSelectedFundings"
    />
    <br />
    <p>Choose the NGO's used languages.</p>
    <MultiSelector
      :optionList="languages"
      @change-val="changeSelectedLanguages"
    />
    <br />
    <p>Write a description about the desired NGO.</p>
    <TextArea @change-val="changeDescription" />
    <br /><br />
    <p>Choose the NGO's continents of activity.</p>
    <MultiSelector
      :optionList="continents"
      @change-val="changeSelectedContinents"
    />
    <br />
    <p>Select the NGO's countries of activity.</p>
    <MultiSelector
      :optionList="countries"
      @change-val="changeSelectedCountries"
    />
    <br />
    <p>Choose the NGO's general areas of activity.</p>
    <MultiSelector
      :optionList="generalAreas"
      @change-val="changeSelectedAreas"
    />
    <br />
    <li
      v-for="area in reqs.generalAreas"
      :key="area"
    >
      <p>Select the specific areas of activity of {{ area }}.</p>
      <MultiSelector
        :optionList="specificAreas[generalAreas.indexOf(area)]"
        :area="area"
        @change-val="changeSelectedSpecific"
      />
      <br />
    </li>
    <br />
    <Button
      :text="'Submit'"
      :route="'Results'"
      :submit="true"
      :reqs="reqs"
    />
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import SingleSlider from '../components/SingleSlider.vue'
// import Selector from "../components/Selector.vue"
import MultiSelector from "../components/MultiSelector.vue"
import TextArea from "../components/TextArea.vue"
import DoubleSlider from "../components/DoubleSlider.vue"
import Button from "../components/Button.vue"
import { continents, countries, languagesAll } from "countries-list"

export default {
    name: 'ReqForm',
    components: {
        Title,
        SingleSlider,
        // Selector,
        MultiSelector,
        TextArea,
        DoubleSlider,
        Button
    },
    data() {
        return {

            // Form values
            minNGOs: 1,
            maxNGOs: 20,
            minYear: 1950,
            maxYear: 2022,
    
            minMembers: 1,
            maxMembers: 500,

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

            generalAreas: ['Conflict Resolution in Africa', 
                'Economic and Social', 
                'Financing for Development', 
                'Gender Issues and Advancement of Women', 
                'NEPAD', 
                'Peace and Development in Africa', 
                'Population',
                'Public Administration', 
                'Social Development', 
                'Statistics', 
                'Sustainable Development'],

            specificAreas:  [
                ['Climate Change and Natural Resource Management', 'Agriculture and Food Security', 'Economic and Corporate Governance', 'Crosscutting issues (Gender and Capacity Development)', 'Human Development', 'Regional Integration and Infrastructure'], 
                ['Women and poverty', 'Women and HIV/AIDS', 'Research', 'Women and armed conflict', 'Information and communication technologies', 'Women and the environment', 'Education and training of women', 'Women in power and decision-making', 'Men and boys', 'Millennium Development Goals', 'Violence against women', 'Women and the media', 'Human rights of women', 'Indigenous women', 'Women and health', 'Policy advice', 'Institutional mechanisms for the advancement of women', 'Advocacy and outreach', 'Capacity building', 'Service provision', 'The girl child', 'Trafficking in women and girls', 'Women and the economy'], 
                ['International Cooperation in Tax Matters', 'Mobilizing domestic financial resources for development', 'Mobilizing international resources for development', 'Addressing systemic issues', 'International Trade as an engine for development', 'Increasing financial and technical cooperation for development', 'External debt'], 
                ['Conflicts Resolution'], 
                ['Ethics, Transparency and Accountability', 'Governance and Public Administration', 'Knowledge Systems and E-government', 'Public Service and Management Innovation', 'Public Financial Management', 'Socio-Economic Governance and Management'], 
                ['Development in Africa', 'Peace in Africa'], 
                ['Sustainable development for Africa', 'Agriculture', 'Integrated decision-making', 'Indicators', 'Industrial development', 'Technology', 'Sanitation', 'Waste Management', 'Freshwater', 'Health', 'Trade and environment', 'Biotechnology', 'Forests', 'Toxic chemicals', 'Waste (hazardous)', 'Capacity-building', 'International cooperation for an enabling environment', 'Atmosphere', 'Major Groups', 'Waste (solid)', 'Means of Implementation (Trade, Finance, Technology, Tranfer, etc.)', 'Energy', 'Mining', 'Biodiversity', 'Marine Resources', 'Oceans and seas', 'Poverty', 'Land management', 'Finance', 'International law', 'Institutional arrangements', 'Sustainable development of SIDS', 'Transport', 'Disaster management and vulnerability', 'Desertification and Drought', 'Gender equality', 'Rural Development', 'Demographics', 'Sustainable development in a globalizing world', 'Science', 'Waste (radioactive)', 'Partnerships', 'Education', 'Protecting and managing the natural resources', 'Mountains', 'Information for decision-making and participation', 'Consumption and production patterns', 'Sustainable Tourism', 'Human settlements', 'Climate change'], 
                ['Informal Sector Statistics', 'Development indicators', 'Crime and criminal justice statistics', 'Household Statistics', 'Environmental Accounts', 'Social Statistics and Social Monitoring', 'Statistical activities classification', 'Geographical names', 'Time-use statistics', 'International Comparison Programme', 'Services Statistics', 'Statistics on international trade in services', 'Civil registration systems', 'Official statistics, principles and practices', 'International migration', 'Methodological publications in statistics', 'Population and housing censuses', 'International Economic and Social Classifications', 'Poverty statistics', 'Country or region codes', 'Labour and Compensation', 'Disability Statistics', 'Demographic and social surveys', 'National accounting', 'Price and Quantity Statistics'], 
                ['New Global Institutions', 'Disabled Persons', 'Agriculture', 'Technical Cooperation', 'Climate Change', 'Crime Prevention', 'Safety', 'Citizenship and Governance', 'Children', 'Values', 'Violence', 'Taxation Policy', 'Business and Industry', 'Statistics', 'Decolonization', 'Social Development', 'Law of the Sea and Antarctica', 'HIV/AIDS', 'Labour', 'Media', 'Least Developed Countries', 'Habitat', 'International Law', 'Energy', 'Science and Technology', 'Biodiversity', 'Minority Rights', 'Sustainable Development', 'Humanitarian Affairs', 'Women/gender Equality', 'Peace and Security', 'Environment', 'Atomic Energy', 'Torture', 'United Nations Reform', 'Information', 'Food', 'Intellectual Property', 'Aging', 'Financing for Development', 'Women', 'Disarmament', 'Volunteerism', 'Human Rights', 'Extreme poverty', 'Trade and Development', 'Governance', 'Private Sector', 'Water', 'Economics and Finance', 'Religion', 'Micro-Credit', 'Sports for Peace and Development', 'Outer Space', 'Coorporate Accountability', 'Culture', 'Education', 'United Nations Funding', 'Refugees', 'International Security', 'Drug Control', 'De-mining', 'Justice', 'Criminal Justice', 'Development', 'Migration', 'Family', 'Debt Relief', 'Industrial Development', 'Youth', 'Population', 'Indigenous Peoples'], 
                ['Aging', 'Information and Communications Technologies', 'Poverty', 'Cooperative', 'Social policy', 'Conflict', 'Employment', 'Indigenous issues', 'Technical cooperation', 'Youth', 'Disabled persons'], 
                ['Morbidity and mortality', 'Reproduction, family formation and the status of women', 'Population structure', 'Population distribution and internal migration', 'International migration', 'Population growth']
            ],

            // Selected values
            reqs: {
                ngoNum: 5,
                hq: [],
                scope: [],
                established: [1950, 2022],
                members: [1, 500],
                fundings: [],
                languages: [],
                description: "",
                continents: [],
                countries: [],
                generalAreas: [],
                specificAreas: []
            },
        }
    },
    methods: {
        changeSelectedNGOs(e) {
            this.reqs.ngoNum = e;
        },
        changeSelectedHQ(e) {
            this.reqs.hq = e;
        },
        changeSelectedScope(e) {
            this.reqs.scope = e;
        },
        changeSelectedYears(e) {
            this.reqs.established = e;
        },
        changeSelectedMembers(e) {
            this.reqs.members = e;
        },
        changeSelectedFundings(e) {
            this.reqs.fundings = e;
        },
        changeSelectedLanguages(e) {
            this.reqs.languages = e;
        },
        changeDescription(e) {
            this.reqs.description = e;
        },
        changeSelectedContinents(e) {
            this.reqs.continents = e;
        },
        changeSelectedCountries(e) {
            this.reqs.countries = e;
        },
        changeSelectedAreas(e) {
            const oldAreas = this.reqs.generalAreas;
            const oldSpecific = this.reqs.specificAreas;
            this.reqs.generalAreas = e;
            this.reqs.specificAreas = [];

            for (let i = 0; i < this.reqs.generalAreas.length; i++) {
                let index = oldAreas.indexOf(this.reqs.generalAreas[i]);
                this.reqs.specificAreas[i] = oldSpecific[index];
            }
        },        
        changeSelectedSpecific(e) {
            const area = e.shift()
            this.reqs.specificAreas[this.reqs.generalAreas.indexOf(area)] = e;
        },
    }
}
</script>

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
    li {
        list-style-type: none;
    }
</style>
