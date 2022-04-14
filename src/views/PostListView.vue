<template>
  <div v-for="post in posts" :key="post.id">
      <SinglePost :post = "post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from '../components/singlePost'
import { ref } from '@vue/reactivity';
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    
  },
};
</script>

<style>
</style>