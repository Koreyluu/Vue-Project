<template>
 <div :key="game.id" v-for="game in games"> 
    <div class="card" style="width: 18rem;">
        <img :src="game.image" class="card-img-top" alt="gameImage">
        <div class="card-body">
            <h5 class="card-title">{{game.title}}</h5>
            <h3 class="developer">Developer: {{game.developer}}</h3>
            <p class="card-text">Description: {{game.description}}</p>  
        </div>
            <button class="btn btn-outline-primary">Edit</button>
            <button class="btn btn-outline-danger" @click="deleteGame">Delete</button>
    </div>
 </div>    
</template>

<script>
export default {
  name: 'GameDisplay',
  props: {
    games: Array,
  },
  methods: {
    deleteGame(id){
    this.game = this.game.splice(id, 1)
    this.savedGames();
    }
  },
}
</script>

<style scoped>
.card{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;    
}
.developer{
    font-size: 75%;
    color: red;
}
.btn {
  padding: 10px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 15px;
  font-family: inherit;
}
</style>