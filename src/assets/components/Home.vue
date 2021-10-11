<template>
  <div id="home">
    <h1>Wellcome Homepages</h1>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur ea explicabo odio. A ab accusamus consequatur eligendi explicabo facilis fuga illum, molestiae non, nostrum optio, qui repellendus totam veritatis!</span>
    <hr>
    <button @click="backUser">Move to User</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    backUser() {
      this.$router.push('/user');
    }
  }
}
</script>

<style scoped>

</style>
