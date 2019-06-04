<template>
<div class="zomato">
  <v-container fluid class="zomato--banner">
    <v-layout
      row
    >
      <v-flex xs12 sm6 md6 lg6 xl6>
        <no-ssr>
          <div v-swiper:mySwiper1="swiperFadeLoop" class="swiper-background">
            <div class="swiper-wrapper">
                <div class="swiper-slide zomato--banner__swiper" v-for="(banner, index) in bannerSlide" :key="index">
                  <img :src="banner.image" />
                  <div class="swiper-slide-content">
                    <h3>{{banner.name}}</h3>
                    <v-btn flat color="orange">
                      Explore 
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                          <g fill="none" fill-rule="evenodd">
                              <path d="M0 0h24v24H0z"/>
                              <path fill="#ff9800" fill-rule="nonzero" d="M0 13.474v-2.948h18.246l-8.351-8.42L12 0l12 12-12 12-2.175-2.105 8.42-8.421z"/>
                          </g>
                      </svg>
                    </v-btn>
                  </div>
                  <p>
                    {{banner.restaurant}}<br>
                    <v-icon>location_on</v-icon> {{banner.location.locality}}, {{banner.location.city}}
                  </p>
                </div>
              </div>
              <div class="swiper-nav">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
          </div>
        </no-ssr>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6 class="zomato--banner__right">
        <h1>Tired of Waiting for Your Meal?</h1>
        <h5 class="mt-4 mb-2">Zomato lets you get the food by the best chefs without waiting. Eat what you love and save your time for something cool.</h5>
        <v-text-field placeholder="Search Restaurant" />
      </v-flex>
    </v-layout>
  </v-container>
  <v-container class="zomato--quicksrc mt-4">
    <h2>Quick Searches</h2>
    <h5>Discover restaurants by type of meal</h5>
    <div class="zomato--quicksrc__box mt-3">
      <div class="zomato--quicksrc__content" v-for="(search, index) in quickSearches" :key="index">
        <img :src="search.image" />
        <h5>{{search.name}}</h5>
      </div>
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
import axios from 'axios'
export default {
  components: {
    collections
  },
  data () {
      return {
        swiperFadeLoop: {
          loop: true,
          effect: 'fade',
          autoplay: {
            delay: 7000,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        bannerSlide: [
          {image: 'https://b.zmtcdn.com/data/reviews_photos/e5c/8b2ad3f1740f2649d9537b30fb6e6e5c_1500873465.jpg?fit=around%7C700%3A700&crop=700%3A550%3B%2A%2C%2A',
           name: 'American Food',
           id_cuisine: '1',
           restaurant: 'Street Steak',
           location: {
              locality: "Kelapa Gading",
              city: "Jakarta"
           }
          },
          {image: 'https://b.zmtcdn.com/data/pictures/chains/1/7404491/a1977099f0ede457297e1aaaa930ab43.jpg?fit=around%7C700%3A700&crop=700%3A550%3B%2A%2C%2A',
           name: 'Arabian Food',
           id_cuisine: '4',
           restaurant: 'Al-Jazeerah',
           location:{
              locality: "Cikini",
              city: "Jakarta"
           }
          },
          {image: 'https://b.zmtcdn.com/data/pictures/chains/2/18615392/0a873501ec5f81b17a7cb6cd6249a938.jpg?fit=around%7C700%3A700&crop=700%3A550%3B%2A%2C%2A',
           name: 'Asian Food',
           id_cuisine: '3',
           restaurant: 'WAKI Japanese BBQ Dining',
           location:{
              locality: "Thamrin",
              city: "Jakarta"
           }
          },
          {image: 'https://b.zmtcdn.com/data/reviews_photos/1ce/f546cb7d3bf5842ceb664a92949eb1ce_1522941464.jpg?fit=around%7C700%3A700&crop=700%3A550%3B%2A%2C%2A',
           name: 'Australian Food',
           id_cuisine: '131',
           restaurant: 'Fish Me',
           location:{
              locality: "Kec. Tangerang",
              city: "Tangerang"
           }
          },
          {image: 'https://b.zmtcdn.com/data/reviews_photos/c07/ddbbb2278bac96457b02c7a574e33c07_1504522065.jpg?fit=around%7C700%3A700&crop=700%3A550%3B%2A%2C%2A',
           name: 'French Food',
           id_cuisine: '45',
           restaurant: 'Le Quartier',
           location:{
              locality: "Senopati",
              city: "Jakarta"
           }
          },
          {image: 'https://b.zmtcdn.com/data/reviews_photos/19e/c13447c5e01f69021b4d53829c5b619e_1530292565.jpg?fit=around%7C700%3A700&crop=700%3A550%3B%2A%2C%2A',
           name: 'Chinese Food',
           id_cuisine: '25',
           restaurant: 'Wing Heng Hongkong Dim Sum Shop',
           location:{
              locality: "Pluit",
              city: "Jakarta"
           }
          }
        ],
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
    return axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=74`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
    .then((res) => {
      return { collections: res.data.collections }
    })
  }
}
</script>
