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



    $('.introductory-video').bind('ended', function(){
        $(this).parent().fadeOut();
        $('.navbar').fadeIn(1499);
        $('.mainbody').fadeIn(5000);
        $('.mainbtn').show();
        $('#container').show();
        $('.homecontent').fadeIn(8000);
        $('#divider').show();
        $('#research1').show();
        $('.percentage').show();
        $('.slideshowbody').show();
        $('.photos').fadeIn(5000);
        $('.footer').fadeIn(7000);
        
    })
})




