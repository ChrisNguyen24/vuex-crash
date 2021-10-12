<template>
  <div id="user">
    <h1>Wellcome to Userpages</h1>
    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt eos fugiat impedit iste iusto molestias odit officia quia similique. Architecto commodi eos error, labore tempore unde. Debitis, expedita molestiae.</h5>
    <button @click="userDetail">User detail</button>
    <button @click="backHome">Back Home</button>
  </div>
</template>

<script>
export default {
  name: "User",
  methods : {
    backHome(){
      this.$router.push('/')
    },
    userDetail(){
      this.$router.push('/user/4');
    }
  }
}
</script>

<style scoped>

</style>
