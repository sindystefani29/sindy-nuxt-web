<template>
    <div>
        <no-ssr>
            <div v-swiper:mySwiper2="swiperOption" class="swiper-container mt-3">
                <div class="swiper-wrapper">
                <div class="swiper-slide zomato--collections__swiper" v-for="(collections, index) in field" :key="index">
                    <div class="zomato--collections__image">
                        <img :src="collections.collection.image_url" />
                    </div>
                    <div class="zomato--collections__content">
                        <h4 style="-webkit-box-orient: vertical">{{collections.collection.description}}</h4>
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
                </div>
                </div>
                <div class="swiper-nav">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </no-ssr>
    </div>
</template>

<script>
export default {
  props: {
      field: Array
  },
  data() {
    return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
    }
  }
}
</script>