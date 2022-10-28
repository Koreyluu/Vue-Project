<template>
  <div class="container">
    <h3>Add your Favorite Games!</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Rating </label>
        <input type="email" class="form-control" v-model="rating" id="exampleFormControlInput1">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Title</label>
        <input type="email" class="form-control" v-model="title" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Developer</label>
        <input type="email" class="form-control" v-model="developer" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Description</label>
        <input type="email" class="form-control" v-model="description" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" @click="addGame">Submit</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameAdd',
  data() {
    return{
      games:[],
      rating: 0,
      title: '',
      developer: '',
      description: '',
    }
  },
  methods: {
    localStorageGetGames() {
      if(localStorage.getItem('myGames')) {
        return JSON.parse(localStorage.getItem('myGames'))
      } else {
        localStorage.setItem('myGames', JSON.stringify([]));
        return [];
      }
    },
    localStorageSave(){
      localStorage.setItem('myGames', JSON.stringify(this.games));
    },
    addGame() {
      this.games.push({
        rating: this.rating,
        title: this.title,
        developer: this.developer,
        description: this.description,
      });
        this.localStorageSave();
        this.rating = 0;
        this.title = '';
        this.developer = '';
        this.description = '';
        this.$router.push({name: 'home-list'})
    },
  },
  mounted() {
    this.games = this.localStorageGetGames();
  },
}
</script>
