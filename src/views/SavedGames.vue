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
  mounted(){
    if(localStorage.getItem('games')) {
        try {
        this.games = JSON.parse(localStorage.getItem('games'));
    } catch(e) {
        localStorage.removeItem('games');
    }
  }
},
}

</script>
