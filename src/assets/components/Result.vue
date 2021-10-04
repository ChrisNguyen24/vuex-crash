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
    <input type="text" v-model="value" />
    <span>Test text: {{ value }}</span>

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
    value:{
      get(){
        return this.$store.getters.getValue;
      },
      set(value){
        this.$store.dispatch('updateValue',value);
      }
    },
    ...mapGetters(['getName', 'tenResult'])
  },
  methods: {

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
