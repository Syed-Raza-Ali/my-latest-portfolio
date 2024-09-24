AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();



	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};
	burgerMenu();


	var onePageClick = function () {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();


	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});





})(jQuery);
$(document).ready(function () {
	// const imageLinks = [
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/f4245e12-ff8d-4b41-afd3-daddb58f1969", // proj_1
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/f4245e12-ff8d-4b41-afd3-daddb58f1969", // proj_1
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/d774e185-2eb2-4ba3-8d4d-ee9130bf6f31", // proj_2
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/a7ec2f09-8f2c-4772-9d39-d413fd698b7f", // proj_3
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/e94199bf-ad90-4887-8de5-3c20484bb8d4", // proj_4
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/3b1358be-fd7b-49f0-8179-723398cd8306", // proj_5
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/26d95062-4c9c-4622-83c1-3957bfe6ad5f", // proj_6
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/20bac465-8b6e-40de-a8d6-a76d8fd3aee1", // proj_7
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/b4eb6a46-9d81-4a1d-b90d-980470feca08", // proj_8
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/ac8bff43-7a64-4fc7-b0a0-d5d97614efc7", // proj_9
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/1df182a3-9ac0-4553-abae-2fc3dc62d8e9", // proj_10
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/f27e8b81-a589-487f-82c2-246887b83029", // proj_11
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/9433717f-fb45-455a-a739-8179eea9c6df", // proj_12
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/f143659c-5d4e-42c0-aedc-f1c2e65f399e", // proj_13
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/bee70a70-3ae9-463a-95fc-a2f90a26a5d7", // proj_14
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/cdcca459-fb3d-4c12-851c-407b85cdd89c", // proj_15
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/4b2e2ecb-7697-474b-8434-caec4790add2", // proj_16
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/6869adba-e96e-48c4-823d-c41efc88d663", // proj_17
	// 	"https://github.com/MuhammadZeshanLatif/Resume.github.io/assets/110631680/58c1f763-921f-4794-8c95-dd29f94fae27", // proj_18
	// ];
	const imageLinks=[
		"https://media.giphy.com/media/SyR6laAns9iDbGcGv5/giphy.gif",
		"https://media.giphy.com/media/ZPsXvQfhCobuDarDU9/giphy.gif",
		"https://media.giphy.com/media/4eEGG5r6WlxfKMMlx8/giphy.gif",
		"https://media.giphy.com/media/VqYzyEWe8Hs1rg5FTw/giphy.gif",
		"https://media.giphy.com/media/2RdyCTsukO1bI4RXgk/giphy.gif",
		"https://media.giphy.com/media/5DvYqkFgMaqJdtQv3P/giphy.gif",
		"https://media.giphy.com/media/hIf7bGvrmOwZ69kOfb/giphy.gif",
		"https://media.giphy.com/media/zRdVwQ9GOdt40IpPzH/giphy.gif",
		"https://media.giphy.com/media/V8HLArreQqDgRILURD/giphy.gif",
		"https://media.giphy.com/media/kpbUYzuLyVsHutmM3f/giphy.gif",
		"https://media.giphy.com/media/x7CL2WdlAoo3dF4pHm/giphy.gif",
		"https://media.giphy.com/media/4Y8iWnsOmigoteWWN8/giphy.gif",
		"https://media.giphy.com/media/M8Dfv62QkMB9AK7k8Y/giphy.gif",
		"https://media.giphy.com/media/Gon71SLBulD55BHnM6/giphy.gif",
		"https://media.giphy.com/media/d4VHE0g1IeJpT2cs1C/giphy.gif",
		"https://media.giphy.com/media/Mq2LBQAb2o1EBjCM9B/giphy.gif",
		"https://media.giphy.com/media/SC52jScXovz5Lx2Lq6/giphy.gif",
		"https://media.giphy.com/media/8kQlB6BSHW6kBxOqaw/giphy.gif"
	]
	const projectLinks = [
		"https://revoltechdigital.com/", // Project 1
		"https://brandmarkshield.com/", // Project 2
		"https://www.logoprovident.com", // Project 3
		"https://brandmarkshield.com/lp", // Project 4
		"https://www.logoprovident.com/lp", // Project 5
		"https://crestlogodesign.com/lp3/", // Project 6
		"https://www.logoprovident.com/lp", // Project 7
		"https://www.resumewritersusa.com/", // Project 8
		"https://www.trademarkfortress.com/", // Project 9
		"https://www.trademarkfortress.com/lp3", // Project 10
		"https://www.trademarkfortress.com/lp2", // Project 11
		"https://www.primelogodesign.com/", // Project 12
		"https://www.primelogodesign.com/lp", // Project 13
		"https://www.primelogodesign.com/lp2", // Project 14
		"https://www.primelogodesign.com/lp3", // Project 15
		"https://www.websitedesignmasters.com/", // Project 16
		"https://www.websitedesignmasters.com/lp2", // Project 17
		"https://muhammadzeshanlatif.github.io/Resume/" // Project 18
	];
	const projectNames = [
		"Revolt Digital Tech", // Project 1
		"Brandmark Shield", // Project 2
		"Logo Provident", // Project 3
		"Landing Page", // Project 4
		"Logoprovident Lp", // Project 5
		"Crest Logo Design", // Project 6
		"Second Logoprovident Lp", // Project 7
		"Resume Writer", // Project 8
		"Trademark Fortress", // Project 9
		"Landing Page Trademark Fortress", // Project 10
		"Lp2 Trademark Fortress", // Project 11
		"Prime Logo Design", // Project 12
		"Prime Logo Design Lp", // Project 13
		"Lp Prime Logo Design", // Project 14
		"Landing page Prime Logo Design", // Project 15
		"Website design Mastere", // Project 16
		"Lp Website design Mastere", // Project 17
		"My Portfolio" // Project 18
	];
	const projectCaptions = [
		"Discover the future of digital technology with our innovative solutions.", // Revolt Digital Tech
		"Transform your brand identity with our cutting-edge design solutions.", // Brandmark Shield
		"Elevate your brand with captivating logo designs that leave a lasting impression.", // Logo Provident
		"Captivate your audience with stunning landing pages that drive conversions.", // Landing Page
		"Experience creativity at its finest with our captivating landing page designs.", // Logoprovident Lp
		"Ignite your brand's identity with mesmerizing animations that captivate your audience.", // Crest Logo Design
		"Engage your audience with visually stunning landing pages that drive results.", // Second Logoprovident Lp
		"Craft the perfect resume that lands you your dream job with our professional services.", // Resume Writer
		"Protect your brand identity with our comprehensive trademark solutions.", // Trademark Fortress
		"Create landing pages that stand out from the crowd and drive success for your brand.", // Landing Page Trademark Fortress
		"Build a strong brand presence with captivating landing pages that drive conversions.", // Lp2 Trademark Fortress
		"Define your brand's identity with our expert logo design services.", // Prime Logo Design
		"Elevate your brand with stunning landing page designs that drive conversions.", // Lp Prime Logo Design
		"Maximize your brand's impact with captivating landing pages that drive results.", //Prime Logo Design  Lp 
		"Drive engagement and conversions with captivating landing pages that leave a lasting impression.", // Landing page Prime Logo Design
		"Transform your online presence with captivating website designs that drive success.", // Website design Mastere
		"Create landing pages that resonate with your audience and drive success for your brand.", // Lp Website design Mastere
		"Showcase your skills and experience with a portfolio that stands out from the rest." // My Portfolio
	];

	let putData = async () => {
		for (let i = 0; i < projectNames.length; i++) {
			const div = document.createElement('div');
			div.className = 'col-md-4 d-flex';
	
			const innerHTML = `
				<div class="blog-entry justify-content-end">
					<a href="${projectLinks[i]}" class="block-20 zoom-effect" target="_blank" style="background-image: url('${imageLinks[i]}');">
					</a>
					<div class="text mt-3 float-right d-block">
						<h3 class="heading"><a target="_blank" href="${projectLinks[i]}">${projectNames[i]}</a></h3>
						<p>${projectCaptions[i]}</p>
					</div>
				</div>
			`;
	
			div.innerHTML = innerHTML;
	
			$('.projects').append(div);
		}
	
		// Replace blurred images with high-quality images when fully loaded
		document.querySelectorAll('.block-20').forEach(image => {
			const imageUrl = image.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
			const img = new Image();
			img.src = imageUrl;
			img.onload = () => {
				image.style.backgroundImage = `url('${imageUrl}')`;
			};
		});
	};
	
	putData();
	

});

