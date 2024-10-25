(function ($) {
    'use strict';

    var $window = $(window);

    // :: Sticky Active Code
    $window.on("scroll", function () {
        if ($(document).scrollTop() > 86) {
            $("#banner").addClass("shrink");
        } else {
            $("#banner").removeClass("shrink");
        }
    });

    // :: Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".client_slides").owlCarousel({
            responsive: {
                0: { items: 1 },
                767: { items: 1 },
                991: { items: 2 }
            },
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.client_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            $(this).html(index < 10 ? '0' + index : index);
        });
    }

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({ type: 'iframe' });
        $('.open-popup-link').magnificPopup({ type: 'inline', midClick: true });
        $('.open-signup-link').magnificPopup({ type: 'inline', midClick: true });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: { enabled: true },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }

    // :: onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: Accordian Active Code
    (function () {
        var dd = $('dd');
        dd.filter(':nth-child(n+3)').hide();
        $('dl').on('click', 'dt', function () {
            $(this).next().slideDown(500).siblings('dd').slideUp(500);
        });
    })();

    // :: niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".timelineBody").niceScroll();
    }

    // :: Timer Active Code
    $('.simple_timer').syotimer({
        year: 2025,
        month: 11,
        day: 9,
        hour: 20,
        minute: 30
    });

    // :: Disable Cut, Copy, Paste and Context Menu
    $('body').bind('cut copy paste', function (e) { e.preventDefault(); });
    $("body").on("contextmenu", function (e) { return false; });
    document.onkeydown = function (e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
            alert('This is not allowed');
            return false;
        } else {
            return true;
        }
    };
    $(document).keydown(function (event) {
        if (event.keyCode == 123) {
            return false;
        } else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
            return false;
        }
    });
    var isCtrl = false;
    document.onkeyup = function (a) { if (a.which == 17) isCtrl = false; };
    document.onkeydown = function (a) {
        if (a.which == 17) isCtrl = true;
        if ((a.which == 85 || a.which == 67) && isCtrl) return false;
    };

})(jQuery);