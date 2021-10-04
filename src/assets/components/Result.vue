<template>
  <div class="result">
    <p>
      result {{tenResult}}
    </p>
    <hr>
    <p>
      Get Name: {{getName}}
    </p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Todo.vue",
  data() {
    return {
      result: this.$store.state.result
    }
  },
  computed : {
    ...mapGetters(['getName', 'tenResult'])
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
