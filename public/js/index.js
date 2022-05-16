import { db } from './firebase.js'
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});