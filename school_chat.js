
var firebaseConfig = {
    apiKey: "AIzaSyA-yDRU8P7dhgMvW1YoSAS0M2VJdaahvqE",
    authDomain: "project93-188fc.firebaseapp.com",
    projectId: "project93-188fc",
    storageBucket: "project93-188fc.appspot.com",
    messagingSenderId: "1035957352418",
    appId: "1:1035957352418:web:31f6ee86f7ef5e32cd2bbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


function addRoom()
{
room_names = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose: "adding room_name"
});

localStorage = setItem("room_name", room_name);

window.location = "school_chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ;
room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class = "room_name" id= "Room_names" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name);

console.log(name);
localStorage.setItem("room_name", name);
window.location = "school_chat.html"