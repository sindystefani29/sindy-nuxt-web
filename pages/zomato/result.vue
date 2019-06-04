<template>
  <v-layout
    column
    justify-center
    align-center
  >
    {{$store.state.coba}}
    <no-ssr>
      <thumbnailMd 
        :field="restaurants"
      />
    </no-ssr>
    <v-btn @click="add()">
      add
    </v-btn>
  </v-layout>
</template>

<script>
import thumbnailMd from '~/components/zomato/thumbnailMd.vue'
import axios from 'axios'
import NoSSR from 'vue-no-ssr'
export default {
  components: {
    thumbnailMd,
    'no-ssr': NoSSR
  },
  middleware: 'coba',
  data() {
    return {
      restaurants: []
    }
  },
  asyncData ({ store }) {
    return axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${store.state.coba}&entity_type=city&count=8`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
    .then((res) => {
      return { restaurants: res.data.restaurants }
    })
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods :{
    add(){
      let _this = this
      axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.$store.state.coba}&entity_type=city&count=8`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
      .then(response => (_this.restaurants = response.data.restaurants))
      .catch(e => {
        this.error.push(e)
      })
    }
  }
}
</script>
