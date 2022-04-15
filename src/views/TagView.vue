<template>
  <div class="tags">
     <h1 class="tag"> {{tag}}</h1>
  <div v-if="error">
      {{ error }}
  </div>
  <div v-if="posts.length" class="list">
     <div><PostListView :posts="filteredPosts"></PostListView></div>
     <div><TagCloud :posts="posts"></TagCloud></div>
  </div>
  <div v-else>
      <Spinner></Spinner>
  </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostListView from './PostListView'
import { computed } from '@vue/runtime-core';
import Spinner from '../components/Spinner'
import getPosts from '../composables/getPosts'
export default {
  components: {
    TagCloud,
    PostListView, Spinner },
    props:["tag"],
    setup(props) {
       let {posts,error,load} = getPosts();
       load();
       let filteredPosts = computed(()=>{
           return posts.value.filter((post)=>{
               return post.tags.includes(props.tag);
           });
       });
       return {posts,error,filteredPosts};
    }
}
</script>

<style scope>
    .tag{
        color: bisque;
        margin: 10px; 
    }

     a {
    color: rgb(68, 64, 64);
    text-decoration: none;
    
  }
  .tags{
    max-width: 1200px;
    margin: 0 auto;
  }
      
</style>