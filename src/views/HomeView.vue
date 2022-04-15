<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length>0" class="list">
      <div class="post-list"><PostListView :posts="posts"></PostListView></div>
      <div class="tags"><TagCloud :posts="posts"></TagCloud></div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
  
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostListView from './PostListView'
import getPosts from '../composables/getPosts'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    TagCloud,
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
  .list{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
  
  
</style>
