$(document).ready(function () {

    // Back-to-top button
    var $backToTop = $('<a id="back-to-top" title="Về đầu trang"><i class="fa fa-chevron-up"></i></a>');
    $('body').append($backToTop);

    $(window).on('scroll.btt', function () {
        if ($(this).scrollTop() > 320) {
            $backToTop.addClass('visible');
        } else {
            $backToTop.removeClass('visible');
        }
    });

    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 380, 'swing');
    });

});
