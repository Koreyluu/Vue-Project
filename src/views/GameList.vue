
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
        games: [],
    }
  },
    methods:{
      deleteGame(){
        // this.games.splice(localStorage.getItem(`myGames`), 1);
        // localStorage.setItem('myGames', JSON.stringify(this.games));
        this.$store.dispatch('deleteGame',{
        id: this.id,
        title: this.title,
        developer: this.developer,
        description: this.description,
      });
      },
      editGameRoute(){
        this.$router.push({name: 'edit'})
      }
    },
  mounted(){
    this.games = this.$store.dispatch('localStorageInit')
    console.log('games list', this.games)
  }
}
</script>
