import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
  collection,
  addDoc 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import { auth } from "./config.js";


const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const arr = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then( async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";


      try {
        const docRef = await addDoc(collection(db, "Users"), {
          firstName : firstName.value,
          lastName : lastName.value,
          email : email.value,
          password : password.value
        });
        console.log("Document with ID: ", docRef.id)
        arr.push({
          firstName : firstName.value,
          lastName : lastName.value,
          email : email.value,
          password : password.value,
          id: docRef.id,
        });
      } catch (error) {
        console.error("Firestore Database Error : ", error);
      }
  })

  .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
  });
});



