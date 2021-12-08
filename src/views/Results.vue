<template>
  <Title :title="'RECOMMENDED NGOS'" />
  <br /><br />
  <div id="block">
    <br />
    <p>These are the suggested NGOs that best suit your preferences:</p>
    <br />
    <li
      v-for="ngo in resultingNGOs"
      :key="ngo"
    >
      <Result :ngoData="ngo" />
      <br />
    </li>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Result from '../components/Result.vue'

export default {
    name: 'Results',
    components: {
        Title,
        Result
    },
    props: {
        ngoNum: String,
        hq: Array,
        scope: Array,
        established: Array,
        members: Array,
        fundings: Array,
        languages: Array,
        description: String,
        continents: Array,
        countries: Array,
        generalAreas: Array,
        specificAreas: Array
    },
    data() {
        return {
            resultingNGOs: []
        }
    },
    created() {
        this.submitReqs()
    },
    methods: {
        async submitReqs() {
            const activities = {};

            for (let i = 0; i < this.generalAreas.length; i++) {
                activities[this.generalAreas[i]] = this.specificAreas[i];
            }

            const reqs = {
                'ngoNum': this.ngoNum,
                'hq': this.hq,
                'scope': this.scope,
                'established': this.established,
                'members': this.members,
                'fundings': this.fundings,
                'languages': this.languages,
                'description': this.description,
                'continents': this.continents,
                'countries': this.countries,
                'activities': activities
            }

            const res = await fetch('http://localhost:3002/recommended', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(reqs)
            })
            const result = await res.json()
            this.resultingNGOs = result;

        }
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
    li {
        list-style-type: none;
    }
</style>
