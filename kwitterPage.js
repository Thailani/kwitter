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
roomName = localStorage.getItem("roomName");

function send()
{
      msg = document.getElementById("msg").value; 
      firebase.database().ref(roomName).push({ name:userName, message:msg, like:0 });
      document.getElementById("msg").value = ""; 
}    

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
      console.log(firebaseMessageId);
      console.log(messageData);
      name = messageData['name'];
      message = messageData['message'];
      like = messageData['like'];
      nameWithtag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
likeButton ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
      spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button></hr>";
      
      row = nameWithtag + messageWithTag +likeButton + spanWithTag;
      document.getElementById("output").innerHTML += row;
//Fim do código      
      } });  }); }
      
getData(); 

function updateLike(messageId)
{
      console.log("botão de like pressionado - " + messageId);
      buttonId = messageId;
      likes = document.getElementById(buttonId).value;
      updateLikes = Number(likes) + 1;
      console.log(updateLikes);

      firebase.database().ref(roomName).child(messageId).update({
          like : updateLikes   
      });

}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location.replace("index.html");
}