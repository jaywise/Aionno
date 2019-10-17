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

$(function() {
    $("button").click(function() {
        alert( $('option:selected', this).text() );
    });
});
