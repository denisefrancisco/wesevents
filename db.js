
myFirebaseRef = new Firebase("https://wesevents.firebaseio.com");
$( document ).ready(function() {
  var names = document.getElementById("name").value;
  var eventHandle = myFirebaseRef.child("events"); //attemps to create a "list" of events and each item is called a child.
  console.log(names);
  eventHandle.set({
    alanisawesome: {
      name: "hehe",
      full_name: "Alan Turing"
    },
    gracehop: {
      date_of_birth: "December 9, 1906",
      full_name: "Grace Hopper"
    }
  });
  console.log( "ready!" )


  //creating data in firebase for names
});


  












