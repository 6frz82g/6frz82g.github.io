$(function() {
    $('.folder').on('click', function(e) {
        $(this).toggleClass('folder-open');
        e.stopPropagation();
    });

    $('.file').on('click', function(e) {
       e.stopPropagation();
    });
})
