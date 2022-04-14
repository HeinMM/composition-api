<template>
  <h1 class="tag"> {{tag}}</h1>
  <div v-if="error">
      {{ error }}
  </div>
  <div v-if="posts.length">
     <PostListView :posts="filteredPosts"></PostListView>
  </div>
  <div v-else>
      <Spinner></Spinner>
  </div>
</template>

<script>
import PostListView from './PostListView'
import { computed } from '@vue/runtime-core';
import Spinner from '../components/Spinner'
import getPosts from '../composables/getPosts'
export default {
  components: {
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
      
</style>