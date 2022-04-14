
import {  ref } from '@vue/runtime-core';
let getPosts=()=>{
    let posts = ref([]);
    let error = ref("");
    let load = async()=>{
      try {
        await new Promise((resolve,reject)=>{
          // resolve();
          setTimeout(resolve,3000);
        });
        let response = await fetch('http://localhost:3000/posts');
        if (response.status===404) {
          throw new Error("not found url");
        }
        let datas =await response.json();
        posts.value=datas;
      } catch (err) {
        error.value = err.message;
      }
    };
    return {posts,error,load};
}


export default getPosts;