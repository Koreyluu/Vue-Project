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
        this.$store.dispatch('editGame',{
          id: this.newId,
          title: this.newTitle,
          developer: this.newDeveloper,
          description: this.newDescription,
        });
        this.$router.push({name: 'game-list'})
      }else{
        alert('This ID already exists!');
        this.newId = 0;
        this.newTitle = '';
        this.newDeveloper = '';
        this.newDescription = '';
      }

    // console.log('??', this.gameData[3].title)
    },
  },
}
</script>