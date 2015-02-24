//javascript database handling and creating the firebase database
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://wesevents.firebaseio.com/");


var Events = myFirebaseRef.child("events"); //attemps to create a "list" of events and each item is called a child.
Events.set({
    title: "Hello World!",
    author: "Firebase",
    location: {
        city: "San Francisco",
        state: "California",
        zip: 94103
    }
});

//Attaching asynchronous callback to read data (callbacks handle events)
myFirebaseRef.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

//myFirebaseRef.child("location/city").on("value", function(snapshot) {
    //alert(snapshot.val()); //Alerts "San Francisco"
//});
