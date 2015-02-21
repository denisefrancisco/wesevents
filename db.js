//javascript database handling and creating the firebase database
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://wesevents.firebaseio.com/");

myFirebaseRef.set({
    title: "Hello World!",
    author: "Firebase",
    location: {
        city: "San Francisco",
        state: "California",
        zip: 94103
    }
});

myFirebaseRef.child("location/city").on("value", function(snapshot) {
    alert(snapshot.val()); //Alerts "San Francisco"
});