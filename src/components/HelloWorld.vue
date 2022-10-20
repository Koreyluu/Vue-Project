<template>
  <div>
    <h3>Hello my name is {{ name }}</h3>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.pName,
    }
  },
  props: {
    pName: {
      type: String,
    }
  },
    methods: {
    changeName() {
      if (this.name === 'Korey') {
        this.name = 'Carlos';
        return;
      }
      this.name = 'Korey';
    },
  }
  
}
</script>