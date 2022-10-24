<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style="color: lightcoral;">Free Game Search</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <router-link class="nav-link" style="text-decoration: none; " to="/">Home</router-link>
          <router-link class="nav-link" style="text-decoration: none;" to="/saved">Saved Games</router-link>
      </div>
    </div>
      <LoginForm/>
      <SignupForm/>
    </div>
</nav>
  
  <router-view/>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'index-i',
  
  components:{
    LoginForm,
    SignupForm
  },

}
</script>

<style>
  #app{
    background: gray;

  }
</style>
