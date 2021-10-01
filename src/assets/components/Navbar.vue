<template>
  <div class="navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.navbar{
  padding: 5px;
  text-align: center;
  background: #eee;
  color: #2c3e50;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
a {

}
</style>
