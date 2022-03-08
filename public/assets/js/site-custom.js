$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.header-main').addClass('fixed-header');
    } else {
        $('.header-main').removeClass('fixed-header');
    }
});
window.onload = function () {
    var themeClr = $.cookie('theme-color');
    if (themeClr !== undefined && themeClr != '') {
        $('body').removeClass(themeClr);
    }
    $('body').removeClass('theme-defalt');
    $('body').addClass(themeClr);
     var c = $.cookie('mode');
     var btn = $.cookie('mode-btn');
     if(btn=='dark'){
        $('#dark_mode').addClass('active');
        $('#light_mode').removeClass('active');
     }else if(btn==='light'){
        $('#dark_mode').removeClass('active');
        $('#light_mode').addClass('active');
    }
    $('body').addClass(c);
    if (document.readyState == "complete") {
        $('.loader-images img').attr("src", "");
        $('.loader-images img').attr("src", "assets/images/loader.gif");
        $('body').addClass('loaded');
    }
};
$(document).ready(function () {
    $("li.mega-menu-dropdown").click(function () {
        if ($(this).hasClass("active")) {
            $('li.mega-menu-dropdown').removeClass('active');
        } else {
            $('li.mega-menu-dropdown').removeClass('active');
            $(this).addClass('active');
        }
    });
    $(".switch-button").click(function () {
        $(".switched-styles").addClass("show");
        $(".switch-button").addClass("hide");
    });
    $(".hide-button").click(function () {
        $(".switched-styles").removeClass("show");
        $(".switch-button").removeClass("hide");
    });
    $('.list-unstyled li').click(function () {
        var c = $.cookie('theme-color');
        if (c !== undefined && c != '') {
            $('body').removeClass(c);
        }
        $('body').removeClass('theme-defalt');
        var clr = $(this).attr('class');
        $('body').addClass(clr);
        $.cookie('theme-color', clr);
    });
    $("#dark_mode").click(function(){
        var clr='dark-mode';
        $('body').removeClass('light-mode');
        $('#light_mode').removeClass('active');
        $('#dark_mode').addClass('active');
        $.cookie('mode-btn', 'dark');
        $('body').addClass(clr);
        $.cookie('mode', clr);
    });
    $("#light_mode").click(function(){
        var clr='light-mode';
        $('body').removeClass('dark-mode');
        $('#light_mode').addClass('active');
        $('#dark_mode').removeClass('active');
        $.cookie('mode-btn', 'light');
        $('body').addClass(clr);
        $.cookie('mode', clr);
    });
    $(".feature-blog-slider").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 0,
        center: false,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },

            768: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });
    $(".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
    $(".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
});
/* scroll top */
var btn = $('#page-up');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
/* scroll top */