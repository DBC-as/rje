define(['exports'], function(exports) {
    var router;
    if (typeof exports !== 'undefined') {
        router = exports;
    } else {
        router = {};
    }
    if(typeof window !== 'undefined') {
        window.router = router;
    }
    
    function browserBack() {
        history.back();
        history.back();
    }

    router.history = [];

    function back() {
        router.history.pop();
        var prev = router.history.pop();
        open(prev.name, prev.parameter);
    }
    function forward() {
    }

    function open(name, parameter) {
        router.history.push({
            name: name,
            parameter: parameter
        }); 
    }



    function init() {
        if(history.pushState) {
            history.pushState('prev', 'prev', '#prev'); 
            history.pushState('current', 'current', '#current'); 
            history.pushState('next', 'next', '#next'); 
        } else {
            window.location.hash = "#prev";
            window.location.hash = "#current";
            window.location.hash = "#next";
        }
        history.back();
    
        $(window).bind('hashchange', function() {
            if(window.location.hash === '#prev') {
                history.forward();
                setTimeout(function() {
                    $(window).trigger('backbutton');
                },100);
                router.back();
            };
            if(window.location.hash === '#next') {
                history.back();
                setTimeout(function() {
                    $(window).trigger('forwardbutton');
                },100);
                router.forward();
            }
        });
    }


    router.init = init;
    router.open = open;
    router.back = back;
    router.forward = forward;
    router.browserBack = browserBack;
    router.dispatch = {};
});
