define(['router', 'bibdk', 'uitool'], function(router, bibdk, uitool) {
$(function(){
    uitool.initTransitions();
    uitool.transitionTo("#frontpage", 'fadein');
    $(window).bind('scroll', function() {
        if($(window).scrollTop() === 0) {
            scrollTo(0, 1);
        }
    });

    //router.init(); // breaks on android
    uitool.topmenu({items: {
        "bibliotek.dk": function() { uitool.transitionTo("#frontpage", 'slideout'); },
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
        uitool.transitionTo("#searchresultpage");
        $("#searchresultquery").text(query);
        $('#numhits').text("");
        $("#searchresults").html("");
        unbindScroll();

        var pos = 0;

        function update() {
            unbindScroll();

            $("#searchResultsLoading").unbind("click touch", update);
            $("#searchResultsLoading").html("loading...");
            bibdk.search({cql: query, start: pos, count: 6, callback: function(result) {
                if(result.error) {
                    alert('Error: ' + result.error);
                }
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

});
