function changeTheText(){
                $("#text").append("<button data-role = 'button'>Hello World!</button>");
            }

!function submitEvent(){
        console.log("weeee");
        var names = document.getElementById("name").value;
        var times = document.getElementById("time").value;
        var places = document.getElementById("place").value;
        var host = document.getElementById("creator").value;
        var description = document.getElementById("description").value;
        var tags = document.getElementById("tags").value;
        console.log(names);
    }

//using the Wesleyan API for current events
$("#masterList").on("pageinit",function() {
    console.log("hi");
    $.getJSON("http://wesapi.org/api/events/today", function(res) {
        if (!(res)) {
            console.log("No response");
        } else {
            console.log("Got response");
            console.log(res);
        }
    console.log("YES IT WORKED!!!!!");
    });
});

    