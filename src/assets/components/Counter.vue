<template>
  <div class="counter">
    <button @click="increase">Increasing</button>
    <button @click="decrease">Decreasing</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "Todo.vue",
  data() {
    return {}
  },
  methods: {
    decrease(){
        this.$store.state.result -=1;
    },
    ...mapMutations(['decrement','increaseOpt'])
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
