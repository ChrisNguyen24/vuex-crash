<template>
  <div class="result">
    result {{result}}
  </div>
</template>

<script>
export default {
  props : ['result'],
  name: "Todo.vue",
  data() {
    return {
      result: 0,
    }
  },
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
