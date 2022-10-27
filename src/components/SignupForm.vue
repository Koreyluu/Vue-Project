<template>
    <div class="container" style="padding: 60px">
        <h3>Sign Up</h3>
    </div>
    <form class="form" @submit.prevent="handleSubmit" style="padding: 200px">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-10">
            <input type="user" class="form-control" v-model="username">
        </div>
        </div>
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
        <button class="btn btn-primary btn-block">Sign up</button>
    </form>
    <div class="container" style="padding: 100px"></div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignupForm",

 data(){
  return{
    username: '',
    email: '',
    password: ''
  }
 },

methods:{
  async handleSubmit() {
    await axios.post('ßsignup',{
      username: this.username,
      email: this.email,
      password: this.password
    });
    this.$router.push('/login');
  }
}

}
</script>

<style scoped>
  .form{
    background-color: aliceblue;
  }
</style>