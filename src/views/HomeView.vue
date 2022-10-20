<template>
  <div>
    <hello-world :pName="'Korey'" />
  </div>
</template>

<script>
import helloWorld from '@/components/HelloWorld.vue'

export default {

  components: {
    helloWorld,
  }
}
</script>