$(function(){
    function topmenu(args) {
        window.scrollTo(0,1);
        var $topmenu = $('<div id="topmenu">');
        var menuKeys = Object.keys(args.items);


        Object.keys(args.items).forEach(function(item) {
            $topmenu.append($('<span class="menuitem">').text(item));
        });
        $('body')
            .prepend($topmenu);

    }

    topmenu({items: {
        "bibliotek.dk": function() { alert("bib.dk"); },
        "søg": function() { alert("søg"); },
        "lånerstatus": function() { alert("lånerstatus"); },
        /*
        "lånerstatu2": function() { alert("lånerstatus"); },
        "lånerstatu3": function() { alert("lånerstatus"); },
        "lånerstatu4": function() { alert("lånerstatus"); },
        "lånerstatu5": function() { alert("lånerstatus"); },
        "lånerstatu6": function() { alert("lånerstatus"); },
        "lånerstatu7": function() { alert("lånerstatus"); },
        */
    }});

    function searchResults(material, query) {
        //$.mobile.changePage("#searchresultpage");
        $("#searchresultquery").text(query);
        $('#numhits').text("");
        $("#searchresults").html("");
        $(document).unbind("scroll");

        var pos = 0;

        function update() {
            $(document).unbind("scroll", onScreen);
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
                            .append(XXX = '<div class="bibentries">' + entries.map(function(entry) { 
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
                                    if ($(this).offset().top < window.pageYOffset) {
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
                    $(document).bind("scroll", onScreen);
                    $("#searchResultsLoading").bind("click", update);
                    onScreen();
                } else {
                    $("#searchResultsLoading").html("");
                }
            }});
        }

        function onScreen() {
            if ($("#searchResultsLoading").offset() && $("#searchResultsLoading").offset().top <
                    window.innerHeight*2 + window.pageYOffset) {
                update();
            }
        }
        $(document).bind("scroll", onScreen);
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
