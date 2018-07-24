(function($) {
	$.fn.cardify = function () {
		
		$(this).each( ()=>{
			console.log(this);
			$(this).find('img').each( (index, image) => {
				console.log(image);
				$(image).wrap("<figure class='principal'></figure>");
				$(image).parent().append("<figcaption class='imgTitle'></figcaption>");
				$(image).next("figcaption").text($(image).attr("alt"))
			});
		});
		
	}
	
}(jQuery));