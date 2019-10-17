//add print out if dropdown is toggled
// $(".dropdown").on("show.bs.dropdown", function(event){
//   var x = $(event.relatedTarget).text(); // Get the text of the element
//   alert(x);
// });
$(document).ready(function(){
  $("button").click(function(){
    $("p").text("Hello world!");
  });
});
