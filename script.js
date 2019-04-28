jQuery(document).ready(function ($) {
		"use strict";
 setInterval(function () {
        moveRight();
    }, 2000);
   
	var slideCount1 = $('.SlideWapper ul li').length;
	var slideWidth1 = $('.SlideWapper ul li').width();
	var slideHeight1 = $('.SlideWapper ul li').height();
	var sliderUlWidth1 = slideCount1 * slideWidth1+'35px';
	
	
	$('.SlideWapper').css({ width: '1170 px', height: slideHeight1 });
	
	$('.SlideWapper ul').css({ width: sliderUlWidth1, Left: '0px' });
	

    function moveLeft() {
        $('.SlideWapper ul').animate({
            left: + slideWidth1
        }, 200, function () {
            $('.SlideWapper ul li:last-child').prependTo('.SlideWapper ul');
            $('.SlideWapper ul').css('left', '0px');
        });
    }
    function moveRight() {
        $('.SlideWapper ul').animate({
            left: - slideWidth1
        }, 200, function () {
            $('.SlideWapper ul li:first-child').appendTo('.SlideWapper ul');
			            $('.SlideWapper ul').css('left', '0px');

        });
    }
    $('.nextButton').click(function () {
        moveLeft();
    });
    $('.PrevButton').click(function () {
        moveRight();
    });
});



jQuery(document).ready(function ($) {
"use strict";



	/* -----------------------------------------------------------------------------------
	Closes the Responsive Menu on Menu Item Click
	----------------------------------------------------------------------------------- */
	$('.navbar-collapse ul li a').click(function() {
		
		$('#mynavbar').hide();
	});

$('.navbar-toggle').click(function() {
		
		$('#mynavbar').show();
	});



	/* -----------------------------------------------------------------------------------
	Scrollspy: Highlights the navigation menu items while scrolling.
	----------------------------------------------------------------------------------- */
	$('body').scrollspy({
		target: '.navbar-fixed-top'
	});


	
		
			
			});

	