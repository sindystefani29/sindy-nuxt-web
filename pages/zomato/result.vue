<template>
<div class="zomato">
  <v-container fluid>
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex xs12 sm6 md6>
        <search />
      </v-flex>
      <v-flex xs12 sm6 md6 class="zomato--sort">
        <v-select
          :items="sorting"
          @change="doSorting(sortBy)"
          item-value="sort"
          item-text="name"
          label="Sort by"
          v-model="sortBy"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container fluid>
    <v-layout
      column
      justify-center
      align-center
    >
      <!--{{$store.state.id_country}}-->
      <h2 v-if="title">{{title}}</h2>
      <h2 v-if="keyword">Hasil Pencarian: {{keyword}}</h2>
      <no-ssr>
        <thumbnailMd 
          :field="restaurants"
          :loadMore="loadMoreProps"
        />
      </no-ssr>
      <v-btn @click="loadMore()">
        Load More
      </v-btn>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import thumbnailMd from '~/components/zomato/thumbnailMd.vue'
import search from '~/components/zomato/search.vue'
import axios from 'axios'
export default {
  components: {
    thumbnailMd,
    search
  },
  middleware: 'locationID',
  watchQuery: true,
  data() {
    return {
      restaurants: [],
      start: 0,
      count: 8,
      loadMoreProps: true,
      sortBy: '',
      sorting: [
        {name: 'Cost low to high', sort: 'sort=cost&order=asc'},
        {name: 'Cost high to low', sort: 'sort=cost&order=desc'},
        {name: 'Rating low to high', sort: 'sort=rating&order=asc'},
        {name: 'Rating high to low', sort: 'sort=rating&order=desc'}
      ]
    }
  },
  asyncData ({ store, query }) {
    return axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${store.state.id_country}&entity_type=city&category=${query.category}&q=${query.keyword}&start=0&count=8`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
    .then((res) => {
      return {
        title: query.title,
        keyword: query.keyword,
        restaurants: res.data.restaurants,
      }
    })
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods :{
    loadMore(){
      let _this = this
      this.start += 8
      this.loadMoreProps = true
      axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.$store.state.id_country}&entity_type=city&category=${this.$route.query.category}&q=${this.$route.query.keyword}&${this.sortBy}&start=${this.start}&count=${this.count}`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
      .then(response => (_this.restaurants = response.data.restaurants))
      .catch(e => {
        this.error.push(e)
      })
    },
    doSorting(sort){
      let _this = this
      this.start = 0
      this.loadMoreProps = false
      axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.$store.state.id_country}&entity_type=city&category=${this.$route.query.category}&q=${this.$route.query.keyword}&${sort}&start=${this.start}&count=${this.count}`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
      .then(response => (_this.restaurants = response.data.restaurants))
      .catch(e => {
        this.error.push(e)
      })
    }
  }
}
</script>
