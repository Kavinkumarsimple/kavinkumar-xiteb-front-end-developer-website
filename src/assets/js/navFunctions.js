import $ from 'jquery'

 $(function() {


	$('#menuid').click(function(e) {
		var $this = $(this);

		if( $('#mobbar').hasClass('show') ) { 
			$('#mobbar').removeClass('show');
		} 
		else { 
			$('#mobbar').addClass('show');
			/*does not have*/ 
		}
		
		// $('#mobbar').addClass('show');
		//$('#mobbar').find('> a').attr('aria-expanded', true);
		//$('#mobbar').find('.dropdown-menu').addClass('show');
		
	  });

	  "use strict";

	//keypress wouldn't include delete key, keyup does. We also query the div id app and find the other elements so that we can reduce lookups
	$('nav .dropdown').hover(function(){
		console.log("Hovered");
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});
  });

// (function($) {

// 	//alert("sdvsvd");

	

// 	"use strict";

	
// 	//alert("sdkjhcvbkhsb");

// })(jQuery);
