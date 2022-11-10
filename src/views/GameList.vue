
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
    <tr :key="game.id" v-for="game in gameData">
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
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(['gameData']),
  name: 'GameList',
    data(){
      return{
        games: [],
    }
  },
    methods:{
      deleteGame(){
        console.log('id', this.id)
        this.$store.dispatch('deleteGame',{
            id: this.gameData.id,
        });
        console.log('id', this.id)
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
