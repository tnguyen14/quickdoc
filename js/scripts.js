jQuery(document).ready(function ($) {
    
    // Change the note title upon focus
    var default_title = $('.title').html();
    $('.title').focus(function (e) {
        if ($(this).html() === default_title) {
            $(this).removeClass('default');
            $(this).html('');
        }
        // prevent browser default behavior, i.e. adding a <br> tag
        // source: http://stackoverflow.com/questions/4038489/contenteditable-adds-a-br-when-i-hit-space
        if (e.keyCode === 13 && e.shiftKey) { //enter && shift
            e.preventDefault(); //Prevent default browser behavior
            //this.html(this.html+"<br>");
        }
        if (e.keyCode === 13) { //enter
            e.preventDefault(); //Prevent default browser behavior
        }
    });
    
    $('.title').blur(function (e) {
        if ($(this).html() === '' || $(this).html() === '<br>') {
            $(this).addClass('default');
            $(this).html(default_title);
        }
        document.title = $(this).html();
        
        // prevent browser default behavior, i.e. adding a <br> tag
        // source: http://stackoverflow.com/questions/4038489/contenteditable-adds-a-br-when-i-hit-space
        if (e.keyCode === 13 && e.shiftKey) { //enter && shift
            e.preventDefault(); //Prevent default browser behavior
            //this.html(this.html+"<br>");
        }
        if (e.keyCode === 13) { //enter
            e.preventDefault(); //Prevent default browser behavior
        }
    });
    
    
});