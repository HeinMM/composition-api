<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length>0">
      <PostListView :posts="posts"></PostListView>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
  
</template>

<script>
import Spinner from '../components/Spinner'
import PostListView from './PostListView'
import getPosts from '../composables/getPosts'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    Spinner, PostListView },
  setup() {
    let{posts,error,load}  =  getPosts();
    load();
    return {posts,error};
  }
}
</script>

<style>
  .home{
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
  }
</style>
