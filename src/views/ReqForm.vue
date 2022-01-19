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
    <p>Select the NGO's funding methods.</p>
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
            maxNGOs: 10,
            minYear: 1800,
            maxYear: 2020,
    
            minMembers: 1,
            maxMembers: 5000,

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

            generalAreas: [
                'Financing for Development', 
                'Economic and Social', 
                'NEPAD', 
                'Gender Issues and Advancement of Women', 
                'Peace and Development in Africa', 
                'Social Development', 
                'Sustainable Development', 
                'Conflict Resolution in Africa', 
                'Statistics', 
                'Population', 
                'Public Administration'
            ] 
,

            specificAreas:  [
                ['International Cooperation in Tax Matters', 'Mobilizing international resources for development', 'Increasing financial and technical cooperation for development', 'International Trade as an engine for development', 'Mobilizing domestic financial resources for development', 'External debt', 'Addressing systemic issues'], 
                ['Family', 'Development', 'Migration', 'Disabled Persons', 'Law of the Sea and Antarctica', 'Micro-Credit', 'Technical Cooperation', 'Atomic Energy', 'Extreme poverty', 'Information', 'Refugees', 'United Nations Reform', 'Peace and Security', 'Environment', 'United Nations Funding', 'Economics and Finance', 'Outer Space', 'Human Rights', 'International Law', 'Business and Industry', 'Justice', 'Religion', 'Industrial Development', 'Values', 'Social Development', 'Humanitarian Affairs', 'Children', 'Food', 'Intellectual Property', 'Criminal Justice', 'De-mining', 'Women/gender Equality', 'Agriculture', 'Population', 'Drug Control', 'Volunteerism', 'Statistics', 'Disarmament', 'Aging', 'Crime Prevention', 'Debt Relief', 'Decolonization', 'Indigenous Peoples', 'Torture', 'HIV/AIDS', 'Minority Rights', 'Water', 'International Security', 'Habitat', 'Sustainable Development', 'Biodiversity', 'Labour', 'Youth', 'Private Sector', 'Sports for Peace and Development', 'Energy', 'Financing for Development', 'Governance', 'Education', 'New Global Institutions', 'Taxation Policy', 'Least Developed Countries', 'Climate Change', 'Trade and Development', 'Women', 'Media', 'Culture', 'Coorporate Accountability', 'Violence', 'Safety', 'Citizenship and Governance', 'Science and Technology'], 
                ['Regional Integration and Infrastructure', 'Economic and Corporate Governance', 'Climate Change and Natural Resource Management', 'Human Development', 'Agriculture and Food Security', 'Crosscutting issues (Gender and Capacity Development)'], 
                ['Advocacy and outreach', 'Trafficking in women and girls', 'Men and boys', 'Women and poverty', 'Violence against women', 'Policy advice', 'Women in power and decision-making', 'Research', 'Education and training of women', 'Women and the economy', 'The girl child', 'Human rights of women', 'Women and the environment', 'Women and health', 'Indigenous women', 'Millennium Development Goals', 'Institutional mechanisms for the advancement of women', 'Women and the media', 'Women and armed conflict', 'Women and HIV/AIDS', 'Service provision', 'Capacity building', 'Information and communication technologies'], 
                ['Development in Africa', 'Peace in Africa'], 
                ['Disabled persons', 'Aging', 'Information and Communications Technologies', 'Technical cooperation', 'Social policy', 'Poverty', 'Employment', 'Cooperative', 'Indigenous issues', 'Youth', 'Conflict'], 
                ['Information for decision-making and participation', 'International cooperation for an enabling environment', 'Partnerships', 'Waste Management', 'Land management', 'Toxic chemicals', 'Consumption and production patterns', 'Health', 'Gender equality', 'Indicators', 'Oceans and seas', 'Atmosphere', 'Mountains', 'Waste (hazardous)', 'Technology', 'Forests', 'Sustainable development in a globalizing world', 'Means of Implementation (Trade, Finance, Technology, Tranfer, etc.)', 'Demographics', 'Sanitation', 'Major Groups', 'International law', 'Biotechnology', 'Industrial development', 'Capacity-building', 'Freshwater', 'Agriculture', 'Human settlements', 'Trade and environment', 'Marine Resources', 'Mining', 'Integrated decision-making', 'Disaster management and vulnerability', 'Biodiversity', 'Waste (solid)', 'Sustainable Tourism', 'Waste (radioactive)', 'Transport', 'Energy', 'Climate change', 'Poverty', 'Education', 'Finance', 'Science', 'Sustainable development for Africa', 'Institutional arrangements', 'Desertification and Drought', 'Protecting and managing the natural resources', 'Rural Development', 'Sustainable development of SIDS'], 
                ['Conflicts Resolution'], 
                ['Population and housing censuses', 'International migration', 'Civil registration systems', 'Demographic and social surveys', 'Crime and criminal justice statistics', 'Disability Statistics', 'Services Statistics', 'Official statistics, principles and practices', 'National accounting', 'Methodological publications in statistics', 'Labour and Compensation', 'Statistical activities classification', 'Poverty statistics', 'Informal Sector Statistics', 'International Comparison Programme', 'Social Statistics and Social Monitoring', 'Household Statistics', 'Geographical names', 'Country or region codes', 'International Economic and Social Classifications', 'Statistics on international trade in services', 'Time-use statistics', 'Environmental Accounts', 'Price and Quantity Statistics', 'Development indicators'], 
                ['International migration', 'Population growth', 'Population structure', 'Morbidity and mortality', 'Reproduction, family formation and the status of women', 'Population distribution and internal migration'], 
                ['Socio-Economic Governance and Management', 'Knowledge Systems and E-government', 'Public Service and Management Innovation', 'Ethics, Transparency and Accountability', 'Governance and Public Administration', 'Public Financial Management']
            ],

            // Selected values
            reqs: {
                ngoNum: 3,
                hq: [],
                scope: [],
                established: [1625, 2022],
                members: [1, 10000],
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
