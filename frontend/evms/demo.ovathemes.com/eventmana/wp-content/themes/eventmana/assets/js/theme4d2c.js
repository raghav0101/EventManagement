'use strict';
var theme = function ($) {

    // prevent empty links
    // ---------------------------------------------------------------------------------------
    function handlePreventEmptyLinks() {
        $('a[href="#"]').click(function (event) {
            event.preventDefault();
        });
    }

    // Placeholdem
    // ---------------------------------------------------------------------------------------
    // function handlePlaceholdem() {
    //     Placeholdem(document.querySelectorAll('[placeholder]'));
    // }

    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    function handleBootstrapSelect() {
        $('.selectpicker').selectpicker();
    }

    // add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    function handleHoverClass() {
        var hover = $('.thumbnail');
        hover.hover(
                function () {
                    $(this).addClass('hover');
                },
                function () {
                    $(this).removeClass('hover');
                }
        );
    }

    // superfish menu
    // ---------------------------------------------------------------------------------------
    function handleSuperFish() {
        $('ul.sf-menu').superfish();
        $('ul.sf-menu a').click(function () {
            $('body').scrollspy('refresh');
        });
        // fixed menu toggle
        $('.menu-toggle').on('click', function () {
            if ($('.navigation').hasClass('opened')) {
                $(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
                $('.navigation').removeClass('opened').addClass('closed');
            } else {
                $(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
                $('.navigation').removeClass('closed').addClass('opened');
            }
        });
        // submenu fix
        $('.mobile-submenu').click(function () {
            $(this).parent().toggleClass('mobile-submenu-open');
        });
        $('ul.sf-menu a').click(function () {
            $('ul.sf-menu li').removeClass('mobile-submenu-open');
        });
    }

    // Smooth scrolling
    // ---------------------------------------------------------------------------------------
    function handleSmoothScroll() {
        $('.sf-menu a, .scroll-to').click(function () {

            if ($(this).hasClass('btn-search-toggle')) {
                $('.header-search-wrapper').fadeToggle();
                $('.header').toggleClass('header-overlay');
            }
            else {

                //var headerH = $('header').outerHeight();
                var headerH = 0;
                $('.sf-menu a').removeClass('active');
                $(this).addClass('active');
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - headerH + 'px'
                }, {
                    duration: 1200,
                    easing: 'easeInOutExpo'
                });
                return false;

            }
        });
    }

    // Text Rotater Start
    // ---------------------------------------------------------------------------------------
    (function ($) {
        $.fn.extend({
            rotaterator: function (options) {

                var defaults = {
                    fadeSpeed: 900,
                    pauseSpeed: 100,
                    child: null
                };

                var options = $.extend(defaults, options);

                return this.each(function () {
                    var o = options;
                    var obj = $(this);
                    var items = $(obj.children(), obj);
                    items.each(function () {
                        $(this).hide();
                    })
                    if (!o.child) {
                        var next = $(obj).children(':first');
                    } else {
                        var next = o.child;
                    }
                    $(next).fadeIn(o.fadeSpeed, function () {
                        $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
                            var next = $(this).next();
                            if (next.length == 0) {
                                next = $(obj).children(':first');
                            }
                            $(obj).rotaterator({child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed});
                        })
                    });
                });
            }
        });
    })(jQuery);
    // Text Rotater End



    // prettyPhoto
    // ---------------------------------------------------------------------------------------
    function handlePrettyPhoto() {
         $("a[rel^='prettyPhoto']").prettyPhoto({
            // theme: 'facebook',
            // slideshow: 5000,
            // autoplay_slideshow: true
        });
         $("a[data-gal^='prettyPhoto']").prettyPhoto({
            // theme: 'facebook',
            // slideshow: 5000,
            // autoplay_slideshow: true
        });
         

    }

    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    function handleToTopButton() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.to-top').css({bottom: '15px'});
            } else {
                $('.to-top').css({bottom: '-100px'});
            }
        });
        $('.to-top').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    }

    // preloader
    // ---------------------------------------------------------------------------------------
    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut(100);
    });

    // Isotope
    $(window).load(function () {
        
        if ($().isotope) {
            var tab_active = $('#filtrable-events').data('tab_active');
            if(tab_active != ''){
                $('.isotope.events').isotope({// initialize isotope
                    filter: '.'+tab_active,
                    itemSelector: '.isotope-item' // options...
                            //,transitionDuration: 0 // disable transition
                });
            }else{
                $('.isotope.events').isotope({// initialize isotope
                    itemSelector: '.isotope-item' // options...
                            //,transitionDuration: 0 // disable transition
                });
            }
            
            $('#filtrable-events a').click(function () { // filter items when filter link is clicked
                var selector = $(this).attr('data-filter');
                $('#filtrable-events a').parent().removeClass('current');
                $(this).parent().addClass('current');
                $('.isotope.events').isotope({filter: selector});
                $('.isotope').isotope('reLayout', $.waypoints('refresh')); // layout/reLayout
                return false;
            });
        }
        if ($().isotope) {
            $('.isotope.gallery').isotope({// initialize isotope
                itemSelector: '.isotope-item' // options...
                        //,transitionDuration: 0 // disable transition
            });
            $('#filtrable-gallery a').click(function () { // filter items when filter link is clicked
                var selector = $(this).attr('data-filter');
                $('#filtrable-gallery a').parent().removeClass('current');
                $(this).parent().addClass('current');
                $('.isotope.gallery').isotope({filter: selector});
                $('.isotope').isotope('reLayout', $.waypoints('refresh')); // layout/reLayout
                return false;
            });
        }
    });

    $(window).resize(function () {
        // Refresh isotope
        if ($().isotope) {
            $('.isotope').isotope('reLayout', $.waypoints('refresh')); // layout/relayout on window resize
        }
    });

    // Shrink header on scroll
    // ---------------------------------------------------------------------------------------
    function handleAnimatedHeader() {
        var header = $('.header.fixed');
        function refresh() {
            var scroll = $(window).scrollTop();
            if (scroll >= 99) {
                header.addClass('shrink');
            } else {
                header.removeClass('shrink');
            }
            $.waypoints('refresh');
        }
        ;
        $(window).load(function () {
            refresh();
        });
        $(window).scroll(function () {
            refresh();
        });
        $(window).on('touchstart', function () {
            refresh();
        });
        $(window).on('scrollstart', function () {
            refresh();
        });
        $(window).on('scrollstop', function () {
            refresh();
        });
        $(window).on('touchmove', function () {
            refresh();
        });

    }

    // handleTabsFAQ
    // ---------------------------------------------------------------------------------------
    function handleTabsFAQ() {
        if ($('#tabs-faq').length) {
            var tabs = $('#tabs-faq');
            tabs.find('a').on('click', function () {
                tabs.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-plus');
                $(this).find('.fa').removeClass('fa-plus').addClass('fa-angle-right');
            });
        }
    }

    // resize page
    // ---------------------------------------------------------------------------------------
    function resizePage() {
        if ($('body').hasClass('boxed')) {
            $('#main-slider').find('.page').each(function () {
                $(this).removeAttr('style');
            });
        }

        $('#main-slider').trigger('refresh');
        $('.testimonials').trigger('refresh');
        $('.partners-carousel .owl-carousel').trigger('refresh');
        $('.partners-carousel-2 .owl-carousel').trigger('refresh');
        $('.carousel-slider .owl-carousel').trigger('refresh');

    }

    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize: function () {
            resizePage();
        },
        init: function () {
            handlePreventEmptyLinks();
            // handlePlaceholdem();
            handleBootstrapSelect();
            handleHoverClass();
            handleSuperFish();
            handleSmoothScroll();
            handlePrettyPhoto();
            handleToTopButton();
            handleAnimatedHeader();
            handleTabsFAQ();
        },
        // Main Slider
        initMainSlider: function () {
            $('.main-slider').each(function(){

                var autoplay = $(this).data('auto_slider');
                var duration = $(this).data('duration');
                var loop = $(this).data('loop');
                var navigation = $(this).data('navigation');

                $(this).owlCarousel({
                    //items: 1,
                    autoplay: autoplay,
                    // autoplayTimeout: duration,
                    autoplayHoverPause: true,
                    loop: loop,
                    margin: 0,
                    dots: false,
                    nav: navigation,
                    navText: [
                        "<i class='fa fa-caret-left'></i>",
                        "<i class='fa fa-caret-right'></i>"
                    ],
                    responsiveRefreshRate: 100,
                    responsive: {
                        0: {items: 1},
                        479: {items: 1},
                        768: {items: 1},
                        991: {items: 1},
                        1024: {items: 1}
                    }
                });
            });
            

        },
        // CountDown
        initCountDown: function () {
            $('.defaultCountdown').each(function(){
                var years = $(this).data('years');
                var months = $(this).data('months');
                var weeks = $(this).data('weeks');
                var days = $(this).data('days');
                var hours = $(this).data('hours');
                var minutes = $(this).data('minutes');
                var seconds = $(this).data('seconds');

                var year = $(this).data('year');
                var month = $(this).data('month');
                var week = $(this).data('week');
                var day = $(this).data('day');
                var hour = $(this).data('hour');
                var minute = $(this).data('minute');
                var second = $(this).data('second');

                var end_date_y = $(this).data('end_date_y');
                var end_date_m = $(this).data('end_date_m');
                var end_date_d = $(this).data('end_date_d');
                var end_date_h = $(this).data('end_date_h');
                var end_date_i = $(this).data('end_date_i');

                var timezone = $(this).data('timezone');
                var display_format = $(this).data('display_format');


                var austDay = new Date();
                austDay = new Date(end_date_y, end_date_m, end_date_d, end_date_h, end_date_i);
               $(this).countdown({
                    labels: [years,months,weeks,days,hours,minutes,seconds], 
                    labels1: [year,month,week,day,hour,minute,second], 
                    until: austDay, 
                    timezone: timezone, 
                    format: display_format
                });
            });


        },
        // Images carousel
        initImageCarousel: function () {
            $('.owl-carousel .img-carousel').each(function(){
                
                var autoplay = $(this).data('autoplay');
                var duration = $(this).data('duration');
                var loop = $(this).data('loop');
                var navigation = $(this).data('navigation');

                $(this).owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    autoplayTimeout: duration,
                    margin: 0,
                    dots: true,
                    nav: navigation,
                    navText: [
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>"
                    ],
                    responsive: {
                        0: {items: 1},
                        479: {items: 1},
                        768: {items: 1},
                        991: {items: 1},
                        1024: {items: 1}
                    }
                });
            });
            
        },
        initCorouselSlider4: function () {
            $('.carousel-slider .owl-carousel.slide-4').each(function(){
                var autoplay = $(this).data('autoplay');
                var item_slide = $(this).data('item_slide');
                var duration = $(this).data('duration');
                var navigation = $(this).data('navigation');
                var loop = $(this).data('loop');

                $(this).owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    autoplayTimeout: duration,
                    margin: 30,
                    dots: false,
                    nav: navigation,
                    navText: [
                        "<i class='fa fa-caret-left'></i>",
                        "<i class='fa fa-caret-right'></i>"
                    ],
                    responsive: {
                        0: {items: 1},
                        479: {items: 2},
                        767: {items: 2},
                        991: {items: 3},
                        1024: {items: item_slide}
                    }
                });
            });
            

        },
        initSpeaker: function () {
            $('.carousel-slider .owl-carousel.speaker').each(function(){
                var autoplay = $(this).data('autoplay');
                var item_slide = $(this).data('item_slide');
                var duration = $(this).data('duration');
                var navigation = $(this).data('navigation');
                var loop = $(this).data('loop');

                $(this).owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    autoplayTimeout: duration,
                    margin: 30,
                    dots: false,
                    nav: navigation,
                    navText: [
                        "<i class='fa fa-caret-left'></i>",
                        "<i class='fa fa-caret-right'></i>"
                    ],
                    responsive: {
                        0: {items: 1},
                        479: {items: 2},
                        767: {items: 2},
                        991: {items: 3},
                        1024: {items: item_slide}
                    }
                });
            });
            

        },
        initLatestblog: function () {
            $('.carousel-slider .owl-carousel.latestblog').each(function(){
                var autoplay = $(this).data('autoplay');
                var item_slide = $(this).data('item_slide');
                var duration = $(this).data('duration');
                var navigation = $(this).data('navigation');
                var loop = $(this).data('loop');

                $(this).owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    autoplayTimeout: duration,
                    margin: 30,
                    dots: false,
                    nav: navigation,
                    navText: [
                        "<i class='fa fa-caret-left'></i>",
                        "<i class='fa fa-caret-right'></i>"
                    ],
                    responsive: {
                        0: {items: 1},
                        479: {items: 2},
                        767: {items: 2},
                        991: {items: 3},
                        1024: {items: item_slide}
                    }
                });
            });
            

        },
        initCorouselSlider3: function () {
            $('.carousel-slider .owl-carousel.slide-3').owlCarousel({
                autoplay: true,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    767: {items: 2},
                    991: {items: 3},
                    1024: {items: 3}
                }
            });

        },
        // Partners Slider
        initPartnerSlider: function () {
            $(".partners-carousel .owl-carousel").each(function(){
                var autoplay = $(this).data('auto');
                var itemslide = $(this).data('itemslide');
                var show_nav = $(this).data('show_nav');
                var loop = $(this).data('loop');
                var autoplaytimeout = $(this).data('autoplaytimeout');

                $(this).owlCarousel({
                      autoplay: autoplay,
                      loop: loop,
                      margin: 25,
                      dots: false,
                      nav: show_nav,
                      autoplayTimeout: autoplaytimeout,
                      navText: [
                          "<i class='fa fa-caret-left'></i>",
                          "<i class='fa fa-caret-right'></i>"
                      ],
                      responsive: {
                          0:    {items: 1},
                          479:  {items: 2},
                          768:  {items: 3},
                          991:  {items: 4},
                          1024: {items: itemslide}
                      }
                });
            });
        },
        // Partners Slider
        initPartnerSlider2: function () {
            $('.partners-carousel-2 .owl-carousel').owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 5},
                    1024: {items: 5}
                }
            });
        },
        // Partners Slider
        initEventCarousel: function () {
            $('.event-carousel .owl-carousel').owlCarousel({
                autoplay: false,
                loop: false,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 2},
                    991: {items: 3},
                    1024: {items: 4}
                }
            });
        },
        // Main Slider

        // Testimonials
        initTestimonials: function () {
            $('.testimonials').each(function(){

                var autoplay = $(this).data('autoplay');
                var duration = $(this).data('duration');
                var dots = $(this).data('dots');
                var loop = $(this).data('loop');

                $(this).owlCarousel({
                    items: 1,
                    autoplay: autoplay,
                    autoplayTimeout: duration,
                    loop: loop,
                    dots: dots,
                    nav: false,
                    navText: [
                        "<i class='fa fa-caret-left'></i>",
                        "<i class='fa fa-caret-right'></i>"
                    ]
                });
            });
            
        },
        // Animation on Scroll
        initAnimation: function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight')
                            //offset: 'bottom-in-view'
                            //offset: '95%'
                });
            }
            // Refresh Waypoints on tab click / animation
            $('#tabs-lv1 li a[data-toggle="tab"]').on('shown.bs.tab', function () {
                $.waypoints('refresh');
            });
            $('#tabs-lv2 li a[data-toggle="tab"]').on('shown.bs.tab', function () {
                $.waypoints('refresh');
            });
        },
        // Google map
        initGoogleMap: function () {

                $('.google-map').each(function(){

                    var map;
                    var marker;
                    var zoom = $(this).data('zoom');
                    var latitude = $(this).data('latitude');
                    var longitude = $(this).data('longitude');
                    var defineid = $(this).data('defineid');
                    var marker_title = $(this).data('marker_title');

                    function initialize() {
                        var mapOptions = {
                            scrollwheel: false,
                            zoom: zoom,
                            center: new google.maps.LatLng(latitude, longitude)
                        };
                        map = new google.maps.Map(document.getElementById(defineid), mapOptions);
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(latitude, longitude),
                            map: map,
                            title: marker_title
                        });
                    }
                    google.maps.event.addDomListener(window, "load", initialize);
                });

            
            
        },
        slideshow_height: function(){

            var win_w = $(window).width();
            var win_h = $(window).height();

            var height_desk = $("#main-slider.main-slider-multi-bg").data('height_desk');
            var height_ipad = $("#main-slider.main-slider-multi-bg").data('height_ipad');
            var height_mobile = $("#main-slider.main-slider-multi-bg").data('height_mobile');

            

            if(win_w < 768){
                $('#main-slider.main-slider-multi-bg .item').css('height', height_mobile);
                $('#main-slider.main-slider-multi-bg .item').css('min-height', height_mobile);    
            }else if (win_w >= 768 && win_w < 991){
                $('#main-slider.main-slider-multi-bg .item').css('height', height_ipad);    
                $('#main-slider.main-slider-multi-bg .item').css('min-height', height_ipad);
            }else{
                $('#main-slider.main-slider-multi-bg .item').css('height', height_desk);    
                $('#main-slider.main-slider-multi-bg .item').css('min-height', height_desk);
            }
        }



    };



}(jQuery);


