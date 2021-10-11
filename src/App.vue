<template>
  <div id="app">
    <div class="block" hidden>
      <h1>{{ msg }}</h1>
      <Navbar></Navbar>
      <Todos></Todos>
      <hr>
      <span>total task {{totalTask}}</span>
      <span>ten result {{tenResult}}</span>
      <Counter ></Counter>
      <Result ></Result>
    </div>
    <header-page></header-page>
    <h3>{{msg}}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
import Todos from './assets/components/Todo'
import Navbar from "./assets/components/Navbar";
import Counter from "./assets/components/Counter";
import Result from "./assets/components/Result";
import HeaderPage from "./assets/components/layout/Header";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Demo Vuex app',
      result : 0
    }
  },
/*  computed :{
    totalTask(){
      return this.$store.state.todos.length;
    },
    tenResult() {
      return this.$store.getters.tenResult;
    }
  },*/
  components:{
    Todos,
    Navbar,
    Counter,
    Result,
    HeaderPage
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
