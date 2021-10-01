<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Todo.vue",
  data() {
    return {}
  },
  computed : mapState({
    todos : state => state.todos,
  })
}
</script>

<style scoped>
.todo-list li{
  padding: 10px;
  cursor: pointer;
  margin: 10px;
  border-radius: 4px;
  background: #eee;
  color: black;
}
ul li {
  list-style: none;
}
ul {
  padding: 0;
}
</style>
