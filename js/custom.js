$(document).ready(function() {
    var html_body = $('html,body');
    // active class;

    $('.nav-link').click(function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    //animation scroll js
    $('.navbar-nav a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });


    //Testimonial js;
    $('.testi_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,


    });

    //banner slider js;
    $('.banner_slider').slick({

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    // our team/ owl-carousel;
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    });


    // Our partners js;

    $('.partner_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,

    });

    // Counrter up js;

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    // Veno box js;

    $('.venobox').venobox({

        framewidth: '800px', // default: ''
        frameheight: '500px', // default: ''
        bgcolor: '#5dff5e', // default: '#fff'
        titleattr: 'data-title', // default: 'title'
        numeratio: true, // default: false
        infinigall: true, // default: false
        autoplay: true
    });

    // veno box gallery;

    $('.gallery').venobox({

        framewidth: '700px', // default: ''
        frameheight: '500px', // default: ''
        bgcolor: '#fff', // default: '#fff'
        titleattr: 'data-title', // default: 'title'
        numeratio: true, // default: false
        infinigall: true, // default: false
        autoplay: true,
        border: "10px"
    });

    // back to top return;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').fadeIn(200);

            $('.header_bg').addClass("bg_black"); // Background color change

        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow

            $('.header_bg').removeClass("bg_black");
        }
    });

    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 1000);
    });

    // header fadeIn / fadeOut;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            $('.navbar').fadeIn(500);

            $('.navbar').addClass(".top"); // Background color change
            $('.navbar').addClass("navbar-top"); // Background color change
            $('.navbar-brand').addClass("nav-brand-top"); // Background color change

        } else {
            // $('.navbar').fadeOut(500); // Else fade out the arrow

            $('.navbar').removeClass(".top");
            $('.navbar').removeClass("navbar-top");
            $('.navbar-brand').removeClass("nav-brand-top");
        }
    });


});