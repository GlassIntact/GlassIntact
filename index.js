$(document).ready(function(){
    $('.navbar').hide();
    $('.mainbody').hide();
    $('.mainbtn').hide();
    $('#container').hide();
    $('.homecontent').hide();
    $('.divider').hide();
    $('.research1').hide();
    $('.percentage').hide();
    $('.slideshowbody').hide();
    $('.cursor').show();

    $('.introductory-video').bind('ended', function(){
        $(this).parent().fadeOut();
        $('.navbar').fadeIn(1000);
        $('.mainbody').show();
        $('.mainbtn').show();
        $('#container').show();
        $('.homecontent').show();
        $('#divider').show();
        $('#research1').show();
        $('.percentage').show();
        $('.slideshowbody').show();
        $('.cursor').show();
        
    })
})




