function changeTheText(){
                $("#text").append("<button data-role = 'button'>Hello World!</button>");
            }

function submitEvent(){
        console.log("weeee");
        var names = document.getElementById("name").value;
        var time = document.getElementById("datetimepicker").value;
        var place = document.getElementById("place").value;
        var host = document.getElementById("creator").value;
        var description = document.getElementById("description").value;
        var tag = document.getElementById("tags").value;
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
                var what = "<b> Name: </b>"
                var where = "<b> Place: </b>"
                var time = "<b> Time: </b>"
                var descript ="<b> Description: </b>"
                var collapsible = "<div data-role ='collapsible'><h3> " + event.name +  "</h3> <p>" + what + event.name + "<br>" + "<br>" + where + 
                                event.location + "<br>" + "<br>" + time + event.time + "<br>" + "<br>" + descript + event.description + "<br>" +"</p></div>";
                elist.append($(collapsible).collapsible());

            });
            console.log(res);
            //elist.collapsible("refresh");
        }

        myFirebaseRef.on("value", function(snapshot) {
            console.log(snapshot.val());
            $.each(snapshot.val().events, function(key, event) {
                var what = "<b> Name: </b>"
                var where = "<b> Place: </b>"
                var time = "<b> Time: </b>"
                var descript = "<b> Description: </b>"
                var madeby = "<b> Creator: </b>"
                var cat = "<b> Tags: </b>"
                var collapsible = "<div data-role ='collapsible'><h3> "+ event.names +  "</h3>" +
                                    "<p>" + what + event.names + "<br>" + "<br>" + where + event.place + "<br>" + "<br>" + time + event.time + "<br>" + "<br>" + madeby + event.creator + "<br>" +
                                     "<br>" + descript + event.description + "<br>" + "<br>" + cat + event.tag +"</p></div>";
                elist.append($(collapsible).collapsible());
            });
            elist.collapsible("refresh");
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

    console.log("YES IT WORKED!!!!!");
    });
});



window.onload = function() {
    jQuery('#datetimepicker').datetimepicker();

}



    