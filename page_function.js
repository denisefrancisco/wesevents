function changeTheText(){
                $("#text").append("<button data-role = 'button'>Hello World!</button>");
            }

function submitEvent(){
        console.log("weeee");
        var names = document.getElementById("name").value;
        var times = document.getElementById("datetimepicker").value;
        var places = document.getElementById("place").value;
        var host = document.getElementById("creator").value;
        var description = document.getElementById("description").value;
        var tags = document.getElementById("tags").value;
        console.log(names);
        console.log(times);

    }

//using the Wesleyan API for current events
$(document).on("pagebeforeshow","#masterList",function() {
    var elist = $("#eventList");
    elist.html('');

    $.getJSON("http://wesapi.org/api/events/today", function(res) {

        if (!(res)) {
            console.log("No response");
        } else {
            console.log("Got response");
            
            res.Results.forEach(function(event){
                elist.append("<li><a href='#descriptionPage' data-role = 'button'>"+ event.name + "</a></li>");  

            });
            console.log(res);
            elist.listview("refresh");
        }

        myFirebaseRef.on("value", function(snapshot) {
            console.log(snapshot.val());
            $.each(snapshot.val().events, function(key, event) {
                elist.append("<li><a href='#descriptionPage' data-role = 'button'>"+ event.names + "</a></li>");  
            });
            elist.listview("refresh");
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

    console.log("YES IT WORKED!!!!!");
    });
});



window.onload = function() {
    jQuery('#datetimepicker').datetimepicker();

}



    