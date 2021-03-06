function windowIsLarge(event) {
    if (event.matches) {
        $('nav ul').show();
        $('nav ul li ul').hide();
        $('.dropdown-toggle').removeClass('active');
    }
}

var largeWindowListener = window.matchMedia("(min-width: 900px)")
windowIsLarge(largeWindowListener);
largeWindowListener.addListener(windowIsLarge);

$(document).ready(function() {
    $('.issue').on("mousedown mouseenter mouseleave", function(e) {
        // Only animate if the div has a URL.
        if ($(this).attr("url")) {
            if (e.type === "mousedown") {
                $(this).addClass("active");
                window.location = $(this).attr("url");
            }
            if (e.type === "mouseenter") {
                // $(this).addClass("hover");
                $(this).width($(this).width() * 1.02);
                $(this).height($(this).height() * 1.02);
            }
            if (e.type ==="mouseleave") {
                // $(this).removeClass("hover");
                $(this).width($(this).width() / 1.02);
                $(this).height($(this).height() / 1.02);
            }
        }
    });

    $('nav div.expand i').on("click", function(e) {
        console.log("clicked");
        $('.collapse').slideToggle(250);
    });

    $('tbody tr').on('click', function(e) {
        if (e.target.tagName == 'TD') {
            $(this).toggleClass('selected');
            $(this).find('button.hide').animate({
                width: 'toggle',
                padding: 'toggle'
                }, 
                200,
                'linear');
        }
    });

    $('.x').on('click', function(e) {
        $('.modal').fadeOut(200);
    });

    $('.dismissable .close').on('click', function(e) {
        $(this).fadeOut("fast");
        $(this).siblings().fadeOut("fast");
        $(this).parent().animate({
            'width': 0,
            'height': 0,
            })
            .hide("slow");
        });
});
