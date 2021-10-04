<template>
  <div class="counter">
    <button @click="decrementTimeout">decrementTimeout</button>
    <button @click="decrease">Decreasing</button>
    <button @click="decrement">Decrement</button>
    <button @click="incement(3)">Action Increment</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: "Todo.vue",
  data() {
    return {}
  },
  methods: {
    decrease(){
        this.$store.state.result -=1;
    },
    ...mapMutations(['decrement','increaseOpt']),
    ...mapActions(['incement','decrementTimeout'])
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
