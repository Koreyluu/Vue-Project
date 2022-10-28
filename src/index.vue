<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style="color: lightcoral;">Game Library</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <router-link class="nav-link" style="text-decoration: none; " to="/add">Add Game</router-link>
          <router-link class="nav-link" style="text-decoration: none; " to="/home-list">Game List</router-link>

      </div>
    </div>
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
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding-top: 1%;
    padding-left: 2%;
  }
</style>
