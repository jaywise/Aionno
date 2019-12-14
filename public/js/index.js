
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
            {
              name: "annotation",
              studentState: [ "timid", "confused" ],
              situationState: [ "guided practice", "independent work", "lecture" ],
              description: "writing on text to add or clarify meaning",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "transformation", "organization/restructuring" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 4,
              urlToResources: [ "https://lvp.digitalpromiseglobal.org/content-area/literacy-7-12/strategies/annotating-literacy-7-12/summary" ],
            },
            {
              name: "role-play",
              studentState: [ "tired", "anxious", "confused" ],
              situationState: [ "guided practice", "group work", "student presentation", "assessment" ],
              description: "acting out a situation",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "practice/simulation", "elaboration/connection" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "history", "writing", "English", "reading", "foreign language" ],
              implementationDifficulty: 4,
              urlToResources: [ "https://lvp.digitalpromiseglobal.org/content-area/literacy-7-12/strategies/acting-role-play-literacy-7-12/summary" ],
            },
            {
              name: "concept maps",
              studentState: [ "confused", "anxious" ],
              situationState: [ "guided practice", "group work", "lecture" ],
              description: "drawing connections between ideas ",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "transformation", "organization/restructuring" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "history", "reading", "foreign language" ],
              implementationDifficulty: 3,
              urlToResources: [ "https://ctl.byu.edu/tip/concept-mapping" ],
            },
            {
              name: "purpose statements",
              studentState: [ "timid", "anxious", "angry", "hyperactive" ],
              situationState: [ "guided practice", "independent work", "assesssment", "student presentation" ],
              description: "re-focusing identity and purpose",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "socio-emotional" ],
              strategySubtype: [ "identify/self-image", "values" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 4,
              urlToResources: [ "https://inspired.fb.com/activities/?emotion=connected-supported" ],
            },
            {
              name: "gallery walk",
              studentState: [ "hyperactive", "tired", "timid" ],
              situationState: [ "guided practice", "independent work", "assesssment" ],
              description: "moving and looking at pieces of learning",
              ageOfStudent: [ "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "transformation" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history" ],
              implementationDifficulty: 6,
              urlToResources: [ "https://lvp.digitalpromiseglobal.org/content-area/math-7-9/strategies/gallery-walk-math-7-9/summary"],
            },
            {
              name: "jigsaw",
              studentState: [ "tired", "timid", "confused" ],
              situationState: [ "guided practice", "independent work", "assessment", "student presentation" ],
              description: "understanding big ideas by asssigning sub-topics to student groups",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "transformation" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 5,
              urlToResources: [ "https://lvp.digitalpromiseglobal.org/content-area/math-7-9/strategies/jigsaw-math-7-9/summary" ],
            },
            {
              name: "think-pair-share",
              studentState: [ "anxious", "timid", "confused" ],
              situationState: [ "guided practice", "independent work", "assessment", "student presentation" ],
              description: "identifying knowledge within self and then expanding with peers",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "cognitive" ],
              strategySubtype: [ "transformation", "elaboration/connection" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 5,
              urlToResources: [ "https://lvp.digitalpromiseglobal.org/content-area/math-7-9/strategies/think-pair-share-math-7-9/summary" ],
            },
            {
              name: "mindfulness breaks",
              studentState: [ "anxious", "timid", "confused" ],
              situationState: [ "lecture", "group work", "transition", "independent practice" ],
              description: "pausing to re-focus and quiet the mind",
              ageOfStudent: [ "10-12", "13-15", "16-18" ],
              strategyType: [ "socio-emotional" ],
              strategySubtype: [ "emotion processes" ],
              contentArea: ["mathematics", "natural sciences", "social sciences", "English", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 5,
              urlToResources: [ "https://lvp.digitalpromiseglobal.org/content-area/math-7-9/strategies/mindfulness-breaks-math-7-9/summary" ],
            },
          ]


//------------ card interactions -------

//makes whole card a clickable link by find a tag and giving it to div
$(".strategy-container").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});


//------------ filtering ----------

