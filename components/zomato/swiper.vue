<template>
    <div>
        <div v-swiper:mySwiper1="swiperFadeLoop" class="swiper-background">
            <div class="swiper-wrapper" id="target">
                <div class="swiper-slide zomato--banner__swiper" v-for="(banner, index) in bannerSlide" :key="index">
                  <img :src="banner.image" />
                  <!--<appImage
                            :lazy-src="banner.image"
                        />-->
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
    </div>
</template>

<script>
import appImage from '~/components/zomato/appImage.vue'
export default {
  components: {
    appImage
  },
  props: {
      field: Array
  },
  data() {
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
        ]
    }
  },
  mounted(){
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type == 'attributes') {
                let a = document.getElementById("target").children
                for(let i = 0; i < a.length; i++){
                    if(a[i].classList.contains("swiper-slide-active")){
                        console.log(a[i].firstChild.src)
                    }
                }

            }
        });   
    });
    
    var observerConfig = {
        attributes: true
    };
    
    // Listen to all changes to body and child nodes
    var targetNode = document.getElementById('target')
    observer.observe(targetNode, observerConfig);
  }
}
</script>