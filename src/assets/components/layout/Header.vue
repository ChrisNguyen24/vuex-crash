<template>
  <ul class="nav">
    <router-link
      tag="li"
      active-class="active"
      exact
      to="/"><a>Home</a></router-link>
    <router-link
      tag="li"
      active-class="active"
      to="/user/1"><a>User</a></router-link>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
