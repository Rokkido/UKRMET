$(function() {

	// Click Menu - Scroll To Section
	$(".menu-wrap").find('a').on('click', function () {
		var el = $(this)
		id = el.attr('href');
		$('html, body').stop().animate({
			scrollTop: $(id).offset().top - 193
		}, 500);
		return false;
	});

	// Animate.css
	new WOW().init();

	// Popup Callback Form
	$('.mpp').magnificPopup({
		fixedContentPos: false,
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
				//$('body').addClass('overflow-hidden');
			},
			beforeClose: function() {
				//$('body').removeClass('overflow-hidden');
			}
		},
		midClick: true
	});

});
