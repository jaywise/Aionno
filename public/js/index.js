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

// var allStrategies = [300 strategies go here];

// var newArrayWithGrabedValue = [];


rawData = [
          {name: "affirmation", description: "create sense of belonging", studentState: "timid", situationState: "independent work"},
          {name: "chunking", description: "breaking up content", studentState: "anxious", situationState: "independent work"}
        ]

var newArrayWithGrabbedValue = [];

var newValue = "";

//grabs value from top dropdown
$(function() {
    $(".top-dd > select").change(function() {
        console.log( $('option:selected', this).text() );
        newValue = $('option:selected', this).text();
        var filteredArray = rawData.filter(function(item){
          return item.studentState === newValue;
        })
        console.log("filtered array is: " + JSON.stringify(filteredArray));

        // $.each(rawData, function(index, value) {
        //   if(newValue == rawData[index].studentState) {
        //     console.log("match found: " + JSON.stringify(value));
        //     newArrayWithGrabbedValue.push(value);
        //   };
        // })
        //   then replace with new data
        // else if sitution strate
        //   then replace with new data
        // set totaldata array
        // else
        //   "sorry, no matches found"
        var html_output = "";
        html_output+="list goes here 2";
        $('#listOfObjects').html(html_output);
    });
    // listen for side filter changes
      // match with attributes, then replace curatedList
    //for each item in array
        //add tile
        // var allStrategies = [300 strategies go here];
        //

});




// for loop
//   each object in array
//     print function tile
//         item.propety
//         item.property

var newValue2 = "new value";
