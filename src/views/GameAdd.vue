<template>
    <header>
      <h3>Add your Favorite Games!</h3>
    </header>
    <local-storage/>
</template>

<script>
import LocalStorage from '@/components/LocalStorage.vue'
export default {
  name: 'GameAdd',
  components:{
    LocalStorage,
  }
  
}
</script>
