<template>
     <div class="container">
    <h3>Edit Game</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter ID </label>
        <input type="email" class="form-control" v-model="newId" id="exampleFormControlInput1">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Title</label>
        <input type="email" class="form-control" v-model="newTitle" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Developer</label>
        <input type="email" class="form-control" v-model="newDeveloper" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Description</label>
        <input type="email" class="form-control" v-model="newDescription" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
         <tr :key="game.id" v-for="game in gameData">
        <button class="btn btn-primary" :id="game.id" @click="editGame">Submit</button>
         </tr>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(['gameData']),
    name: 'GameEdit',
  data() {
    return{
        games: [],
        newId: 0,
        newTitle: '',
        newDeveloper: '',
        newDescription: '',
  
    }
  },
  methods: {
    editGame() {
      this.game = JSON.parse(localStorage.getItem(`myNewGames`))
      console.log('edit', this.game)

      this.games.push({
            id: this.newId,
            title: this.newTitle,
            developer: this.newDeveloper,
            description: this.newDescription,
        })
          
        localStorage.setItem('myNewGames', JSON.stringify(this.games))
        this.$router.push({name: 'home-list'})
    },
  },
}
</script>