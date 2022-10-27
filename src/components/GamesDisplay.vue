<template>
 <div :key="game.id" v-for="game in games"> 
    <div class="card" style="width: 18rem;">
        <!-- <img src="(game.image)" class="card-img-top" alt="gameImage"> -->
        <div class="card-body">
            <h5 class="card-title">{{game.title}}</h5>
            <h3 class="developer">Developer: {{game.developer}}</h3>
            <p class="card-text">Description: {{game.description}}</p>  
        </div>
        <div>
            <button class="btn btn-outline-primary" @click="getGame">Edit</button>
            <button class="btn btn-outline-danger" @click="deleteGame">Delete</button>
        </div>
    </div>
 </div>    
</template>

<script>
export default {
    name: 'GameDisplay',

    props: {
        games: Array,
    },
}
</script>

<style scoped>
.developer{
    font-size: 75%;
    color: red;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-family: inherit;
}
</style>