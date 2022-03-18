$(function() {
	$(".main-header-menu-mobile-obj").on("click", function() {
		$(".main-header-menu-mobile-sub").toggleClass("ds-none-mobile");
		$(this).toggleClass("active");
	})

	/*$(".main-header-menu-mobile-obj").on("click", function() {
		$(".ds-none-mobile").slideToggle("slow");
		$(this).toggleClass("active");
	});*/
});