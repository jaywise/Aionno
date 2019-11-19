
var rawData = [
            {
              name: "chunking",
              studentState: [ "timid", "confused", "anxious" ],
              situationState: [ "lecture", "guided practice", "assessment" ],
              description: "breaking concepts down into smaller pieces",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "organization/restructuring" ],
              contentArea: ["mathematics", "natural sciences", "English", "social sciences", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 6,
              urlToResources: [ "https://www.facinghistory.org/resource-library/teaching-strategies/chunking" ],
            },
            {
              name: "non-verbal signals",
              studentState: [ "hyperactive", "angry" ],
              situationState: [ "guided practice", "independent work", "transition", "group work" ],
              description: "using gestures or space to focus the group and establish control",
              ageOfStudent: [ "10-12", "13-15" ],
              strategyType: [ "socio-emotional" ],
              strategySubtype: [ "cognitive regulation" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 2,
              urlToResources: [ "https://teacher-blog.education.com/using-attention-signals-in-the-classroom-1cb638930d3e" ],
            },
            {
              name: "affirmation",
              studentState: [ "tired", "angry", "anxious", "confused" ],
              situationState: [ "guided practice", "independent work", "student presentation", "assessment" ],
              description: "establishing identity and worth",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "socio-emotional" ],
              strategySubtype: [ "identity/self-image" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "history", "writing", "English", "reading", "foreign language" ],
              implementationDifficulty: 2,
              urlToResources: [ "https://assets2.hrc.org/welcoming-schools/documents/WS_Lesson_My_Many_Identities.pdf" ],
            },
          ]


//------------ card interactions -------

//makes whole card a clickable link by find a tag and giving it to div
$(".strategy-container").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});



//------------ filtering ----------

var filteredArray = []; //initialize with clean raw data set
var situationValue = "any";
var studentValue = "any";
// var strategyTypeValue = [];
// var contentAreaValue = ["mathematics", "natural sciences", "social sciences", "history", "writing", "English", "reading", "foreign language" ];
// var ageOfStudentValue = [];

var allStudentStates = [ "timid", "confused", "anxious", "angry", "hyperactive", "tired" ];
var allSituationStates = [ "timid", "confused", "anxious", "angry", "hyperactive", "tired" ];

//reset dropdowns to "any"
$("#studentState").prop('selectedIndex',0);
$("#situationState").prop('selectedIndex',0);

//grabs value from top dropdown
$(function() {
    $(".top-dd > select").change(function(e) {       // grab value from dropdown
        console.log( $('option:selected', this).text() );
        console.log("target is " + e.currentTarget.name);

        // assign newly selected dropdown value to corresponding variable
        if (e.currentTarget.name == "situationState") {
          situationValue = $('option:selected', this).text();
        }
        else if (e.currentTarget.name == "studentState") {
          studentValue = $('option:selected', this).text();
        }

        console.log("situation value: " + situationValue);
        console.log("student value: " + studentValue);

        //populating list with all values if "any" is selected from dropdown
        // var rawData2 = [];

        // if (situationValue == 'any') {
        //   rawData2 = rawData.forEach(function(item){
        //     item.situationState = allSituationStates;
        //   });
        // }
        // else if (studentValue == 'any') {
        //   rawData2 = rawData.forEach(function(item){
        //     item.studentState = allStudentStates;
        //   });
        // }
        // else {
        //   rawData2 = rawData;
        // }


        // ------ populating array based on dropdown values -------

        //if no student value is specified, only narrow down list of strategies based on dropdown situation value
        if(studentValue == "any"){
          var newFilteredArray = rawData.filter(function(item){
            return (item.situationState.indexOf(situationValue) >= 0); //determines if value exists anywhere in sub-array; if yes, add strategy to filteredArray
          });
        }

        //if no situation value is specified, only narrow down list of strategies based on dropdown student value
        else if (situationValue == "any"){
          var newFilteredArray = rawData.filter(function(item){
            return (item.studentState.indexOf(studentValue) >= 0); //determines if value exists anywhere in sub-array; if yes, add strategy to filteredArray
          });
        }

        //if both student value and situation value is specified, narrow list based upon both values
        else {
          var newFilteredArray = rawData.filter(function(item){
            return (item.studentState.indexOf(studentValue) >= 0) &&
            (item.situationState.indexOf(situationValue) >= 0); //determines if value exists anywhere in sub-array; if yes, add strategy to filteredArray
          });
        }

        console.log("filtered array for dropdown only is: " + JSON.stringify(newFilteredArray));

        // //creates modified dropdown array of objects that also reflects state of side filters
        // var filteredArray2 = filteredArray1.filter(function(item){
        //   return (item.studentState.indexOf(studentValue) >= 0) &&
        //   (item.situationState.indexOf(situationValue) >= 0);
        // });


        // console.log("filtered array for dropdown and filters is: " + JSON.stringify(newFilteredArray));


        //determine HTML to inject later
        var htmlOutput = "";
        if (newFilteredArray.length < 1) {
            htmlOutput = "Sorry, no items matched your criteria. Please select again.";
        }
        else {
          newFilteredArray.forEach(function(item) {
            htmlOutput+="<a target='_blank' href=' " + item.urlToResources + " ' ><div  class='strategy-container'><h5>Name: " + item.name + " </h5><p>Description: " + item.description + "</p></div></a>";
          });
        }

        //inject HTML into browser
        $('#matchingStrategies').html(htmlOutput);

        filteredArray = newFilteredArray; //overwrite global filtered array each time so that side menu can show hide based on possible strategies

    });
    // listen for side filter changes
      // match with attributes, then replace curatedList
    //for each item in array
        //add tile
        // var allStrategies = [300 strategies go here];
        //
  $("#filter-menu").change(function(e){

    console.log("filter menu change");

    var selectedFilterValue = e.target.value;

    //get generalized category name by slicing off end of input name attribute
    var selectedFilterName = e.target.name;
    var categoryName = selectedFilterName.substring(0, selectedFilterName.length - 1);

    console.log("filter target is " + selectedFilterValue);
    console.log("filter name is " + categoryName);

    console.log(e);




    // if(e.target.checked == "false"){
    //   $(".strategy-container").css("display", "none");
    // }
    // else {
    //   selectedFilter.
    // }


  });
});
