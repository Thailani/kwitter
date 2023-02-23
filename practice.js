//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCSGFoPwwiZOiVYXg7iiWdUg9UoWRRF2No",
    authDomain: "kwiter-c2b8d.firebaseapp.com",
    databaseURL: "https://kwiter-c2b8d-default-rtdb.firebaseio.com",
    projectId: "kwiter-c2b8d",
    storageBucket: "kwiter-c2b8d.appspot.com",
    messagingSenderId: "174444117221",
    appId: "1:174444117221:web:80fb52be6e836e5dc2680c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() 
{
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({ 
      purpose : "adicionando usuário" 
    });
}