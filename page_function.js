function changeTheText(){
                $("#text").append("<button data-role = 'button'>Hello World!</button>");
            }

function submitEvent(){
        console.log("weeee");
    }

//using the Wesleyan API for current events
$("#masterList").on("pageinit",function() {
    console.log("hi")
    $.getJSON("http://wesapi.org/api/events/today", function(res) {
        if (!(res)) {
            console.log("No response");
        } else {
            console.log("Got response");
            console.log(res)
        }
    console.log("YES IT WORKED!!!!!")
    });
});

