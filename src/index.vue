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
      <router-link class="nav-link" style="text-decoration: none; color: white; padding: 10px " to="/login">Login</router-link>
      <router-link class="nav-link" style="text-decoration: none; color: white;" to="/signup">Sign Up</router-link>
    </div>
</nav>
  
  <router-view/>
</template>

<script>

export default {
  name: 'index-i',

}
</script>

<style>
  #app{
    background: gray;

  }
</style>