var filteredArray = []   //initialize with clean raw data set
var situationValue = "any";
var studentValue = "any";

var valuesArray =  {
  "ageOfStudentValues" : [ "10-12", "13-15", "16-18"] ,

  "contentAreaValues" : [ "mathematics", "natural sciences", "social sciences", "history", "writing", "English", "reading", "foreign language" ],

  "strategyTypeValues" : [ "cognitive", "socio-emotional" ] ,

}


//reset all dropdowns to "any" upon refresh
$("#studentState").prop('selectedIndex',0);
$("#situationState").prop('selectedIndex',0);

//resets all checkboxes to "checked" upon refresh
$('input[type=checkbox]').prop('checked',true);

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



        // ------ populating array based on dropdown values -------

        //if both dropdowns are "any", don't filter at all
        if(studentValue == "any" && situationValue == "any"){
          var newFilteredArray = rawData;
        }

        //if no student value is specified, only narrow down list of strategies based on dropdown situation value
        else if(studentValue == "any"){
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

        //for each item in newFilteredArray
          //if no match in age of student, hide
          //else if if no match in contentarea, hide
          //else if no match in strategytype, hide
            //else show


        //determine HTML to inject later
        var htmlOutput = "";
        if (newFilteredArray.length < 1) {
            htmlOutput = "Sorry, no items matched your criteria. Please select again.";
        }
        else {
          newFilteredArray.forEach(function(item) {
            htmlOutput+="<a target='_blank' href=' " + item.urlToResources + " ' ><div class='strategy-container' id='" + item.name + "'><h5>Name: " + item.name + " </h5><p>Description: " + item.description + "</p></div></a>";
          });
        }

        //inject HTML into browser
        $('#matchingStrategies').html(htmlOutput);

        filteredArray = newFilteredArray; //overwrite global filtered array each time so that side menu can show hide based on possible strategies

        findSideFilterMatches();

    });

  //filter based on side menu changes
  $("#filter-menu").change(function(e){

    console.log("filter menu change");

    var selectedFilterValue = e.target.value;

    //get generalized category name by slicing off end of input name attribute
    var selectedFilterName = e.target.name;
    var categoryName = selectedFilterName.substring(0, selectedFilterName.length - 1);
    var categoryArray = categoryName + "Values";
    var categoryArrayValues = valuesArray[categoryArray];

    console.log("category values are " + categoryArrayValues);



    console.log("filter target is " + selectedFilterValue);
    console.log("filter name is " + categoryName);
    console.log(e);

    //subtract or add checkbox attribute
    if (e.target.checked == false) {
      console.log("check is false");
      var newArray = categoryArrayValues.filter(e => e !== selectedFilterValue);    // remove unchecked item from array
      valuesArray[categoryArray] = newArray;  //send to global variable
      console.log(newArray);
    }
    else {
      console.log("check is true");
      categoryArrayValues.push(selectedFilterValue); // add checked item to array
      valuesArray[categoryArray] = categoryArrayValues; //send to global variable
      console.log(categoryArrayValues);
    }

    findSideFilterMatches();

  });
});

//find matches in dropdown-generated array based on side filter selections; hide if no match
function findSideFilterMatches() {
  filteredArray.forEach(function(item){
    if (item.ageOfStudent.filter(element => valuesArray.ageOfStudentValues.indexOf(element) !== -1).length == 0){  //determine if no matches exist between arrays
      console.log("no matches for age of student " + item.name);
      $("#" + item.name).hide();
    }
    else if (item.contentArea.filter(element => valuesArray.contentAreaValues.indexOf(element) !== -1).length == 0){  //determine if no matches exist between arrays
      console.log("no matches for contet area " + item.name);
      $("#" + item.name).hide();
    }
    else if (item.strategyType.filter(element => valuesArray.strategyTypeValues.indexOf(element) !== -1).length == 0){  //determine if no matches exist between arrays
      console.log("no matches for strategy type " + item.name);
      $("#" + item.name).hide();
    }
    else {
      $("#" + item.name).show();
      console.log("matches found for" + item.name);
    }
  });
}
