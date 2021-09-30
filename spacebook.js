
// function addUser() {

//   user_name = document.getElementById("user_name").value;

//   localStorage.setItem("user_name", user_name);
  
//     window.location = "spacebook_room.html";
// }
var provider = new GoogleAuthProvider();

import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';

