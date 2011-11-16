define(['require', 'exports'], function (require, exports) {
    function noanimate(elem) {
        elem.css('-webkit-transition', 'none');
        elem.css('-moz-transition', 'none');
        elem.css('transition', 'none');
    }

    function animate(elem, time) {
        elem.css('-webkit-transition', time + 'ms');
        elem.css('-moz-transition', time + 'ms');
        elem.css('transition', time + 'ms');
    }

    var transitions = {
        slidein: { time: 400,
            next: { left: $(window).width() },
            current: { left: 0 },
            prev: { left: -$(window).width() }
        },
        slideout: {
            time: 400,
            next: { left: -$(window).width() },
            current: { left: 0 },
            prev: { left: $(window).width() }
        },
        fadein: {
            time: 2000,
            next: { opacity: 0 },
            current: { opacity: 1 },
            prev: { opacity: 0 }
        },
        template: {
            time: 1000,
            next: {},
            current: {},
            prev: {}
        }
    };


    exports.init = function (domelement) {
        var $current;
        $current = $('<div class="currentVisible">');
        $(domelement).children().css('visibility', 'hidden');
        $(domelement).append($current);

        var obj = {};
        obj.transitionTo = function (elem, transitionType) {
            var $next = $(elem);
            var $prev;
            
            if($next[0] === $current[0]) {
                return;
            }

            noanimate($current);
            noanimate($next);
            transitionType = transitionType || 'slidein';

            $current
                .css('visibility', 'visible')
                .css(transitions[transitionType].current);

            $next
                .css('position', 'relative')
                .css('top', (-$prev.height()) + 'px')
                .css('visibility', 'visible')
                .css(transitions[transitionType].next);
            
            $(domelement)
                .prepend($current)
                .prepend($prev);

            setTimeout(function () {
                animate($prev, transitions[transitionType].time);
                animate($current, transitions[transitionType].time);
                $current.css(transitions[transitionType].current);
                $prev.css(transitions[transitionType].prev);
                setTimeout(function () {
                    noanimate($prev);
                    noanimate($current);
                    $('body').append($prev);
                    $prev.css('visible', 'hidden');
                    $current.css('top', '0px');
                }, transitions[transitionType].time);
            }, 0);



            $prev.css('visibility', 'hidden');



            window.scrollTo(0, 1);
            var $prev = $('.currentVisible');
            var $current = $(elem);
            if ($prev[0] === $current[0]) {
                return;
            }


            $bottomfiller = $($('#bottomfiller')[0] || $('<div id="bottomfiller">'));
            var bottomheight = Math.max(0, $(window).height() + 61 - $current.height());
            $bottomfiller.css('height', bottomheight);
            $current.append($bottomfiller);

            [$('.prevVisible'), $prev, $current].forEach(noanimate);


            $('.prevVisible')
                .css('visibility', 'hidden')
                .removeClass('prevVisible');

            $prev.removeClass('currentVisible').addClass('prevVisible');

            $current.addClass('currentVisible').css('position', 'relative').css('top', (-$prev.height() /*+$prev.offset()*/ ) + 'px').css('visibility', 'visible');

            $('body').prepend($current).prepend($prev);

            transitionType = transitionType || 'slidein';
            $current.css(transitions[transitionType].next);
            setTimeout(function () {
                animate($prev, transitions[transitionType].time);
                animate($current, transitions[transitionType].time);
                $current.css(transitions[transitionType].current);
                $prev.css(transitions[transitionType].prev);
                setTimeout(function () {
                    noanimate($prev);
                    noanimate($current);
                    $('body').append($prev);
                    $prev.css('visible', 'hidden');
                    $current.css('top', '0px');
                }, transitions[transitionType].time);
            }, 0);

        }
    };
});
