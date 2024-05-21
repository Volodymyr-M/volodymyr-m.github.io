"use strict";

var elem = document.querySelector('.testimonial-carousel');
var flkty = elem == null ? null : new Flickity( elem, {
    // options
	contain: true,
	wrapAround: true,
	autoPlay: true,
	percentPosition: false, //carousel-cell is using px width 
});
