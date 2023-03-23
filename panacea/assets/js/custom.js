(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            mainmenu
        ----------------------------------------------------*/
        $('.mainmenu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: '1199',
        });

        $(".sidebar-toggle-btn").on("click", function () {
            $(".sidebar-wrap").addClass("sidebar-opened");
//            $(".body-overlay").addClass("opened");
        });
        $(".sidebar-close-btn").on("click", function () {
            $(".sidebar-wrap").removeClass("sidebar-opened");
//            $(".body-overlay").removeClass("opened");
        });
        /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/

        ///banner
        var $full = $('.slider-area-full');
        if($full.length > 0){
            $(document).ready(function(){
                $(".slider-area-full").owlCarousel({
                    loop:true,
                    center:true,
                    smartSpeed: 450,
                    autoplaySpeed:3000,
                    items:1,
                    autoplay: true,
                    nav: true,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                });
            });
        }


        var $full = $('.product-slider');
        if($full.length > 0){
            $(document).ready(function(){
                $(".product-slider").owlCarousel({
                   loop: true,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    nav: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 450,
                    margin: 15,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: 5
                        },
                        1920: {
                            items: 5
                        }
                    }
                });
            });
        }

    });
    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });


    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));
