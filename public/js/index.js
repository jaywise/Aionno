
rawData = [
            {
              name: "chunking",
              studentState: [ "timid", "confused", "anxious" ],
              situationState: [ "lecture", "guided practice", "assessment" ],
              description: "breaking concepts down into smaller pieces",
              gradeLevel: "4-12",
              strategyType: "cognitive" ,
              strategySubtype: [ "organization/restructuring" ],
              contentArea: ["math", "natural sciences", "social sciences", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 6,
              urlToResources: [ "https://www.facinghistory.org/resource-library/teaching-strategies/chunking" ],
            },
            {
              name: "non-verbal signals",
              studentState: [ "hyperactive", "angry" ],
              situationState: [ "guided practice", "independent work", "transition", "group work" ],
              description: "using gestures or space to focus the group and establish control",
              gradeLevel: "4-10",
              strategyType: "socio-emotional" ,
              strategySubtype: [ "cognitive regulation" ],
              contentArea: ["math", "natural sciences", "social sciences", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 2,
              urlToResources: [ "https://teacher-blog.education.com/using-attention-signals-in-the-classroom-1cb638930d3e" ],
            },
            {
              name: "affirmation",
              studentState: [ "tired", "angry", "anxious", "confused" ],
              situationState: [ "guided practice", "independent work", "presentation", "assessment" ],
              description: "establishing identity and worth",
              gradeLevel: "4-12",
              strategyType: "socio-emotional" ,
              strategySubtype: [ "identity/self-image" ],
              contentArea: ["math", "natural sciences", "social sciences", "history", "writing", "reading", "foreign language" ],
              implementationDifficulty: 2,
              urlToResources: [ "https://assets2.hrc.org/welcoming-schools/documents/WS_Lesson_My_Many_Identities.pdf" ],
            },
          ]

//------ collapsible -------------
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


//------------ filtering ----------

var filteredArray = [];
var situationValue = "any";
var studentValue = "any";

//reset dropdowns to "any"
$("#studentState").prop('selectedIndex',0);
$("#situationState").prop('selectedIndex',0);

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
          return (item.studentState.indexOf(studentValue) >= 0) &&
          (item.situationState.indexOf(situationValue) >= 0); //determines if value exists anywhere in sub-array; if yes, add strategy to filteredArray
        });
        console.log("filtered array is: " + JSON.stringify(filteredArray));

        //determine HTML to inject later
        var htmlOutput = "";
        if (filteredArray.length < 1) {
            htmlOutput = "Sorry, no items matched your criteria. Please select again.";
        }
        else {
          filteredArray.forEach(function(item) {
            htmlOutput+="<div class='strategy-container'><h5>Name: " + item.name + " </h5><p>Description: " + item.description + "</p><p> See more here: <a target='_blank' href=' " + item.urlToResources + " ' >Link</a></p></div>";
          });
        }

        //inject HTML into browser
        $('#matchingStrategies').html(htmlOutput);

    });
    // listen for side filter changes
      // match with attributes, then replace curatedList
    //for each item in array
        //add tile
        // var allStrategies = [300 strategies go here];
        //

});
