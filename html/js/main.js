/*-------------------------------

	BANNER_FULL_HEIGHT.JS

-------------------------------*/
$(".full-height").height($(window).height());
	$(window).on('resize', function(){
	$(".full-height").height($(window).height());
});
	

/*-------------------------------

	SCROLL_TO.JS

-------------------------------*/
$(document).ready(function(){

  //  // Add smooth scrolling to all links
  // $("a").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top-83
  //     }, 2000);

  //     return false;
  //   } // End if
  // });

  // var scrollLink = $('.scroll');
  
  // // Smooth scrolling
  // scrollLink.click(function(e) {
  //   e.preventDefault();
  //   $('body,html').animate({
  //     scrollTop: $(this.hash).offset().top - 83
  //   }, 2000 );
  //   return false;
  // });
  
  // // Active link switching
  // $(window).scroll(function() {
  //   var scrollbarLocation = $(this).scrollTop();
    
  //   scrollLink.each(function() {
      
  //     var sectionOffset = $(this.hash).offset().top;
      
  //     if ( sectionOffset <= scrollbarLocation ) {
  //       $(this).parent().addClass('active');
  //       $(this).parent().siblings().removeClass('active');
  //     }
  //   })
    	
  // })

  	$('.scroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top - 80
		}, 2000, 'swing');	

		if ($(window).width() < 991) {
			$("#mobile_menu").trigger("click");
		}	
	});

});

/*-------------------------------

	SCROLLBAR.JS

-------------------------------*/

(function($){
    $(window).on("load",function(){
        $('.scrollcontent').mCustomScrollbar({
        	theme:"minimal"
        });
    });
})(jQuery);

/*-------------------------------

	SAME_HEIGHT.JS

-------------------------------*/
jQuery(document).ready(function($) {

	var bigbrother;
	var bigbrother2;
	var winwidth = $(window).innerWidth(991);

	jQuery('.hedge-box').each(function() {
		bigbrother = bigbrother > jQuery(this).height() ? bigbrother : jQuery(this).height();
	});

	jQuery('.hedge-box').each(function() {
		jQuery(this).height(bigbrother);

		$(window).on("load",function(){
			if(winwidth < 991){
	 			$('.hedge-box').height(auto);
			}
		});
	});

	jQuery('.hedge-fund-box').each(function() {
		bigbrother2 = bigbrother2 > jQuery(this).height() ? bigbrother2 : jQuery(this).height();
	});

	jQuery('.hedge-fund-box').each(function() {
		jQuery(this).height(bigbrother2);

		$(window).on("load",function(){
			if(winwidth < 991){
	 			$('.hedge-fund-box').height(auto);
			}
		});
	});
});

