
<template>
<div class="container">
    <h3>My Favorite Games</h3>
  <table class="table table-hover"> 
    <thead>
      <tr>
        <th> ID# </th>
        <th> Name </th>
        <th> Developer </th>
        <th> Description </th>
        <th> Edit </th>
        <th> Delete </th>
      </tr>
    </thead>
    <tbody>
    <tr :key="game.id" v-for="game in games">
        <td>{{game.id}}</td>
        <td>{{game.title}}</td>
        <td>{{game.developer}}</td>
        <td>{{game.description}}</td>
        <td><button class="btn btn-info" @click="editGameRoute">Edit</button></td>
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
        // let game = this.games.map(game => game.id)
        // let index = game.findIndex(id => id == this.id)
        // console.log(index)

        // localStorage.removeItem(`myGames`, JSON.stringify(this.games))
        // this.games = localStorage.getItem(`myGames`)
        this.games.splice(localStorage.getItem(`myGames`), 1);
        localStorage.setItem('myGames', JSON.stringify(this.games));
      },
      editGameRoute(){
        this.$router.push({name: 'edit'})
      }
    },
  mounted(){
    this.games = this.localStorageGetGames();
    // this.$gamesData.commit('localStorageGetGames')
  }
}
</script>
