! function($) {
    "use strict";

    var Portfolio = function() {};

    Portfolio.prototype.initTypedJs = function() {
        new Typed('.profession', {
            strings: ["I'm a Front End Developer.", "I'm a Blockchain Developer.", "I bet on Javascript."],
            typeSpeed: 90,
            smartBackspace: true,
            loop: true
        });
    },

    Portfolio.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    Portfolio.prototype.initSmoothLink = function() {
        $('.navbar a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 800, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Portfolio.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },


    Portfolio.prototype.init = function() {
        feather.replace();

        this.initTypedJs();
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
    },
    //init
    $.Portfolio = new Portfolio(), $.Portfolio.Constructor = Portfolio;
}(window.jQuery),


//initializing
function($) {
    "use strict";
    $.Portfolio.init();
}(window.jQuery);
