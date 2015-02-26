
myFirebaseRef = new Firebase("https://wesevents.firebaseio.com");
$( document ).ready(function() {
  var eventHandle = myFirebaseRef.child("events"); //attemps to create a "list" of events and each item is called a child.

  eventHandle.set({
    alanisawesome: {
      date_of_birth: "June 23 1912",
      full_name: "Alan Turing"
    },
    gracehop: {
      date_of_birth: "December 9, 1906",
      full_name: "Grace Hopper"
    }
  });
  console.log( "ready!" )
});

$( "#createPage" ).click(function() {
  alert("handler for .click() called");
});










