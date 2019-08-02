function mobileNavToggle() {
	$('.mobnav__menu-toggle').on('click', function(event) {
		$('.navbar').toggleClass('menu-toggle__active');
		$('.mobnav__overlay').toggleClass('mobnav__open')
	})
}

function runApp() {
	mobileNavToggle();
}

$(runApp);