function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}
window.onload = function () {
    var themeClr = $.cookie('theme-color');
    if (themeClr !== undefined && themeClr != '') {
        // $('body').removeClass(themeClr);
        $('body').removeClass('theme-defalt');
    }
    var darkmode = $.cookie('dark-mode');
    if (darkmode == 'on') {
        $('body').addClass('dark-mode');
        $("#theme-change").prop("checked", true);

    } else {
        $('body').removeClass('dark-mode');
        $("#theme-change").prop("checked", false);
    }
    $('body').addClass(themeClr);
    if (document.readyState == "complete") {
        $('.loader-images img').attr("src", "");
        $('.loader-images img').attr("src", "assets/images/loader.gif");
        $('body').addClass('loaded');
    }

};
$(document).ready(function () {
    $('.lang-select').click(function () {

        var theLang = $(this).attr('data-lang');
        // $('.goog-te-combo').val(theLang);

        var domain = window.location.hostname;
        $.cookie('lang', theLang, {
            path: '/',
            domain: domain
        });

        if (theLang == 'en') {
            console.log("reset for en========================================");
            $.removeCookie('googtrans', {
                path: '/'
            });
            $.removeCookie('googtrans', {
                path: '/',
                domain: domain
            });
            $.removeCookie('googtrans', {
                path: '/',
                domain: '.' + domain
            });
        }
        window.location = $(this).attr('href');
        location.reload();
    });
    $('.color-li a').click(function () {
        var c = $.cookie('theme-color');
        if (c !== undefined && c != '') {
            $('body').removeClass(c);
        }
        var clr = $(this).attr('class');
        if(clr !='theme-defalt'){
            $('body').removeClass('theme-defalt');
        }
        $('body').addClass(clr);
        $.cookie('theme-color', clr);
    });
    $('#theme-change').click(function () {
        var c = $.cookie('theme-color');
            if (c !== undefined && c != '' ) {
                if(c !='theme-defalt'){
                $('body').removeClass('theme-defalt');
            }
        }
        if ($(this).prop("checked") == true) {
            $.cookie('dark-mode', 'on');
            $('body').addClass('dark-mode');
        } else if ($(this).prop("checked") == false) {
            $.cookie('dark-mode', 'off');
            $('body').removeClass('dark-mode');
        }
    });
    $(".user-top-detail").click(function () {
        $(".profile-dropdown").toggle("fast", function () {});
    });
    $(".menu-responsive").click(function () {
        $(".header-nav-menu > ul").toggle("fast", function () {});
    });
    $(".notification-box").click(function () {
        $(".notification-dropdown").toggle("fast", function () {});
    });
    $('.wallet-language-box .dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.wallet-language-box .dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $(".toggle-button").click(function () {
        $(".color-switcher").toggleClass("active");
    });
    $('.dropdown-menu li').on('click', function() {
      var getValue = $(this).html();
      $('.dropdown-select').html(getValue);
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
});