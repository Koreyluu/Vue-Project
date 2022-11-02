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
        <button class="btn btn-primary" @click="editGame">Submit</button>
      </div>
  </div>
</template>

<script>
export default {
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
      
      this.game = JSON.parse(localStorage.getItem(`myGames`))
      console.log(this.game)

      this.games.push({
            id: this.newId,
            title: this.newTitle,
            developer: this.newDeveloper,
            description: this.newDescription,
        })
          
        localStorage.setItem('myGames', JSON.stringify(this.games))
        this.$router.push({name: 'home-list'})
    },
  },
}
</script>