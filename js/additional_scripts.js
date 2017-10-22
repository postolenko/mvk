(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	if( $(".main-slider").length > 0 ) {

		$(".main-slider").not(".slick-initialized").slick({
			dots: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 10000,
			speed: 1200,
			slidesToShow: 1,
			fade: true,
			appendDots: $(".main-slider-dots-append")
		});


		$(".main-slider").find(".slick-dots li").each( function() {

			if($(this).hasClass("slick-active")) {

				var indexSlideCurrent = $(this).index();

				$(".main-slider-pagination li:eq("+ indexSlideCurrent +") a").addClass("active");

			}

		});


		$(".main-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

				$(".main-slider-pagination li:eq("+ currentSlide +") a").removeClass("active");

				$(".main-slider-pagination li:eq("+ nextSlide +") a").addClass("active");

		});

		$(".main-slider-pagination").find("a").click(function(e) {

			e.preventDefault();

			var indexSlideNext = $(this).closest("li").index();

			$(".main-slider").find(".slick-dots li:eq("+ indexSlideNext +") button").click();

		});

		$(".next-slide-btn").click(function() {

			$(".main-slider").find(".slick-next").click();

		});

	}

});