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
$("#masterList").ready(function() {
    console.log("hi");
    $.getJSON("http://wesapi.org/api/events/today", function(res) {

        if (!(res)) {
            console.log("No response");
        } else {
            console.log("Got response");
            var elist = $("#eventList");
            res.Results.forEach(function(event){
                elist.append("<li><a href='#'>"+ event.name + "</a></li>");  

            });
            console.log(res);
        }

    console.log("YES IT WORKED!!!!!");
    });
});



window.onload = function() {
    jQuery('#datetimepicker').datetimepicker();
    elist.listview("refresh");
}



    