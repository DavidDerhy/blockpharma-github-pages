$(function() {

    $(window).load(function(){
       $('.preloader').fadeOut(500);
    });


    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };



    // Active Spy Scroll (module/navi)
    inScrolling = false;

    $('a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {

                // Lock Spy Scroll
                inScrolling = true;

                var oS = target.offset().top;
                var topBack = 30;
                var top = oS > topBack ? oS - topBack : 0;
                var time = Math.abs($(window).scrollTop() - oS)/50 * 100;

                $('html,body').animate({ scrollTop: top }, time, function(){ inScrolling = false; });

                return false;
            }
        }
    });
});
