<template>
  <div class="container">
    <div class="row">
    <div class="col-sm-10">
      <h3> Posts all</h3>
      <ul v-for="post in posts">
        <li><router-link :to="{name: 'post', params:{id: post.id}}">{{post.title}}
        </router-link>
        </li>
      </ul>
  </div>
      <posts :posts="post"></posts>
    </div>
  </div>
</template>

<script>
import PostDetails from './PostDetails.vue';
let posts = 'https://jsonplaceholder.typicode.com/posts';

    export default {
  data () {
    return {
      posts:[]
    }
  },
        components: {
            posts: PostDetails
        },
        mounted () {
            this.axios.get(posts).then((response) => {
            console.log(response.data);
                this.posts=response.data;
        })
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
