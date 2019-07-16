<template>
<div class="zomato">
  <v-container fluid class="zomato--banner">
    <v-layout
      row
    >
      <v-flex xs12 sm6 md6 lg6 xl6>
        <no-ssr>
          <swiper />
        </no-ssr>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6 class="zomato--banner__right">
        <h1>Tired of Waiting for Your Meal?</h1>
        <h5 class="mt-4 mb-2">Zomato lets you get the food by the best chefs without waiting. Eat what you love and save your time for something cool.</h5>
        <!--<v-text-field placeholder="Search Restaurant" />-->
        <search />
      </v-flex>
    </v-layout>
  </v-container>
  <v-container class="zomato--quicksrc mt-4">
    <h2>Quick Searches</h2>
    <h5>Discover restaurants by type of meal</h5>
    <div class="zomato--quicksrc__box mt-3">
      <nuxt-link class="zomato--quicksrc__content"
        v-for="(search, index) in quickSearches" 
        :key="index"
        :to="{path: '/zomato/result', query: {keyword : '', category: search.id_categories, title: search.name}}"
      >
        <!--<img :src="search.image" />-->
        <appImage
          :lazy-src="search.image"
          :lazy-srcset="search.image"
          backgroundColor="#fff"
        />
        <h5>{{search.name}}</h5>
      </nuxt-link>
    </div>
  </v-container>
  <v-container class="zomato--collections mt-4">
    <h2>Our Best collections</h2>
    <h5>Explore curated lists of top restaurants, cafes, pubs, and bars in Jakarta, based on trends</h5>
    <collections 
      :field="collections"
    />
  </v-container>
</div>
</template>

<script>
import collections from '~/components/zomato/collections.vue'
import appImage from '~/components/zomato/appImage.vue'
import swiper from '~/components/zomato/swiper.vue'
import search from '~/components/zomato/search.vue'
import axios from 'axios'
export default {
  components: {
    collections,
    appImage,
    search,
    swiper
  },
  middleware: 'coba',
  data () {
      return {
        quickSearches: [
          {
            id_categories: '8',
            name: 'Breakfast',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp'
          },
          {
            id_categories: '9',
            name: 'Lunch',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp'
          },
          {
            id_categories: '10',
            name: 'Dinner',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp'
          },
          {
            id_categories: '1',
            name: 'Delivery',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp'
          },
          {
            id_categories: '3',
            name: 'Drinks & Nighlife',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp'
          },
          {
            id_categories: '6',
            name: 'Cafes',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp'
          },
          {
            id_categories: '2',
            name: 'Luxury Dining',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/special_23.png?output-format=webp'
          },
          {
            id_categories: '13',
            name: 'Pocket Friendly Delivery',
            image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/special_10.png?output-format=webp'
          }
        ]
      }
  },
  asyncData ({ store }) {
    return axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=${store.state.id_country}`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
    .then((res) => {
      return { collections: res.data.collections }
    })
  }
}
</script>
