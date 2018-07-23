'use strict'

(function($) {
	$.fn.cardify = function () {
		$(this).wrap("<figure class = 'principal'></figure>");
		$("figure").append("<figcaption class = 'imgTitle'></figcaption>");
		$(this).mouseover( function () {
			$(this).next("figcaption").text($(this).attr("alt"))
			$(this).css("filter","blur(10px)")
		});
		$(this).mouseleave ( () => {
			$(this).next("figcaption").text("");
			$(this).css("filter","blur(0px)")
		});
	}
	
	}(jQuery));

