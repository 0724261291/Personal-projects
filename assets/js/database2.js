
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDKmH2Z8KFcco3rO3YzLP-wtBzpgKRliF8",
    authDomain: "myportfolio-90d98.firebaseapp.com",
    databaseURL: "https://myportfolio-90d98-default-rtdb.firebaseio.com",
    projectId: "myportfolio-90d98",
    storageBucket: "myportfolio-90d98.appspot.com",
    messagingSenderId: "746728395711",
    appId: "1:746728395711:web:23e6f029539ebc0324070a"
  };

  //initialise firebase
  const app = initializeApp(firebaseConfig);

  import {getDatabase , ref , set , child , update , remove}
  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

  const db = getDatabase();

  //references

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");

  var submitButton = document.getElementById("submitButton");

  //insert function

  function insertFunction(){
    set(ref(db , "Messages/" + name.value),{
        Name: name.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value

       
    })
      .then(()=>{
        alert("Data stored in our database !!!");
        document.getElementById("contactForm").reset();
      })
      .catch((error)=>{
        alert("Unsuccessful , error" + error);
      });

      
  }

  if(name != "" && email != "" &&  subject != "" && message != ""){
  
    submitButton.addEventListener('click' , insertFunction);
   
  }
