
<template>
<div class="container">
    <h3>My Favorite Games</h3>
  <table class="table table-hover"> 
    <thead>
      <tr>
        <th> Rating </th>
        <th> Name </th>
        <th> Developer </th>
        <th> Description </th>
        <th> Edit </th>
        <th> Delete </th>
      </tr>
    </thead>
    <tbody>
    <tr :key="game.id" v-for="game in games">
        <td>{{game.rating}}</td>
        <td>{{game.title}}</td>
        <td>{{game.developer}}</td>
        <td>{{game.description}}</td>
        <td><button class="btn btn-info">Edit</button></td>
        <td><button class="btn btn-danger" @click="deleteGame">Delete</button></td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'GameList',
    data(){
      return{
        games: []
    }
  },
    methods:{
     localStorageGetGames() {
      if(localStorage.getItem('myGames')) {
        return JSON.parse(localStorage.getItem('myGames'))
      } else {
        localStorage.setItem('myGames', JSON.stringify([]));
        return [];
      }
      },
      deleteGame(){
        this.games.pop(localStorage.getItem('myGames'));
        localStorage.setItem('myGames', JSON.stringify(this.games));
      }
    },
  mounted(){
    this.games = this.localStorageGetGames();
  }
}
</script>
