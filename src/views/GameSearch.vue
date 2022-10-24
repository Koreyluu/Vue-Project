<template>

    <div class="container" style="padding: 50px 50px 50px 50px">
        <div class="mb-3">
            <label class="form-label" style="font-weight: bolder; padding:25px 0px 0px 0px;" > Search for Free to Play Games! </label>
        </div>
      
        <div class="input-group">  
            <input class="form-control" v-model="genre" placeholder="Enter a Genre">
            <button class="btn btn-outline-light" @click="getGame">Search</button>
        </div>
    </div>

    <!-- <div class="container">
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>    
          </div>
      </div>
    </div> -->

</template>

<script>
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
      genre: '',
      searchInput: this.pSearch,
      gameId: this.pId,
      developer: this.pDeveloper,
      title: this.pTitle,
      description: this.pDescription,
      image: this.pImage
    }
  },
  //specifying type of data
  props:{
    pSearch: String,
    pId: Number,
    pDeveloper: String,
    pTitle: String,
    pDescription: String,
    pImage: String
  },

  methods: {
    //user search input
    search(){
      this.searchInput = this.genre
      // console.log(this.searchInput)
      // console.log(this.options)
    },
    
    //parsing through api using user search
    async getGame(event){
      event.preventDefault();
      
      this.search(this.genre)

      if(!this.searchInput){
        return false;
      }

        console.log(this.searchInput)
        console.log(this.options)

     try {
          const games = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.searchInput}`, this.options)

          if (!games.ok) {
            throw new Error('something went wrong!');
          }

          const {items} = await games.json();
          
          this.gameId = items.id
          this.developer = items.developer || ['No developer']
          this.title = items.title
          this.description = items.short_description
          this.image = items.thumbnail || ''

          // const {gameData} = items.map((game) => ({ 
          //   this.gameId = game.id,
          //   this.developer = game.developer || ['No developer'],
          //   this.title = game.title,
          //   this.description = game.short_description,
          //   this.image = game.thumbnail || ''
          // }));


          }catch (err) {
          console.error(err)
          }
          console.log(this.title)
    }
  }
}

</script>

<style scoped>
  
</style>
