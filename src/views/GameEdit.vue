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
        <button class="btn btn-primary" @click="editGame">Submit</button>
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
      const found = this.gameData.some(el => el.id === this.newId);
      if(!found){
        if(!isNaN(this.newId)){
          this.$store.dispatch('editGame',{
            id: this.newId,
            title: this.newTitle,
            developer: this.newDeveloper,
            description: this.newDescription,
          });
          this.$router.push({name: 'game-list'})
        }else{
          alert('Enter a number')
        }
      }else{
        alert('This ID already exists! Please enter a unique ID');
      }
        this.newId = 0;
        this.newTitle = '';
        this.newDeveloper = '';
        this.newDescription = '';
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