/*=================================
        SERVICES
=================================*/

$(document).ready(function () {

    //animate on scroll
    new WOW().init();
});

/*=================================
        WORK
=================================*/

$(document).ready(function () {

    //animate on scroll
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }


    });
});

/*=================================
        OUR TEAM
=================================*/

$(document).ready(function () {
    $("#team-member").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            
            480: {
                items: 2
            },
            
            768: {
                items: 3
            },
            
            992: {
                items: 3
            }
        }
    });
});

/*=================================
       TESTIMONIAL
=================================*/

$(document).ready(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*=================================
       STAT
=================================*/

$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});


/*=================================
       CLIENTS
=================================*/

$(document).ready(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            
            480: {
                items: 3
            },
            
            768: {
                items: 5
            },
            
            992: {
                items: 6
            }
        }
    });

});


/*=================================
       NAVIGATION
=================================*/

$(document).ready(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide the nav
            $("nav").removeClass('vesco-top-nav');
            $(".btn-back-to-top").fadeOut();

        } else {
            //show nav
            $("nav").addClass('vesco-top-nav');
            $(".btn-back-to-top").fadeIn();
            

        }
    });

});

/*=================================
       NAVIGATION
=================================*/

$("a.smooth-scroll").click(function (event) {

    event.preventDefault();
    var section = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(section).offset().top - 64
    }, 1250, 'easeInOutExpo');



});

//close menu on click

$(document).ready(function () { 
    $(".navbar-collapse ul li a").on("click touch",function() {
        
       $(".navbar-toggle").click();
        
    });
    

});
