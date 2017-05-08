window.onload=function() {
	alert ("javascript file loaded");
};

$("li").on("click", function() {
	console.log("click");
});

// $("button").on("click", function() {
// 	$("#emptyParagraph").html("Elvis is in the building");
// 	$("img").fadeIn(350);
// });

$("#me").on("click", function() {
	$("img").fadeToggle(350);
	$("#me").html("Hide Elvis");

});

$("#mo").on("mouseout", function() {
	$("img").fadeOut(500);
});

$("input").on("change", function(){
	$("#thisBox").html("Thank you! You have opted in!");
});

$(document).ready (function(){
	$("a").click(function(event){
		//alert("As you can see, the link no longer took you to jquery.com");
		event.preventDefault(); //if you take this out then the link will take you to jquery.com
		$(this).hide("slow");
	});

	//$("a").removeClass("test");

});