$(function(){
	$('.picture').on('click', function(e){
		var image = $(this).parent().parent();
		var score1 = $('#score1').html;
		var score2 = $('#score2').html;
		$(image).fadeOut(500);
		$('#bucket').hide()
			.append(image.html())
			.fadeIn(500);
	    $.ajax({
	    	url: "/new_image", 
	    	success: function(result){
	    		$('#image1').html( $(result).find('#new_image') );
		    },
		    error: function(result){
		    	alert('fail');
		    }
		});
	});
});

function selected_picture(e){
	var selection = (e.target.id);
	selection === 'picture1' ? increment('picture1') : increment('picture2');
}

function increment(selected){
}

function test(){
	    $.ajax({
	    	url: "/new_image", 
	    	success: function(result){
	    		var $result = $(result).filter('#new_image');

	    		$('#placeholder').html($result);
	    		/*$('#placeholder').html( $(result).type() );*/
		    },
		    error: function(result){
		    	alert('fail');
		    }
		});
}