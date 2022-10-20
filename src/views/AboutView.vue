<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {

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
    //parsing through api using user search
    async getGame(event){
      event.preventDefault();

      if(!this.searchInput){
        return false;
      }

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

          }catch (err) {
          console.error(err)
      }
    }


  }
}

</script>
