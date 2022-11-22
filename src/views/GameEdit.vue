<template>
     <div class="container">
    <h3>Edit Game</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter ID </label>
        <input type="email" class="form-control" v-model="newId">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Title</label>
        <input type="email" class="form-control" v-model="newTitle">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Developer</label>
        <input type="email" class="form-control" v-model="newDeveloper">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Description</label>
        <input type="email" class="form-control" v-model="newDescription">
      </div>
      <div class="mb-3">
        <button class="btn btn-dark" @click="backToList">Back</button>
        <button class="btn btn-primary" @click="checkForm">Submit</button>
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
        newId: 0,
        newTitle: '',
        newDeveloper: '',
        newDescription: '',
    }
  },
  methods: {
    editGame() {
        this.$store.dispatch('editGame',{
          id: this.newId,
          title: this.newTitle,
          developer: this.newDeveloper,
          description: this.newDescription,
        });
      this.newId = 0;
      this.newTitle = '';
      this.newDeveloper = '';
      this.newDescription = '';
      this.$router.push({name: 'game-list'})
    },
    checkForm(e){
      const gameFound = this.gameData.some(el => el.title === this.newTitle);
      const found = this.gameData.some(el => el.id === this.newId);
      
      if(this.newId !== 0 && !this.newId || !this.newTitle || !this.newDeveloper || !this.newDescription){
        alert('Missing Fields!!')
      }else{
        if(!found && !gameFound){
          if(!isNaN(this.newId)){
          this.editGame()
          }else{
            alert('Enter a valid ID number')
          }
        }else{
          alert('This already exists! Please enter a unique Game and ID')
        }
      }
      e.preventDefault();
    },
    backToList(){
      this.$router.push({name: 'game-list'})
    }
  },
}
</script>

<style scoped>
.btn{
  margin-right: 5px;
}
</style>