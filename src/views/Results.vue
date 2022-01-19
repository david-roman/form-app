<template>
  <Title :title="'RECOMMENDED NGOS'" />
  <br /><br />
  <div id="block">
    <br />
    <p>These are the suggested NGOs that best suit your preferences:</p>
    <br />
    <li
      v-for="ngo in resultingNGOs[0]"
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
            const activities = [];

            if (this.specificAreas != undefined && this.specificAreas.length > 0) {
                for (const act in this.specificAreas)
                    activities.concat(act);
            }

            const reqs = {
                'ngoNum': parseInt(this.ngoNum),
                'hq': this.listIfString(this.hq),
                'scope': typeof this.scope == 'string' ? [this.scope] : this.scope,
                'established': this.established.map((x) => parseInt(x)),
                'members': this.members.map((x) => parseInt(x)),
                'funding': this.listIfString(this.fundings),
                'languages': this.listIfString(this.languages),
                'description': this.description,
                'continents': this.listIfString(this.continents),
                'countries': this.listIfString(this.countries),
                'activities': activities
            }

            const res = await fetch('http://localhost:3001/recommended', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(reqs)
            })
            const result = await res.json();
            this.resultingNGOs = result;
        },
        listIfString(val) {
            return typeof val == 'string' ? [val] : val;
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
