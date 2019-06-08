<template>
        <div class="container--thumbnailMd masonry-container" v-masonry transition-duration="1s" item-selector=".item">
            <v-flex xs12 sm6 md3 v-for="(resto, index) in allFoods" :key="index" v-masonry-tile class="item">
                <v-card>
                <!--<v-img
                    :src="resto.restaurant.thumb"
                    aspect-ratio="2.75"
                ></v-img>-->
                <appImage
                    :lazy-src="resto.restaurant.thumb"
                    :lazy-srcset="resto.restaurant.thumb"
                />
                <v-card-title primary-title>
                    <div>
                        <h3 class="mb-2">{{resto.restaurant.name}}</h3>
                        <span class="f-11 mb-2">{{resto.restaurant.location.address}}</span><br>
                        <span class="grey--text f-11">{{resto.restaurant.location.locality}}, {{resto.restaurant.location.city}}</span>
                    </div>
                    <div class="container--thumbnailMd__rating mt-3">
                      <div class="grey--text f-11">Rp{{resto.restaurant.average_cost_for_two}} for two</div>
                      <v-rating
                        v-model="resto.restaurant.user_rating.aggregate_rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$vuetify.icons.ratingFull"
                        half-increments
                        readonly
                        hover
                      ></v-rating>
                    </div>
                </v-card-title>
        
                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </div>
</template>

<script>
import appImage from '~/components/zomato/appImage.vue'
export default {
  components: {
    appImage
  },
  props: {
      field: Array,
      loadMore: Boolean
  },
  data() {
    return {
      currentFoods: [],
      allFoods: []
    }
  },
  mounted () {
      //this.currentFoods = this.field
      if(this.loadMore){
          this.allFoods = this.allFoods.concat(this.field) 
        }else{
          this.allFoods = this.field
        }
  },
  watch : {
      field(){
        //this.currentFoods = this.field
        if(this.loadMore){
          this.allFoods = this.allFoods.concat(this.field) 
        }else{
          this.allFoods = this.field
        }
      }
  }
}
</script>