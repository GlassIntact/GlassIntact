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


    $('.introductory-video').bind('ended', function(){
        $(this).parent().fadeOut();
        $('.navbar').fadeIn(1499);
        $('.mainbody').show();
        $('.mainbtn').show();
        $('#container').show();
        $('.homecontent').show();
        $('#divider').show();
        $('#research1').show();
        $('.percentage').show();
        $('.slideshowbody').show();
        $('.photos').fadeIn(5000);
        
    })
})




