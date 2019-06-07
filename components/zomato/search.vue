<template>
    <div class="zomato--searchText">
        <v-text-field 
          placeholder="Search Restaurant" 
          v-model="txtSearch" 
          @blur="searchinActive(), removeActiveItem()"
          v-on:keyup="searchKeyUp($event)"
        />
        <span class="d-none">{{temp}}</span>
        <ul ref="search" class="d-none">
            <li
              v-for="(restaurant, index) in suggestion" 
              :key="index" @click="searchinActive()"
              @mouseover="mouseOverOptions(index)"
              @mouseleave="removeActiveItem()"
              @mousedown="mouseDownOptions(index, restaurant.restaurant.name, $event)"
            >{{restaurant.restaurant.name}}<h5>{{restaurant.restaurant.location.locality}}</h5></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      txtSearch: '',
      suggestion: '',
      counter: 0,
      temp: ''
    }
  },
  watch: {
      txtSearch () {
          if (this.txtSearch.length > 2){
              this.searchActive()
          }else{
              this.searchinActive()
          }
      }
  },
  methods: {
    searchKeyUp(event){
      let suggestionLength = this.suggestion.length
      this.removeActiveItem()
      if (this.txtSearch.length > 2){
        if(event.keyCode == 38){
          if(this.counter > 1){
            this.counter -= 1
            this.txtSearch = `${this.$refs.search.children[this.counter-1].firstChild.nodeValue}, ${this.$refs.search.children[this.counter-1].children[0].childNodes[0].nodeValue}`
            this.$refs.search.children[this.counter-1].classList.add("bg-red")
          }else{
            this.counter = suggestionLength+1
            this.txtSearch = this.temp
          }
        }else if(event.keyCode == 40){  
          if(this.counter < suggestionLength){
            this.counter += 1
            this.txtSearch = `${this.$refs.search.children[this.counter-1].firstChild.nodeValue}, ${this.$refs.search.children[this.counter-1].children[0].childNodes[0].nodeValue}`
            this.$refs.search.children[this.counter-1].classList.add("bg-red")
          }else{
            this.counter = 0
            this.txtSearch = this.temp
          }
        }else if(event.keyCode == 13){
          alert(this.txtSearch)
        }else{
          this.temp = this.txtSearch
          this.searchSuggestion()
        }
      }
    },
    mouseOverOptions(index){
      this.removeActiveItem()
      this.$refs.search.children[index].classList.add("bg-red")
    },
    mouseDownOptions(index, restaurant, event){
      if(event.button == 0){
        this.txtSearch = `${this.$refs.search.children[index].firstChild.nodeValue}, ${this.$refs.search.children[index].children[0].childNodes[0].nodeValue}`
        alert(this.txtSearch)
      }
    },
    removeActiveItem(){
      let suggestionLength = this.suggestion.length
      for(let i = 0; i < suggestionLength; i++){
        this.$refs.search.children[i].classList.remove("bg-red")
      }
    },
    searchActive(){
      this.$refs.search.classList.remove("d-none")
    },
    searchinActive(){
      this.$refs.search.classList.add("d-none")
    },
    searchSuggestion(){
      let _this = this
      this.counter = 0
      axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${this.txtSearch}&count=5`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
      .then(response => (_this.suggestion = response.data.restaurants))
      .catch(e => {
        this.error.push(e)
      })
    }
  }
}
</script>