$(document).ready(function() {
  console.log();
  $("#burger").on("click", function(){
  	$("#burger").toggleClass("active");
  	$("#navigation").toggleClass("active");
  });
});