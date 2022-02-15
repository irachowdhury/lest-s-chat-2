var  firebaseConfig = {
    apiKey: "AIzaSyAJz6-PcC3d9dgf3k1bu0J3jO69u7gvmqo",
    authDomain: "kwitter-project-8483f.firebaseapp.com",
    databaseURL: "https://kwitter-project-8483f-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-8483f",
    storageBucket: "kwitter-project-8483f.appspot.com",
    messagingSenderId: "783602722250",
    appId: "1:783602722250:web:ee83dca5ac1a1da2279b33"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
    Ira:"hola"
    });
  }

  