var  firebaseConfig = {
    apiKey: "AIzaSyDbUS1Sa8EHH-46UcacPNb6Va35yuvAwCQ",
    authDomain: "lets-chat-d5f61.firebaseapp.com",
    databaseURL: "https://lets-chat-d5f61-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d5f61",
    storageBucket: "lets-chat-d5f61.appspot.com",
    messagingSenderId: "448059445335",
    appId: "1:448059445335:web:4be6b6e08ef59c14835312",
    measurementId: "G-T1HHBCDH2L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "+ user_name+ "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "letschat_page.html";}









function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
   //Start code

   //End code
   });});}
getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "letschat_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "code.html";
}