$(document).ready(function(){
  // Hiding the contents of the webpage when the animation plays
    $('.line1').hide();
    $('.caption').hide();
    $('.map').hide();
    $('.bars-info').hide();
    $('.scroll-image').hide();
    $('.footer').hide();

    // Fading the content of the web page after the animation is done playing 
    $('.line1').fadeIn(1000, function(){
        $('.line1').animate({fontSize: 48}, function() {
            $('.caption').fadeIn(1000);
            $('.map').fadeIn(1000);
            $('.bars-info').show();
            $('.scroll-image').show();
            $('.footer').show();
        });
    });

    // Making the contents of the table fade in as you scroll past it on the window
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".bars-info td").each(function() {
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          if (objectBottom < windowBottom) { 
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
          } else { 
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
          }
        });
      }).scroll();

})