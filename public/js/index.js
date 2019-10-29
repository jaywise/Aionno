rawData = [
          {name: "affirmation", description: "create sense of belonging", studentState: "timid", situationState: "independent work"},
          {name: "chunking", description: "breaking up content", studentState: "anxious", situationState: "independent work"},
          {name: "concept maps", description: "drawing connections and relationships between concepts", studentState: "timid", situationState: "group work"}
        ]

var filteredArray = [];
var situationValue = "";
var studentValue = "";

//grabs value from top dropdown
$(function() {
    $(".top-dd > select").change(function(e) {       // grab value from dropdown
        console.log( $('option:selected', this).text() );
        console.log("target is " + e.currentTarget.name);

        if (e.currentTarget.name == "situationState") {
          situationValue = $('option:selected', this).text();
        }
        else if (e.currentTarget.name == "studentState") {
          studentValue = $('option:selected', this).text();
        }

        console.log("situation value: " + situationValue);
        console.log("student value: " + studentValue);

        //create array of objects that match criteria selected by uesr
        var filteredArray = rawData.filter(function(item){
          return item.studentState === studentValue && item.situationState === situationValue;
        })
        console.log("filtered array is: " + JSON.stringify(filteredArray));

        //determine HTML to inject later
        var htmlOutput = "";
        if (filteredArray.length < 1) {
            htmlOutput = "Sorry, no items matched your criteria. Please select again.";
        }
        else {
          filteredArray.forEach(function(item) {
            htmlOutput+="<h5>Name: " + item.name + " </h5><p>Description: " + item.description + "</p>";
          });

        }

        //inject HTML into browser
        $('#listOfObjects').html(htmlOutput);
    });
    // listen for side filter changes
      // match with attributes, then replace curatedList
    //for each item in array
        //add tile
        // var allStrategies = [300 strategies go here];
        //

});
