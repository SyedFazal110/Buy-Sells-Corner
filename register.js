import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
  collection,
  addDoc 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import { db , auth } from "./config.js";


const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const arr = [];

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
        const userCredential = createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
            const user = userCredential.user;
            console.log(user);


        const docRef = await addDoc(collection(db, "Users"), {
          firstName : firstName.value,
          lastName : lastName.value,
          email : email.value,
          password : password.value,
          // uid : user.uid
        });
        console.log("Document with ID: ", docRef.id)
        arr.push({
          firstName : firstName.value,
          lastName : lastName.value,
          email : email.value,
          password : password.value,
          id: docRef.id,
        });
        setTimeout(function() {
          window.location = 'login.html';
        }, 1000);
        
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
      } catch (error) {
        const errorMessage = error.message;
        console.error("Firestore Database Error : ", error);
        console.log(errorMessage);
      }

  // .catch((error) => {
  //     const errorMessage = error.message;
  //     console.log(errorMessage);
  // });
});



