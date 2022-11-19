<template>
  <div class="container">
    <h3>Add your Favorite Games!</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter ID </label>
        <input type="email" class="form-control" v-model="id">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Title</label>
        <input type="email" class="form-control" v-model="title">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Developer</label>
        <input type="email" class="form-control" v-model="developer">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Description</label>
        <input type="email" class="form-control" v-model="description">
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" @click="checkForm">Submit</button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(['gameData']),
  name: 'GameAdd',
  data() {
    return{
      id: 0,
      title: '',
      developer: '',
      description: '',
      index: -1,
    }
  },
  methods: {
    addGame() {
      this.$store.dispatch('addGame',{
        id: this.id,
        title: this.title,
        developer: this.developer,
        description: this.description,
      });
      this.id = 0;
      this.title = '';
      this.developer = '';
      this.description = '';
      this.$router.push({name: 'game-list'})
    },
    checkForm(e){
      const found = this.gameData.some(el => el.id === this.id);
      if(this.id !== 0 && !this.id ||!this.title || !this.developer || !this.description){
        alert('Missing Fields!!')
      }else{
        if(!found){
          if(!isNaN(this.id)){
          this.addGame()
          }else{
            alert('Enter a number')
          }
        }else{
          alert('This ID already exists! Please enter a unique ID')
        }
      }
      e.preventDefault();
    }
  },
  mounted() {
     this.$store.dispatch('localStorageInit')
  },
}
</script>
