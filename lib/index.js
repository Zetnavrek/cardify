"use strict";

'use strict'(function ($) {
	$.fn.cardify = function () {
		var _this = this;

		$(this).wrap("<figure class = 'principal'></figure>");
		$("figure").append("<figcaption class = 'imgTitle'></figcaption>");
		$(this).mouseover(function () {
			$(this).next("figcaption").text($(this).attr("alt"));
			$(this).css("filter", "blur(10px)");
		});
		$(this).mouseleave(function () {
			$(_this).next("figcaption").text("");
			$(_this).css("filter", "blur(0px)");
		});
	};
}(jQuery));