$(function() {

	// scroll to section
	$(".menu-wrap").find('a').on('click', function () {
		var el = $(this)
		id = el.attr('href');
		$('html, body').stop().animate({
			scrollTop: $(id).offset().top - 193
		}, 500);
		return false;
	});

	new WOW().init();

});
