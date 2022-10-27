<template>
    <div class="container" style="padding: 50px 50px 50px 50px">
      <!-- <strong v-if="user">hi {{user.username}}</strong> -->
      <!-- <div v-if="!user"></div> -->
        <div class="mb-3">
            <label class="form-label" style="font-weight: bolder; padding:25px" > Search for Free to Play Games! </label>
        </div>
        <div class="input-group">  
            <input class="form-control" v-model="searchInput" placeholder="Enter a Genre">
            <button class="btn btn-outline-light" @click="getGame">Search</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GameSearch',

  data(){
    return{

    //attatching variable names to data
      user: null,
      searchedGames: '',
      searchInput: '',
      setSavedIds: '',
      gameId: '',
      developer: '',
      title: '',
      description: '',
      image: ''
    }
  },

  methods: {
    
  }
}

</script>

<style scoped>
  
</style>
