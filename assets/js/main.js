	
	$(document).ready(function() {

		// Service Testimonial Section + Portfolio Testimonial Section
		$('.service-testimonial-section').owlCarousel({
			items:1,
			loop:true,
			dots:false,
			autoplay:false,
			nav:true,
			navText:["<i class='fas fa-angle-left'></i>" , "<i class='fas fa-angle-right'></i>"]
		});

		// Clients Testimonial Section
		$('.clients-testimonial-item').owlCarousel({
			items:1,
			loop:false,
			dots:false,
			autoplay:false
		});


		$('.portfolio-item').isotope();












		// Initialize material-scrolltop

		 $('body').materialScrollTop();


	});

// Animated Projects Statistics

	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


		$('#number1').jQuerySimpleCounter({end: 863,duration: 3000});
		$('#number2').jQuerySimpleCounter({end: 921,duration: 3000});
		$('#number3').jQuerySimpleCounter({end: 572,duration: 2000});
		$('#number4').jQuerySimpleCounter({end: 159,duration: 2500});















// My JavaScipt Codes:





