jQuery(document).ready(function () {
    jQuery('#rotate').rotaterator({fadeSpeed: 1200, pauseSpeed: 500});
// Google map
// ---------------------------------------------------------------------------------------
if (typeof google === 'object' && typeof google.maps === 'object') {
    if (jQuery('#map-canvas1').length) {

        var lat1 = jQuery('#map-canvas1').data('lat1').split(',');
        var lat1_title = jQuery('#map-canvas1').data('lat1_title');

        var lat2 =jQuery('#map-canvas1').data('lat2').split(',');
        var lat2_title =jQuery('#map-canvas1').data('lat2_title');

        var lat3 =jQuery('#map-canvas1').data('lat3').split(',');
        var lat3_title =jQuery('#map-canvas1').data('lat3_title');

        var lat4 =jQuery('#map-canvas1').data('lat4').split(',');
        var lat4_title =jQuery('#map-canvas1').data('lat4_title');

        var lat5 =jQuery('#map-canvas1').data('lat5').split(',');
        var lat5_title =jQuery('#map-canvas1').data('lat5_title');

        var lat6 =jQuery('#map-canvas1').data('lat6').split(',');
        var lat6_title =jQuery('#map-canvas1').data('lat6_title');

        var lat7 =jQuery('#map-canvas1').data('lat7').split(',');
        var lat7_title =jQuery('#map-canvas1').data('lat7_title');

        var lat8 =jQuery('#map-canvas1').data('lat8').split(',');
        var lat8_title =jQuery('#map-canvas1').data('lat8_title');


        var map;
        var marker1, marker2, marker3, marker4, marker5, marker6,marker7, marker8;
        var infowindow;
        
        var image = jQuery('#map-canvas1').data('img');
        // var image = 'wp-content/themes/eventmana/assets/img/icon-google-map.png'; // marker icon
        google.maps.event.addDomListener(window, 'load', function () {

            var mapOptions = {
                scrollwheel: false,
                zoom: 10,
                center: new google.maps.LatLng(lat1[0],lat1[1]) // map coordinates
            };



            map = new google.maps.Map(document.getElementById('map-canvas1'),
                mapOptions);

            if(lat1.length>0){
                marker1 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat1[0],lat1[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat1_title
                });
            }
            
            if(lat2.length>0){
                marker2 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat2[0],lat2[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat2_title
                });
            }
            if(lat3.length>0){
                marker3 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat3[0],lat3[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat3_title
                });
            }

            if(lat4.length>0){
                marker4 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat4[0],lat4[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat4_title
                });
            }

            if(lat5.length>0){
                marker5 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat5[0],lat5[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat5_title
                });
            }

            if(lat6.length>0){
                marker6 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat6[0],lat6[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat6_title
                });
            }

            if(lat7.length>0){
                marker7 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat7[0],lat7[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat7_title
                });
            }

            if(lat8.length>0){
                marker8 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat8[0],lat8[1]), // marker coordinates
                    map: map,
                    icon: image,
                    title: lat8_title
                });
            }



            if(lat1.length>0){
                var infowindow1 = new google.maps.InfoWindow({
                    content: lat1_title
                });

                google.maps.event.addListener(marker1, 'click', function() {
                    infowindow1.open(map,marker1);
                });
            }
            // more markers
            if(lat2.length>0){
                var infowindow2 = new google.maps.InfoWindow({
                    content: lat2_title
                });
                google.maps.event.addListener(marker2, 'click', function() {
                    infowindow2.open(map,marker2);
                });
            }
            if(lat3.length>0){
                var infowindow3 = new google.maps.InfoWindow({
                    content: lat3_title
                });
                google.maps.event.addListener(marker3, 'click', function() {
                    infowindow3.open(map,marker3);
                });
            }

            if(lat4.length>0){
                var infowindow4 = new google.maps.InfoWindow({
                    content: lat4_title
                });
                google.maps.event.addListener(marker4, 'click', function() {
                    infowindow4.open(map,marker4);
                });
            }
            if(lat5.length>0){
                var infowindow5 = new google.maps.InfoWindow({
                    content: lat5_title
                });
                google.maps.event.addListener(marker5, 'click', function() {
                    infowindow5.open(map,marker5);
                });
            }
            if(lat6.length>0){
                var infowindow6 = new google.maps.InfoWindow({
                    content: lat6_title
                });
                google.maps.event.addListener(marker6, 'click', function() {
                    infowindow6.open(map,marker6);
                });
            }
            if(lat7.length>0){
                var infowindow7 = new google.maps.InfoWindow({
                    content: lat7_title
                });
                google.maps.event.addListener(marker7, 'click', function() {
                    infowindow7.open(map,marker7);
                });
            }
            if(lat8.length>0){
                var infowindow8 = new google.maps.InfoWindow({
                    content: lat8_title
                });
                google.maps.event.addListener(marker8, 'click', function() {
                    infowindow8.open(map,marker8);
                });
            }    
            // open marker when google map init
            function initialize() {
                google.maps.event.trigger(marker1, 'click');
            }
            initialize();

            /*
             * The google.maps.event.addListener() event waits for
             * the creation of the infowindow HTML structure 'domready'
             * and before the opening of the infowindow defined styles
             * are applied.
             */
                google.maps.event.addListener(infowindow, 'domready', function () {

                    // Reference to the DIV which receives the contents of the infowindow using jQuery
                    var iwOuter = $('.gm-style-iw');

                    /* The DIV we want to change is above the .gm-style-iw DIV.
                     * So, we use jQuery and create a iwBackground variable,
                     * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
                     */
                    var iwBackground = iwOuter.prev();

                    // Remove the background shadow DIV
                    iwBackground.children(':nth-child(2)').css({'display': 'none'});

                    // Remove the white background DIV
                    iwBackground.children(':nth-child(4)').css({'display': 'none'});

                    // Moves the infowindow 115px to the right.
                    iwOuter.parent().parent().css({left: '10px'});

                    // Moves the shadow arrow // hide
                    iwBackground.children(':nth-child(1)').attr('style', function (i, s) {
                        return s + 'display: none !important;'
                    });

                    // Moves the arrow 76px to the left margin
                    iwBackground.children(':nth-child(3)').attr('style', function (i, s) {
                        return s + 'left: 80px !important; margin-top: -10px; z-index: 0;'
                    });

                    // Changes the desired color for the tail outline.
                    // The outline of the tail is composed of two descendants of div which contains the tail.
                    // The .find('div').children() method refers to all the div which are direct descendants of the previous div.
                    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(255, 255, 255, 0.1) 0px 1px 6px', 'z-index': '1'});

                    // Taking advantage of the already established reference to
                    // div .gm-style-iw with iwOuter variable.
                    // You must set a new variable iwCloseBtn.
                    // Using the .next() method of JQuery you reference the following div to .gm-style-iw.
                    // Is this div that groups the close button elements.
                    var iwCloseBtn = iwOuter.next();

                    // Apply the desired effect to the close button
                    iwCloseBtn.css({
                        opacity: '1',
                        right: '48px', top: '14px',
                        width: '19px', height: '19px',
                        border: '3px solid #ffffff',
                        'border-radius': '17px',
                        'background-color': '#ffffff'
                    });

                    // The API automatically applies 0.7 opacity to the button after the mouseout event.
                    // This function reverses this event to the desired value.
                    iwCloseBtn.mouseout(function () {
                        $(this).css({opacity: '1'});
                    });

                });

            //

        });

    }
}

});

