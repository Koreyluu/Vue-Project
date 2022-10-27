<template>
    <header>
      <h3>Add your Favorite Games!</h3>
    </header>
    <div class="container" style="padding: 50px">
        <div class="input">
            <div class="input-group">  
                <input class="form-control" v-model="title" placeholder="Enter title">
            </div>
            <div class="input-group">  
                <input class="form-control" v-model="developer" placeholder="Enter developer">
            </div>
            <div class="input-group">  
                <input class="form-control" v-model="description" placeholder="Enter description">
            </div>
            <div class="input-group">  
                <input class="form-control" v-model="image" placeholder="Enter Image Link">
            </div>
            <button class="btn btn-outline-light" @click="onSubmit">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GameAdd',
  data(){
    return{
      id: '',
      developer: '',
      title: '',
      description: '',
      image: ''
    }
  },
  methods: {  
    onSubmit(e){
      e.preventDefault()
    
      const newGame ={
        id: this.id + 1,
        developer: this.developer,
        title: this.title,
        description: this.description,
        image: this.image
      }
      console.log(newGame)
      this.$emit('add-game', newGame)

        this.developer = '',
        this.title = '',
        this.description = '',
        this.image = ''
    }

  }
}
</script>

<style scoped>
  .input{
    align-content: center;
    margin: 5px;
    padding-top: 0%;
    padding-right: 20%;
    padding-left: 20%;

  }
  .input-group{
    padding-bottom: 5px;
  }
  .form-label{
    font-weight: bolder;
    
  }
</style>
