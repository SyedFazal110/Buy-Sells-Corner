import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCjFVtfelYHc1FGTCTwVYDy6sHB_ke7Vvw",
  authDomain: "buy-sells-corner-cad39.firebaseapp.com",
  projectId: "buy-sells-corner-cad39",
  storageBucket: "buy-sells-corner-cad39.appspot.com",
  messagingSenderId: "603994590187",
  appId: "1:603994590187:web:c33aad3825ba33e734e7ae",
  measurementId: "G-F7SY0BBK2R"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);