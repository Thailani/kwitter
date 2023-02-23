const firebaseConfig = {
  apiKey: "AIzaSyCSGFoPwwiZOiVYXg7iiWdUg9UoWRRF2No",
  authDomain: "kwiter-c2b8d.firebaseapp.com",
  databaseURL: "https://kwiter-c2b8d-default-rtdb.firebaseio.com",
  projectId: "kwiter-c2b8d",
  storageBucket: "kwiter-c2b8d.appspot.com",
  messagingSenderId: "174444117221",
  appId: "1:174444117221:web:80fb52be6e836e5dc2680c"
};

firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
