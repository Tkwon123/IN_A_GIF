
$(function(){
	$(".cards").on('click', 'li', function(e){
		var target = (e.target);
		var need_uncheck = (e.target.id);
		var need_first = ($('#first-selection').length === 0);
		var need_second = ($('#second-selection').length === 0);
		if (need_uncheck) {
			$(e.target).removeAttr('id');
		} else if (need_first){
			$(e.target).attr('id','first-selection');
		} else if (need_second){
			$(e.target).attr('id','second-selection');
		}
	});
});

/*$(function(){
	$(".cards").on('click', 'li', function(e){
		if (e.target.id =='first-selection') {
			firstSelection(e);
		}
		else if($('#second-selection').length && $('#first-selection').length) {
			return;
		}
		else if($('#first-selection').length) {
			secondSelection(e);
		}

		else {
			firstSelection(e);
		}
	});
});*/

function firstSelection(e){
	if(e.target.id){
		$(e.target).removeAttr('id');
	} else {
		$(e.target).attr('id','first-selection');
	}
}

function secondSelection(e){
	if(e.target.id){
		$(e.target).removeAttr('id');
	} else {
		$(e.target).attr('id','second-selection');
	}
}
