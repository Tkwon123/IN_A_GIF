$(function(){
	$('#image1, #image2').on('click', function(e){
		var $selection = $(this);

		/*Will need to remember where the select image was located*/
		var $placeholder = $selection.attr('id');

		$placeholder === 'image1' ? increment('image2') : increment('image1');

		$selection.fadeOut(500);

		var new_score = parseInt($selection.find('.score').html());
		var $voted_on = $('#bucket').children('.image-container');
		var new_image = $selection.html();

		var counter = 0;
		var searching = true;

		if ($voted_on.length === 0){
			$('#bucket').hide()
				.append($selection.html())
				.fadeIn(500);
		} else {
			do  {
				var compare_container = $('#bucket').find('.image-container')[counter];
				var compare_score = parseInt($(compare_container).find('.score').html());
			/*	if (typeof compare_score === 'undefined') {compare_score = 0;}*/
				if (new_score >= compare_score){
						$(compare_container).before(new_image);
						searching = false;
					}
				counter++;
			}
			while (searching && counter <= $voted_on.length);
		}



		var lastSearch = $('#last-search').html();

		function sizedImage(imgSize, result){
			imgSize > 500 ? requestImage() : $($selection).html(result).fadeIn(500);
			}

	    var requestImage = function() {
	    	$.ajax({
		    	type: 'get',
		    	url: "/new_image",
		    	data: {'search' : lastSearch},
		    	success: function(result){
		    		var $result = $(result).filter('#new-image').children();
		    		$result.find("img").load(function(){
		    			var imgSize = this.width;
				    	sizedImage(imgSize, $result);
	    		});
		    },
		    error: function(jqXHR, textStatus, errorThrown){
		    	alert("That's embarrassing. Something went wrong!");
		    	data = $.parseJSON(jqXHR.responseText);
			    console.log(jqXHR);
			    console.log(textStatus);
			    console.log(errorThrown);
		    }
		});
	};
	requestImage();
	});
});


function increment(selected){
	var current_score = parseInt($('#'+selected).find('.score').html());
	current_score += 1;
	$('#'+selected).find('.score').html(current_score);
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