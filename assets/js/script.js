( function( $, window ) {
	'use strict';

	//$.fn.foundationTooltips ? $(document).foundationTooltips( { targetClass: '[title]' } ) : null;

	// if we've got foundation plugins loaded, kick them off automatically
	$.fn.foundationAlerts ? $(document).foundationAlerts() : null;
	$.fn.foundationAccordion ? $(document).foundationAccordion() : null;
	//$.fn.foundationTooltips ? $(document).foundationTooltips() : null;
	$.fn.foundationButtons ? $(document).foundationButtons() : null;
	$.fn.foundationNavigation ? $(document).foundationNavigation() : null;
	$.fn.foundationTopBar ? $(document).foundationTopBar() : null;
	$.fn.foundationCustomForms ? $(document).foundationCustomForms() : null;
	$.fn.foundationMediaQueryViewer ? $(document).foundationMediaQueryViewer() : null;
	$.fn.foundationTabs ? $(document).foundationTabs() : null;

	// if we are on a mobile device, hide the address bar
	$(document).ready( function ( ) {

		$(document).foundationTooltips( { targetClass: '[rel="tooltip"]' } );

		if ( window.Modernizr.touch ) {
			$(window).load( function () {
				setTimeout( function() {
					window.scrollTo(0, 1);
				}, 0 );
			} );
		}
	} );

} )( jQuery, this );