$(function(){
	$('#image1, #image2').on('click', function(e){
		var $selection = $(this);
		var $placeholder = $selection.attr('id');
	    /*Scoring*/
		$placeholder === 'image1' ? increment('image2') : increment('image1');

		/*Image placement*/
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
				alert(compare_score);
			/*	if (typeof compare_score === 'undefined') {compare_score = 0;}*/
				if (new_score >= compare_score){
						$(compare_container).before(new_image);
						searching = false;
					}
				counter++;
			}
			while (searching && counter <= $voted_on.length);
		}

				/*if (new_score >= compare_score){
					alert(new_score + " : " + compare_score);
					console.log(index);
				}
				});
		}*/

		/*Inserting new image in here*/
/*		var new_item = $('#bucket').hide()
			.append($selection.html())
			.fadeIn(500);
*/

		/*Pull a new photo into the site*/
				    $.ajax({
				    	url: "/new_image", 
				    	success: function(result){
				    		var $result = $(result).filter('#new-image').children();
				    		$($selection).html($result).fadeIn(500);
					    },
					    error: function(result){
					    	alert('fail');
					    }
					});
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