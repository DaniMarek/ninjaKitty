$(document).ready(function(){
	console.log('test');
 	$("img").click(function() {
 		var temp = $(this).attr('data-alt-src');
 		var src = $(this).attr('src');
 		console.log('data-alt-src value is', temp);
 		
 		$(this).attr('data-alt-src', src)
 		// use .attr() as a setter to set the 'src' to altSrc

 		$(this).attr("src", temp);
 		// $(this).attr(altSrc, "src");
	});

});