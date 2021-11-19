$(document).ready(function(){
    $('.mainbody').hide();
    $('.mainbtn').hide();
    $('#container').hide();
    $('.homecontent').hide();
    $('.divider').hide();
    $('.research1').hide();
    $('.percentage').hide();
    $('.slideshowbody').hide();
    $('.photos').hide();
    $('.footer').hide();
    $('.navbar').hide();
    $('.navbar_logo').hide();
    $('.split').hide();



    $('.introductory-video').bind('ended', function(){
        $(this).parent().fadeOut();
        $('.navbar').fadeIn(1499);
        $('.navbar_logo').fadeIn(2000);
        $('.mainbody').fadeIn(5000);
        $('.homecontent').fadeIn(8000);
        $('.footer').fadeIn(5000);
        $('.split').fadeIn(5000);
        
    })
})




