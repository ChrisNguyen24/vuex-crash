<template>
  <div class="counter">
    <button @click="increase">Increasing</button>
    <button @click="decrease">Decreasing</button>
    <button @click="decrement">Decrement</button>
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
        this.$store.commit('increaseOpt',30);
    },
    decrease(){
        this.$store.state.result -=1;
    },
    decrement() {
      this.$store.commit('decrement');
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
