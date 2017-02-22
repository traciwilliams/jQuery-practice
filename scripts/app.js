window.onload=function() {
	console.log("javascript file loaded");
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