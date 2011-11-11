var keys = {
    forfatter: 'phrase.creator',
    titel: 'phrase.title',
    emne: 'phrase.subject',
    sprog: 'phrase.language',
    beskrivelse: 'phrase.description',
    materiale: 'phrase.type',
    anyphrase: 'phrase.anyIndexes',
    id: 'phrase.identifier',
    dato: 'phrase.date',
    kilde: 'phrase.source',
    text: 'cql.anyIndexes'
};
var categories = Object.keys(keys);
$(document).ready(function () {

    $("#search_help").html("<small><strong>søg:</strong> " + categories.join(", ") + "</small>");
    var visualSearch = VS.init({
        container: $('#search_box_container'),
        query: '',
        unquotable: [],
        callbacks: {
            search: function (query, searchCollection) {
                var cql = searchCollection.facets().map(function (elem) {
                    var key = Object.keys(elem)[0];
                    return keys[key] + '="' + elem[key].replace('\\', '\\\\').replace('"', '\\"') + '"';
                }).join(" and ");
                $('#search_results').html('<span class="raquo">&raquo;</span> You searched for: <b>' + searchCollection.serialize() + '</b>');
                $.ajax({
                    url: "http://opensearch.addi.dk/2.0/",
                    data: {
                        action: 'search',
                        query: cql,
                        start: 1,
                        stepValue: 10,
                        outputType: 'json'
                    },
                    dataType: 'jsonp',
                    success: function (result) {
                        X = result
                        var html = "<div>Fundet " + result.searchResponse.result.hitCount.$ + " hits.</div>"
                        html += "<div><ul>";
                        result.searchResponse.result.searchResult.map(function (result) {
                            result.collection["object"].map(function (obj) {
                                html += "<li><ul>";
                                Object.keys(obj.record).map(function (key) {
                                    if (key == "@") return "";
                                    html += "<li>" + key + ": " + obj.record[key].map(function (elem) {
                                        return elem.$;
                                    }).join(", ") + "</li>";
                                });
                                html += "</ul></li>";
                            });
                        });
                        html += "</ul></div>";
                        $('#search_results').html(html);
                    }
                })
            },

            valueMatches: function (category, searchTerm, callback) {
                if (keys[category] && keys[category].indexOf("phrase.") === 0) {
                    $.ajax({
                        url: "http://openscan.addi.dk/2.0/",
                        data: {
                            action: 'openScan',
                            field: keys[category],
                            lower: searchTerm.toLowerCase(),
                            limit: 32,
                            outputType: 'json'
                        },
                        dataType: 'jsonp',
                        success: function (result) {
                            X = result;
                            console.log(result);
                            callback(result.scanResponse.term.map(function (x) {
                                return x.name.$;
                            }));
                        }
                    })
                    return;
                }
            },
            facetMatches: function (callback) {
                callback(categories);
            }
        }
    });
    $("input").focus();
});
