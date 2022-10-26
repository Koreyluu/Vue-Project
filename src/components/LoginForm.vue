<template>
      <div class="container" style="padding: 60px">
          <h3>Login</h3>
      </div>
      <form class="form" @submit.prevent="handleSubmit" style="padding: 200px">
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" v-model="email">
            </div>
            </div>
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" v-model="password">
            </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <div class="container" style="padding: 100px"></div>
</template>

<script>
export default {
  name: 'LoginForm',

  data(){
    return{
      email: '',
      password: '',
    }
  },

  methods: {
      handleSubmit(){
    
    const data = {
      email: this.email,
      password: this.password
    };

    console.log(data)

  }
  }

}
</script>

<style scoped>
  .form{
    background-color: aliceblue;
  }
</style>
