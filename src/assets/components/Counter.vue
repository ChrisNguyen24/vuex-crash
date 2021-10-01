<template>
  <div class="counter">
    <button @click="increase">Increasing</button>
    <button @click="decrease">Decreasing</button>
  </div>
</template>

<script>
export default {
  name: "Todo.vue",
  data() {
    return {}
  },
  methods: {
    increase(){
      this.$emit('updatecounter',1);
    },
    decrease(){
      this.$emit('updatecounter',-1);
    }
  }
}
</script>

<style scoped>
.counter{
  padding: 10px;
  cursor: pointer;
  margin: 10px;
  border-radius: 4px;
  background: #eee;
  color: black;
}

</style>
