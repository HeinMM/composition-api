

import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN3GBmHq9D6AldZBmjBf8jAhgrgMYPwgo",
    authDomain: "vue-blog-system-81643.firebaseapp.com",
    projectId: "vue-blog-system-81643",
    storageBucket: "vue-blog-system-81643.appspot.com",
    messagingSenderId: "851234361981",
    appId: "1:851234361981:web:36ab90bb054aa443b55714"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp();
export {db,timestamp}
