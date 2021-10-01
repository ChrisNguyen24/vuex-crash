<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Navbar></Navbar>
    <Todos></Todos>
    <hr>
    <span>total task {{totalTask}}</span>
  </div>
</template>

<script>
import Todos from './assets/components/Todo'
import Navbar from "./assets/components/Navbar";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Demo Vuex app'
    }
  },
  computed :{
    totalTask(){
      return this.$store.state.todos.length;
    }
  },
  components:{
    Todos,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
