<template>
  <div>
    <h2>Show posts</h2>
    <ul v-for="post in posts">
      <li>{{post.id}}
      </li>
    </ul>
    <form >
      <label for="comment">Add Comment</label>
      <input form-group type="text" id="comment" v-model="comment">
    </form>
  </div>
</template>
<script>
export default {
    data () {
        return {
            comment:''
        }},

   props:['posts'],
  created() {
      console.log(this.$route.params.id);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
