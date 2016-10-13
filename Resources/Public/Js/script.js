jQuery(document).ready(function () {


	/* btn top */
	jQuery(".btn-top").click(function () {
		jQuery('html, body').animate({
			scrollTop: 0
		}, 200);
		return false;
	});

	$(window).scroll(function () {
	   var scroll = $(window).scrollTop();
	   if (scroll >= 100) {
	       $("#header").addClass("scroll");
	   } else {
	       $("#header").removeClass("scroll");
	   }
	});

	/* bootstrap */
	$('.dropdown').mouseleave(function () {
		$('.dropdown').removeClass('open');
	});

	/* navigation */
	$('.navbar-toggle').click(function () {
		if ($('#navmenu').hasClass("active")) {
			$('#navmenu').fadeOut('slow');
			$('#navmenu').removeClass("active");
			$('.navbar-toggle .icon-bar').show();
			$('.navbar-toggle #icon-remove').hide();
		} else {
			$('#navmenu').fadeIn('slow');
			$('#navmenu').addClass("active");
			$('.navbar-toggle .icon-bar').hide();
			$('.navbar-toggle #icon-remove').show();
		}
		;
		return false;
	});

});


