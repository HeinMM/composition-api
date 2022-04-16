
import {  ref } from '@vue/runtime-core';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import {db} from '../firebase/config'
let getPosts=()=>{
    let posts = ref([]);
    let error = ref("");
    let load = async()=>{
      try {
        // await new Promise((resolve,reject)=>{
        //   // resolve();
        //   setTimeout(resolve,3000);
        // });
        // let response = await fetch('http://localhost:3000/posts');
        // if (response.status===404) {
        //   throw new Error("not found url");
        // }
        // let datas =await response.json();
        // posts.value=datas;
       const postCol = collection(db,'posts');
       const postQuery = query(postCol,orderBy("created_at",'desc'));
       const citySnapshot = await getDocs(postQuery);
       posts.value = citySnapshot.docs.map((doc)=>{
         return {id:doc.id,...doc.data()};
       });
      } catch (err) {
        error.value = err.message;
      }
    };
    return {posts,error,load};
}


export default getPosts;