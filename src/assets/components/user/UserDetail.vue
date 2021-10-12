<template>
  <div id="user-detail">
    <h1>user detail</h1>
    <h3>Welcome user-id : {{id}}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aperiam assumenda aut consequuntur corporis, cumque distinctio dolore eaque,
      earum eligendi fugiat in mollitia officia pariatur perspiciatis praesentium quo ratione repellendus, sequi?</p>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  data (){
    return {
      id: this.$route.params.id,
    }
  },
  watch: {
    '$route'(to,from) {
      this.id = to.params.id
    }
  }
}
</script>

<style scoped>

</style>
