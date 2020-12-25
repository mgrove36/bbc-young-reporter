(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

		$window.on('load', function() {
			// Play initial animations on page load.
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);

			// initialise timestamps
			$("time.timeago").timeago();
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);

if (Cookies.get("youngreporter.mgrove.uk-cookies-accepted") != "true") {
	$("#cookies").show();
	$("#cookies").animate({ bottom: "0px" }, 1000);
}

function acceptCookies() {
	$("#cookies").animate({ bottom: "-100px" }, 1000);
	setTimeout(function () { $("#cookies").hide() }, 1000);
	Cookies.set("youngreporter.mgrove.uk-cookies-accepted", "true", { expires: 30 });
}