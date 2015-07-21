$(function(){
	$('.picture').on('click', function(e){
		var image = this;
		$(image).fadeOut(500);
		$('#bucket').hide().append("<img src='" + image.src + "' >").fadeIn(500);
	});
});

function test(){
}