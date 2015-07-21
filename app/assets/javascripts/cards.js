
$(function(){
	$(".cards").on('click', 'li', function(e){
		var target = (e.target);
		var need_uncheck = (e.target.id);
		var need_first = ($('#first-selection').length === 0);
		var need_second = ($('#second-selection').length === 0);


		//determine which action to take
		if (need_uncheck) {
			$(e.target).removeAttr('id');
		} else if (need_first){
			$(e.target).attr('id','first-selection');
		} else if (need_second){
			$(e.target).attr('id','second-selection');
		}

		//have two selections been made? 
		var done = ($('#first-selection').length + $('#second-selection').length) == 2;

		//check whether the IDs are a match
		if (done){
			alert($('#first-selection').html() === $('#second-selection').html());
			reset();
		}
	});
});

function reset(){
	$('#first-selection').removeAttr('id','first-selection');
	$('#second-selection').removeAttr('id','second-selection');
}

$(function(){
	$('#results').avgrund({
		width: 380, // max is 640px
		height: 280, // max is 350px
		showClose: false, // switch to 'true' for enabling close button
		showCloseText: '', // type your text for close button
		closeByEscape: true, // enables closing popup by 'Esc'..
		closeByDocument: true, // ..and by clicking document itself
		holderClass: '', // lets you name custom class for popin holder..
		overlayClass: '', // ..and overlay block
		enableStackAnimation: false, // enables different type of popin's animation
		onBlurContainer: '', // enables blur filter for specified block
		openOnEvent: true, // set to 'false' to init on load
		setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
		template: 'Your string content goes here..' // or function (elem) { ... }, or selector $('.content')
	});
});
