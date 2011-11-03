(function() {
    var util = window.util = {};

    util.initTransitions = function() {
        //$('body').children().css('visibility', 'hidden')
        $('body').append('<div class="currentVisible">');
    }

    function noanimate(elem) {
    }
    function animate(elem) {
        elem.css('-webkit-transition', '400ms');
        elem.css('-moz-transition', '400ms');
        elem.css('transition', '400ms');
    }

    util.transitionTo = function(elem) {
        var $prev = $('.currentVisible');
        var $current = $(elem);
        [$('.prevVisible'),$prev,$current].forEach(noanimate);

        $('.prevVisible')
            .css('visibility', 'hidden')
            .removeClass('prevVisible');

        $prev
            .removeClass('currentVisible')
            .addClass('prevVisible')
            //.css('visibility', 'hidden')
            //.css('background', 'red')
            ;

        $current.addClass('currentVisible')
            .css('position', 'relative')
            .css('top', (-$prev.height()/*+$prev.offset()*/) + 'px')
            .css('left', $(window).width())
            //.css('background', 'green')
            .css('visibility', 'visible')
            ;

        $('body')
            .prepend($current)
            .prepend($prev);

        [$prev,$current].forEach(animate);
        $prev.css('left', -$(window).width());
        $current.css('left', 0);

        console.log($prev.height());
        $current

    }
})();

$(function(){
    util.initTransitions();
    util.transitionTo("#frontpage");
    
    $('body').append($('<pre id="console">'));
    function print(x) {
        $('#console').append(x+'\n');
    }
    function topmenu(args) {
        window.scrollTo(0,1);
        var $topmenu = $('<div id="topmenu">');
        var menuKeys = Object.keys(args.items);

        Object.keys(args.items).forEach(function(item) {
            $topmenu.append($('<span class="menuitem"></span>').text(item));
        });
        $('body').append($topmenu);

    }

    topmenu({items: {
        "bibliotek.dk": function() { alert("bib.dk"); },
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
    
    function bindScroll(fn) {
        $(window).bind("scroll", fn);
    }
    function unbindScroll() {
        $(window).unbind("scroll");
    }

    function searchResults(material, query) {
        //$.mobile.changePage("#searchresultpage");
        util.transitionTo("#searchresultpage");
        $("#searchresultquery").text(query);
        $('#numhits').text("");
        $("#searchresults").html("");
        $(window).unbind("scroll");


        var pos = 0;

        function update() {
            $(window).unbind("scroll");

            $("#searchResultsLoading").unbind("click", update);
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
                            .bind('click', function() {
                                var $prop = $(this).find(".bibentries");
                                if($prop.css('height') === "0px") {
                                    $prop.css('height', 'auto');
                                    var newheight = $prop.height();
                                    $prop.css('height', newheight+'px');
                                } else {
                                    if ($(this).offset().top < $(window).scrollTop()) {
                                        window.scrollTo(0, $(this).offset().top); 
                                    }
                                    $prop.css('height', '0px');
                                }
                            })
                    );
                });

                pos += 6;
                if(pos < result.hitCount) {
                    $("#searchResultsLoading").html("Klik her for flere resultater.");
                    $(window).bind("scroll", onScreen);
                    $("#searchResultsLoading").bind("click", update);
                    onScreen();
                } else {
                    $("#searchResultsLoading").html("");
                }
            }});
        }

        function onScreen() {
            if($("#searchResultsLoading").offset() && $("#searchResultsLoading").offset().top <
                    $(window).height()*2 +$(window).scrollTop()) {
                update();
            }
        }
        $(window).bind("scroll", onScreen);
        $("#searchResultsLoading").bind("click", update);
        onScreen();
    }

    $("#frontpageSearch").submit(function() {
        var material = $('#frontpageSearch input:radio[name=material]:checked').val();
        var query = $('#frontpageSearch input[name=query]').val();
        searchResults(material, query);
        return false;
    });
});
