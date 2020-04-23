/* Template Name: Invoza - Bootstrap 4 Landing Page Tamplate
   Author: Themesdesign
   File Description: Main JS file of the template
*/


! function($) {
    "use strict";

    var Invoza = function() {};

    Invoza.prototype.initTypedJs = function() {
        new Typed('.profession', {
            strings: ["I'm a Hybrid Mobile App Developer.", "I'm a Blockchain Developer.", "I bet on Javascript."],
            typeSpeed: 90,
            smartBackspace: true,
            loop: true
        });
    },

    Invoza.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    Invoza.prototype.initSmoothLink = function() {
        $('.navbar a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 800, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Invoza.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },


    Invoza.prototype.init = function() {
        feather.replace();

        this.initTypedJs();
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
    },
    //init
    $.Invoza = new Invoza(), $.Invoza.Constructor = Invoza;
}(window.jQuery),


//initializing
function($) {
    "use strict";
    $.Invoza.init();
}(window.jQuery);
