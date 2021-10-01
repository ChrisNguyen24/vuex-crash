<template>
  <div class="result">
    <p>
      result {{getResult}}
    </p>
    <hr>
    <p>
      Get Name {{getName}}
    </p>

  </div>
</template>

<script>
export default {
  name: "Todo.vue",
  data() {
    return {
      result: this.$store.state.result
    }
  },
  computed : {
    getName (){
      return this.$store.getters.getName;
    },
    getResult (){
      return this.$store.state.result
    }
  }
}
</script>

<style scoped>
.result{
  padding: 10px;
  cursor: pointer;
  margin: 10px;
  border-radius: 4px;
  background: #eee;
  color: black;
}

</style>
