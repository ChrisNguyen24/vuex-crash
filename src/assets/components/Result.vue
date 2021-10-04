<template>
  <div class="result">
    <p>
      result {{tenResult}}
    </p>
    <hr>
    <p>
      Get Name: {{getName}}
    </p>
    <hr>
    <input type="text" :value="valuex" @input="updateValue" />
    <span>Test text: {{ valuex }}</span>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Todo.vue",
  data() {
    return {
      result: this.$store.state.result,
    }
  },
  computed : {
    /*value: function (){
      return this.$store.getters.getValue;
    },*/
    valuex(){
      return this.$store.getters.getValue;
    },
    ...mapGetters(['getName', 'tenResult'])
  },
  methods: {
    updateValue(event){
      this.$store.dispatch('updateValue',event.target.value)
    },
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
