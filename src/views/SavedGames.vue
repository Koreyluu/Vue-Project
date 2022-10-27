<template>

<div class="container" style="padding: 50px 50px 50px 50px">
      <div>
            <h1 v-if="user">saved games :3</h1>
            <!-- <h1 v-if="!user">Viewing {{user.username}} + 's saved games!</h1> -->
      </div>
</div>

      
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return{
       user: null,
      }
  },
  async created (){
    const response = await axios.get('user');
    this.user = response.data
  }

}

</script>
