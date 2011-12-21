define(['exports'], function(exports) {
    exports.initTransitions = function() {
        $('body').children().css('visibility', 'hidden');
        $('body').append('<div class="currentVisible">');
    };

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

    exports.transitionTo = function(elem, transitionType) {
        window.scrollTo(0,1);
        var $prev = $('.currentVisible');
        var $current = $(elem);
        if($prev[0] === $current[0]) {
            return;
        }

        var $bottomfiller = $($('#bottomfiller')[0] || $('<div id="bottomfiller">'));
        var bottomheight = Math.max(0, $(window).height() + 61 - $current.height());
        $bottomfiller.css('height', bottomheight);
        $current.append($bottomfiller);

        [$('.prevVisible'),$prev,$current].forEach(noanimate);


        $('.prevVisible')
            .css('visibility', 'hidden')
            .removeClass('prevVisible');

        $prev
            .removeClass('currentVisible')
            .addClass('prevVisible')
            ;

        $current.addClass('currentVisible')
            .css('position', 'relative')
            .css('top', (-$prev.height()/*+$prev.offset()*/) + 'px')
            .css('visibility', 'visible')
            ;

        $('body')
            .prepend($current)
            .prepend($prev);

        transitionType= transitionType|| 'slidein';
        var transitions = {
            slidein: {
                time: 400,
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
                next: { },
                current: { },
                prev: { }
            }
        };

        $current.css(transitions[transitionType].next);
        setTimeout(function() {
            animate($prev, transitions[transitionType].time);
            animate($current, transitions[transitionType].time);
            $current.css(transitions[transitionType].current);
            $prev.css(transitions[transitionType].prev);
            setTimeout(function() {
                noanimate($prev);
                noanimate($current);
                $('body').append($prev);
                $prev.css('visible', 'hidden');
                $current.css('top', '0px');
            }, transitions[transitionType].time);
        }, 0);
    };

    exports.topmenu = function(args) {
        var $topmenu = $($('#topmenu')[0] || '<div id="topmenu">');
        
        Object.keys(args.items).forEach(function(item) {
            $topmenu.append(
                $('<span class="menuitem"></span>')
                    .text(item)
                    .bind('touch click', args.items[item])
                );

        });
        $('body').append($topmenu);
        $topmenu
            .css('position', 'fixed')
            .css('top', 0)
            .css('left', 0);       
    };
});
