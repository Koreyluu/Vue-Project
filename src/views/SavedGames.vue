<template>
<header>
  <h3>Your Favorite Games!</h3>
</header>
<div class="container-fluid" style="padding: 50px">
    <game-display @click='deleteGame' :games="games"/>
</div>
</template>

<script>
import GameDisplay from '@/components/GamesDisplay.vue'
export default {
  name: 'SavedGames',
  components: {
    GameDisplay,
  },
  data(){
    return{
      games: [],
    }
  },
  mounted(){
        if(localStorage.getItem('games')) {
      try {
        this.games = JSON.parse(localStorage.getItem('games'));
      } catch(e) {
        localStorage.removeItem('games');
      }
    }
  },
  methods: {
      deleteGame(id){
      this.game = this.game.splice(id, 1)
    }
 
  },
  created(){
    this.games = [
      {
        title: this.games.title,
        developer: this.games.developer,
        description: this.games.description,
        image: this.games.image
      }
    ]
  },
}

</script>
