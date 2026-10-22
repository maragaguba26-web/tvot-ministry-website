(function ($) {
    "use strict";

// Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    var updateNavbar = function () {
        var scrolled = $(window).scrollTop() > 45;
        var desktop = window.matchMedia('(min-width: 1200px)').matches;
        $('.fixed-top')
            .toggleClass('bg-dark shadow', scrolled)
            .css('top', desktop && scrolled ? -45 : 0);
    };
    $(window).on('scroll resize', updateNavbar);
    updateNavbar();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);



