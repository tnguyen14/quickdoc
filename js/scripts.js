jQuery(document).ready(function ($) {
    // Change the note title upon focus
    var default_title = $('.title').html();
    $('.title').focus(function () {
        if ($(this).html() === default_title) {
            $(this).removeClass('default');
            $(this).html('');
        }
    });
    
    $('.title').blur(function () {
        if ($(this).html() === '') {
            $(this).addClass('default');
            $(this).html(default_title);
        } else {
            document.title = $(this).html();
        }
    });
});