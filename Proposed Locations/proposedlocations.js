$(document).ready(function(){
    $('.line1').hide();
    $('.caption').hide();
    $('.map').hide();
    $('.bars-info').hide();


    $('.line1').fadeIn(1000, function(){
        $('.line1').animate({fontSize: 48}, function() {
            $('.caption').fadeIn(1000);
            $('.map').fadeIn(1000);
            $('.bars-info').show();
        });
    });

    

})