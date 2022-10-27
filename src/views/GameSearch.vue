<template>
    <div class="container" style="padding: 50px 50px 50px 50px">
      <!-- <strong v-if="user">hi {{user.username}}</strong> -->
      <!-- <div v-if="!user"></div> -->
        <div class="mb-3">
            <label class="form-label" style="font-weight: bolder; padding:25px" > Search for Free to Play Games! </label>
        </div>
        <div class="input-group">  
            <input class="form-control" v-model="searchInput" placeholder="Enter a Genre">
            <button class="btn btn-outline-light" @click="getGame">Search</button>
        </div>
    </div>
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>    
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GameSearch',

  data(){
    return{
    // generated api key
     options : {
            method: 'GET',
            headers: {
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          'X-RapidAPI-Key': 'dec105ee6bmshca936e1844266f4p195268jsn40a6cdad4497'
        }
      },

    //attatching variable names to data
      user: null,
      searchedGames: '',
      searchInput: '',
      setSavedIds: '',
      gameId: '',
      developer: '',
      title: '',
      description: '',
      image: ''
    }
  },
  async created (){
    const response = await axios.get('user');
    this.user = response.data
  },
  methods: {
    //parsing through api using user search
    async getGame(event){
      event.preventDefault();
      
      if(!this.searchInput){
        return false;
      }

     try {
        console.log(this.searchInput)
        console.log(this.options)
        
          const games = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.searchInput}`, this.options)

          if (!games.ok) {
            throw new Error('something went wrong!');
          }

          const {items} = await games.json();

          const gameData = {
            gameId: items.id,
            developer: items.developer || ['No Devoloper'],
            title: items.title,
            description: items.short_description,
            image: items.thumbnail || ''
          }
          
          this.searchedGames = gameData;

          }catch (err) {
          console.error(err)
          }
          console.log(this.gameData)
          this.searchInput =''
          console.log(this.searchInput)
          console.log(this.searchedGames)
    },
  }
}

</script>

<style scoped>
  
</style>
