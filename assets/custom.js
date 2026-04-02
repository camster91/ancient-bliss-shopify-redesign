$(document).ready(function() {
    var maxHeight = 0;
    
    $(".quotes-wrapper .quote__slide-wrapper").each(function() {
        var thisHeight = $(this).outerHeight();
        if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
        }
    });
    
    $(".quotes-wrapper .quote__slide-wrapper").each(function() {
        $(this).height(maxHeight);
    });
});
