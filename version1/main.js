(function() {
    var util = window.util = {};

    util.initTransitions = function() {
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

    util.transitionTo = function(elem, transitionType) {
        window.scrollTo(0,1);
        var $prev = $('.currentVisible');
        var $current = $(elem);
        if($prev[0] === $current[0]) {
            return;
        }

        $bottomfiller = $($('#bottomfiller')[0] || $('<div id="bottomfiller">'));
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

    util.topmenu = function(args) {
        var $topmenu = $($('#topmenu')[0] || '<div id="topmenu">');
        var menuKeys = Object.keys(args.items);
        
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
})();

(function() {
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
})();

$(function(){
    util.initTransitions();
    util.transitionTo("#frontpage", 'fadein');
    $(window).bind('scroll', function() {
        if($(window).scrollTop() === 0) {
            scrollTo(0, 1);
        }
    });

    //router.init(); // breaks on android
    util.topmenu({items: {
        "bibliotek.dk": function() { util.transitionTo("#frontpage", 'slideout'); },
        "søg": function() { alert("søg"); },
        "lånerstatus": function() { alert("lånerstatus"); }
        /*
        "lånerstatu2": function() { alert("lånerstatus"); },
        "lånerstatu3": function() { alert("lånerstatus"); },
        "lånerstatu4": function() { alert("lånerstatus"); },
        "lånerstatu5": function() { alert("lånerstatus"); },
        "lånerstatu6": function() { alert("lånerstatus"); },
        "lånerstatu7": function() { alert("lånerstatus"); },
        */
    }});
    
    var scrollcallback;
    function bindScroll(fn) {
        if(scrollcallback) {
            unbindScroll();
        }
        $(window).bind("scroll", fn);
        scrollcallback = fn;
    }
    function unbindScroll() {
        if(scrollcallback) {
            $(window).unbind("scroll", scrollcallback);
            scrollcallback = undefined;
        }
    }

    function searchResults(material, query) {
        util.transitionTo("#searchresultpage");
        $("#searchresultquery").text(query);
        $('#numhits').text("");
        $("#searchresults").html("");
        unbindScroll();

        var pos = 0;

        function update() {
            unbindScroll();

            $("#searchResultsLoading").unbind("click touch", update);
            $("#searchResultsLoading").html("loading...");
            var moreHits = true;
            bibdk.search({cql: query, start: pos, count: 6, callback: function(result) {
                $('#numhits').text("Fundet " + result.hitCount + " poster:");
                result.collections.map(function(entries) { 
                    $('#searchresults').append( 
                        $('<div class="searchresult">')
                            .append($('<div class="title">').text(entries[0].title && entries[0].title[0]))
                            .append($('<div class="author">').text((entries[0].creator || entries[0]["oss:aut creator"] || entries[0]["dkdcplus:aut creator"] || [""]).join(" & ")))
                            .append('<div class="bibentries">' + entries.map(function(entry) { 
                                    var acc = [];
                                    acc.push('<div class="bibentry"><table>');
                                    Object.keys(entry).forEach(function(key) {
                                        entry[key].forEach(function(value) {
                                            acc.push('<tr><th>');
                                            acc.push(key);
                                            acc.push('</th><td>');
                                            acc.push(value);
                                            acc.push('</td></tr>');
                                        });
                                    });
                                    acc.push('</table></div>');
                                    return acc.join('');
                                }).join('') + '</div>')
                            .bind('click touch', function() {
                                var $prop = $(this).find(".bibentries");
                                if($prop.css('height') === "0px") {
                                    $prop.css('height', 'auto');
                                    var newheight = $prop.height();
                                    $prop.css('height', newheight+'px');
                                } else {
                                    if ($(this).offset().top < $(window).scrollTop()) {
                                        window.scrollTo(0, $(this).offset().top - 60); 
                                    }
                                    $prop.css('height', '0px');
                                }
                            })
                    );
                });

                pos += 6;
                if(pos < result.hitCount) {
                    $("#searchResultsLoading").html("Klik her for flere resultater.");
                    bindScroll(onScreen);
                    $("#searchResultsLoading").bind("click touch", update);
                    onScreen();
                } else {
                    $("#searchResultsLoading").html("");
                }
            }});
        }

        function onScreen() {
            //console.log('onScreen', $("#searchResultsLoading").offset() && $("#searchResultsLoading").offset().top, $(window).height()*2 +$(window).scrollTop());
            if($("#searchResultsLoading").offset() && $("#searchResultsLoading").offset().top <
                    $(window).height()*2 +$(window).scrollTop()) {
                update();
            }
        }
        bindScroll(onScreen);
        $("#searchResultsLoading").bind("click touch", update);
        onScreen();
    }

    function searchEventFunction() {
        var material = $('#frontpageSearch input:radio[name=material]:checked').val();
        var query = $('#frontpageSearch input[name=query]').val();
        searchResults(material, query);
        return false;
    }
    $("#frontpageSearch").bind("submit", searchEventFunction);
    //$("#searchbutton").bind("touch", searchEventFunction);
});
