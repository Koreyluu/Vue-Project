<template>
<header>
  <h3>Your Favorite Games!</h3>
</header>
<div class="container-fluid" style="padding: 50px">
    <game-display :games="games"/>
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
  methods: {
    deleteGame(id){
      this.games = this.games.filter((game) => game.id !== id)
    }
 
  },
  created(){
    this.games = [
      {
        id: 0,
        title: 'League of legends',
        developer: 'RiotGames',
        description: 'Its a MOBA that makes your lose your mental sanity',
        image:'src/images/lolImage.jpeg'
      },
      {
        id: 1,
        title: 'Valorant',
        developer: 'RiotGames',
        description: 'Shooty shoot pew pew',
        image:'src/images/ValorantImage.jpeg'
      }
    ]
  },
}

</script>
