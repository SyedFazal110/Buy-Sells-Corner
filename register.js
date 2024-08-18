import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { auth } from "./config.js";


const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const screen = document.querySelector("#para");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(
    auth,
    // firstName.value,
    // lastName.value,
    email.value,
    password.value
  )
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      screen.innerHTML = "Registration Completed";
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
  })

  .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
  });
});



