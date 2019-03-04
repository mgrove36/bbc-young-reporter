$(window).scroll(function() {
	if ($(this).scrollTop() >= 55) {
		$('.top-scroll-button').fadeIn(500);
	}
	if ($(this).scrollTop() < 55) {
		$('.top-scroll-button').fadeOut(500);
	}
});
function scrollUp() {
	$('body, html, .mdc-drawer-app-content, #main-content, .mdc-top-app-bar--short-fixed-adjust').animate({
        scrollTop: 0
    }, 500);
}
