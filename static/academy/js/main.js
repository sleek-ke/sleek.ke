$(document).ready(function() {
  "use strict";

    if ($.fn.classyNav) {
        $('#roamingnav').classyNav();
    }

    // scrollspy
    $('body').scrollspy({
        offset: 190,
        target: '.dtr-scrollspy'
    });
    
    // nav scroll   
    var myoffset = $('#dtr-header-global').height();
    $('.navbar a[href^="#"]').click(function(){  
        event.preventDefault();  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - myoffset
        }, "slow","easeInSine");
    });

    //stickyatTop
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 670) {
            $(".scrollheader").addClass("is-sticky");
            $('.scrollheader').css('position', 'fixed');
        } else {
            $(".scrollheader").removeClass("is-sticky");
            $(".scrollheader").css('position', 'relative');
        }
    });

    // Steps Slider
    $('#steps').owlCarousel({
        loop: false,
        nav: true,
        navText: ['<img src="./images/icons/left.png">','<img src="./images/icons/right.png">'],
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Popular
    $('#popular').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="./images/icons/left.png">','<img src="./images/icons/right.png">'],
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 5,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});

    });