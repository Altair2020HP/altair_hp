$(function() {
	// body...
	$(".maru").click(function(){
		// $(".menuMoji").toggle(".overlay-navigation");
		$(".overlay-navigation").toggleClass("active");
		$(this).toggleClass("active");
	});
	$(".cont_box").click(function(){
		$(".contri_img").toggle("active");
	})
});


// $(function(){
// var style = '<link rel="stylesheet" href="style.css">';
//     $('head link:last').after(style);
// });