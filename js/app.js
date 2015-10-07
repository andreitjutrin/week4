/*Jquery script for hiding menu*/

$(document).ready(function(){

/*These 2 functions will open and close p info in the text*/

function slideDN(event) {
	$(this).next().toggleClass("hide");
	event.preventDefault();
	$(".readless").toggleClass("hide");
	$(this).toggleClass("hide");
}

function hideUP (event) {
	event.preventDefault();
	$(this).prev().addClass("hide");
	$(this).toggleClass("hide");
	$(".readmore").toggleClass("hide");
}

/**********************************************************/

/*Call functions*/

$(".readmore").on("click", slideDN);
$(".readless").on("click", hideUP);
})