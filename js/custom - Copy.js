$(window).resize(function() {
	resize();
});

$(document).ready(function() {
	resize();
	loader();
	skills();
	menu_nav();
	
	setTimeout(function(){banner_load();},5000);
	
	// Inview
  setTimeout(function() {
    $('.inview').each(function(){

      $(this).bind('inview', function (event, visible) {
        if (visible == true){
          $(this).addClass('visible');
        }else{
        }
      });
    });
  }, 500);
});

$(window).on('load', function() {
	resize();
});

$(window).scroll(function() {
	skills();
});


function skills(){
	var hT = $('.skills').offset().top,
    hH = $('.skills').outerHeight(),
    wH = $(window).height(),
    b = $('.banner').height(),
    wS = $(this).scrollTop();
	if (wS > (hT+hH-1.4*wH)){
		// alert(1);
	    $(document).ready(function(){
	    	setTimeout(function(){
	    		$('.skill-list li').each(function(){
		            $(this).find('.skill-percent').animate({
		                width:$(this).find('.skill-box').attr('data-percent')
		            }, 1000); // 5 seconds
		        });},1000
	    	);
	        
	    });
	}
}


function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	// STICKY FOOTER
	var footerHeight = $('footer').outerHeight();
	var footerTop = (footerHeight) * -1
	$('footer').css({marginTop: footerTop});
	$('#main-wrapper').css({paddingBottom: footerHeight});
	$('.wh').css({height: windowHeight});

}


function menu_nav(){
	$('.trigger a').click(function(e){
		e.preventDefault();
		$('.main-menu').toggleClass('active');
		$(this).toggleClass('active');
	});


	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - 45
	        }, 500);
	    }

	});
}


function banner_load(){

	$('.banner .overlay_texts .name').addClass('animate');
	$('.banner .overlay_texts .subtitle').addClass('animate');
	$('.banner .scroll-btn').addClass('animate');
	$('.banner .image').addClass('animate');
}


function loader(){
	var mainPreloader	 = $(".loader-wrapper .loader");
	var WinWidth 		 = $(window).width();
    var WinHeight		 = $(window).height();
    var zero = 0;

    mainPreloader.css({
        top: WinHeight / 2 - 2.5,
        left: WinWidth / 2 - 200
    });

    do {
        mainPreloader.animate({
            width: zero
        }, 10);
        zero += 3;
    } while (zero <= 400);
    if (zero === 402) {
        mainPreloader.animate({
            left: 0,
            width: '100%'
        });
        mainPreloader.animate({
            top: '0',
            height: '100vh'
        });
    }

    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast');
        (mainPreloader).fadeOut('fast');
    }, 4500);
}

  
