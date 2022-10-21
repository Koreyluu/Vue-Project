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
      <button @click="showLogin" class="btn btn-outline-light" href="/login">Log in</button>
      
  </div>
</nav>
  <login-form v-if="login"/>
  <router-view/>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'index-i',
  
  components:{
    LoginForm
  },

  data(){
    return{
      login: false,
    }
  },

  methods:{
    showLogin(event){
      event.preventDefault();
      this.login = true;
    }
  }
}
</script>

<style>
  #app{
    background: gray;

  }
</style>
