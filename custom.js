// JavaScript Document

$(document).ready(function() {
	
var w1 = jQuery(window).width()
//alert('Widht: '+(w1+16));


//Smooth Scrolling Start

$(function() {
function filterPath(string) {
return string
.replace(/^\//,'')
.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
.replace(/\/$/,'');
}

var locationPath = filterPath(location.pathname);
var scrollElem = scrollableElement('html', 'body');

// Any links with hash tags in them (can't do ^= because of fully qualified URL potential)
$('a[href*=#]').each(function() {

// Ensure it's a same-page link
var thisPath = filterPath(this.pathname) || locationPath;
if (  locationPath == thisPath
&& (location.hostname == this.hostname || !this.hostname)
&& this.hash.replace(/#/,'') ) {

// Ensure target exists
var $target = $(this.hash), target = this.hash;
if (target) {

// Find location of target
var targetOffset = $target.offset().top;
$(this).click(function(event) {

// Prevent jump-down
event.preventDefault();

// Animate to target
$(scrollElem).animate({scrollTop: targetOffset}, 800, function() {

// Set hash in URL after animation successful
location.hash = target;

});
});
}
}

});

// Use the first element that is "scrollable" (cross-browser fix?)
function scrollableElement(els) {
for (var i = 0, argLength = arguments.length; i <argLength; i++) {
var el = arguments[i],
$scrollElement = $(el);
if ($scrollElement.scrollTop()> 0) {
return el;
} else {
$scrollElement.scrollTop(1);
var isScrollable = $scrollElement.scrollTop()> 0;
$scrollElement.scrollTop(0);
if (isScrollable) {
return el;
}
}
}
return [];
}

});
//Smooth Scrolling End

//Illustration by http://psdblast.com/flat-color-abstract-city-background-psd Start
$(window).on('mousemove', function(e) {
	var w = $(window).width();
	var h = $(window).height();
	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".parallax").each(function(i, el) {
		var offset = parseInt($(el).data('offset'));
		var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

		$(el).css({
			'-webkit-transform': translate,
			'transform': translate,
			'moz-transform': translate
		});
	});
});
//Illustration by http://psdblast.com/flat-color-abstract-city-background-psd End

/* Go To Top Smoothly Start */
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});

	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
/* Go To Top Smoothly End */

});
