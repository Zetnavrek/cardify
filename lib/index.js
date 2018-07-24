"use strict";

(function ($) {
	$.fn.cardify = function () {
		var _this = this;

		$(this).each(function () {
			console.log(_this);
			$(_this).find('img').each(function (index, image) {
				console.log(image);
				$(image).wrap("<figure class='principal'></figure>");
				$(image).parent().append("<figcaption class='imgTitle'></figcaption>");
				$(image).next("figcaption").text($(image).attr("alt"));
			});
		});
	};
})(jQuery);