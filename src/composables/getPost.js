import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import {db} from '../firebase/config'

let getPost = (id) => {
    let post = ref(null);
    let error = ref('');
    let load = async () => {
        try {
            // await new Promise((resolve,reject)=>{
            //     // resolve();
            //     setTimeout(resolve,3000);
            //   });
            // let response = await fetch("http://localhost:3000/posts/" + id);
            // if (response.status == 404) {
            //     throw new Error('Your Url is something wrong!!!')
            // }
            // let data = await response.json();
            // post.value = data
            let postCol = collection(db,'posts');
            let postSnapshot = await getDocs(postCol);
            postSnapshot.forEach((doc)=>{
                if (doc.id.startsWith(id)) {
                    post.value = doc.data();
                }
            })
            
        } catch (err) {
            error.value = err;
        }

    };
    return { load, post, error };

}
export default getPost;