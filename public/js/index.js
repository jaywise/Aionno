//add print out if dropdown is toggled
// $(".dropdown").on("show.bs.dropdown", function(event){
//   var x = $(event.relatedTarget).text(); // Get the text of the element
//   alert(x);
// });



// $(function(){
//   $("button").change(function(){
//     var studentStateValue = "hello";

//       alert( $('option:selected', this).text() );
//     // var studentStateValue = $("#dropdownMenuButton1 option:selected").text();
//     // console.log(studentStateValue);
//     // var selection = $(this).text();
//     // alert(studentStateValue);
//   });
// });

var curatedList = [];

//grabs value from top dropdown
$(function() {
    $(".top-dd > select").change(function() {
        alert( $('option:selected', this).text() );
        // if student state
        //   then replace with new data
        // else if sitution strate
        //   then replace with new data
        // set totaldata array
        // else
        //   "sorry, no matches found"
    });
    // listen for side filter changes
      // match with attributes, then replace curatedList
    //for each item in array
        //add tile

});


var data =    [
                {name: "affirmation", description: "create sense of belonging", studentState: "timid", situationState: "independent work"},
                {name: "chunking", description: "breaking up content", studentState: "anxious", situationState: "independent work"}
              ]



console.log(data);
