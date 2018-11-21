// Main
$(document).ready(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop()) {
			$('header').addClass('black');
		}
		else {
			$('header').removeClass('black');
		}
	});
	$('.home-menu').owlCarousel({
		autoplay:true,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1,
				nav: true,
				dots: false,
			},
			568: {
				items: 1,
				nav: true,
				dots: false,
			},
			1000: {
				items: 1,
				nav: false,
				dots: true,
			}
		}
	})
});
