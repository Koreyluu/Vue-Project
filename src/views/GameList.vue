
<template>
<div class="container">
    <h3>My Favorite Games</h3>
    <td><button class="btn btn-primary" @click="sortGames">Sort</button></td>
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
    <tr :key="game.id" v-for="game in gameData">
        <td>{{game.id}}</td>
        <td>{{game.title}}</td>
        <td>{{game.developer}}</td>
        <td>{{game.description}}</td>
        <td><button class="btn btn-info" @click="editGameRoute(game.id)">Edit</button></td>
        <td><button class="btn btn-danger" @click="deleteGame(game.id)">Delete</button></td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(['gameData']),
  name: 'GameList',
    methods:{
      deleteGame(id){
        this.$store.dispatch('deleteGame', id);
      },
      editGameRoute(id){
        this.$store.dispatch('getData', id);
        this.$router.push({name: 'edit'})
      },
      sortGames(){
        this.gameData.sort(function compareNumbers(a, b) {
          return a - b;
        });
        console.log(this.gameData);
      }
    },
  mounted(){
    this.$store.dispatch('localStorageInit')
  }
}
</script>
