define(['require', 'exports', 'underscore'], function(require, exports) {
    var _ = require('underscore');

    // client id at scraped web service, used for validation
    var cid;

    // Reservations, loaded at login-time
    var reservations;

    exports.reservations = function() {
        return Array.isArray(reservations) ? reservations : {error: 'not logged in / reservations not initialised'};
    };

    function parseStatus(html) {
                reservations = [];
                _($(html).find('.reservation')).each(function(elem) {
                    var $elem = $(elem);
                    reservations.push({
                        title: $elem.find('.itemTitle').text(),
                        id: $elem.find('[name="itemId"]').attr('value')
                    });
                    console.log(elem);
                });
    };


    // # Login to webservice
    // Parameters are encoded in object and should contain the following properties: 
    // `user` bibliotek.dk username for login, 
    // `password` bibliotek.dk password for login,
    // `callback` function to be called when logged in.
    // If an error occur during login, then the parameter callback function will
    // contain an `error` property.
    exports.login = function login(args) {
        $.ajax({
            url: 'https://m.bibliotek.dk/custom/bibliotek_dk/access.jsp?go=25447841&cid=', 
            data: { 
                usr: args.user,
                psw: args.password
            }, 
            dataType: 'html',
            type: 'POST',
            success: function(resultHtml) { 
                cid = $(resultHtml).find('[name="cid"]').attr('value');

                if(!cid) {
                    args.callback({error: 'no cid'});
                    return;
                } 
                if(resultHtml.indexOf('Mine l&#229;n:') === -1) {
                    cid = undefined;
                    args.callback({error: 'not logged in'});
                    return;
                } 
                parseStatus(resultHtml);
                args.callback({
                    reservations: reservations
                });
            },
            error: function(a) {
                args.callback({error: 'could not connect to remote service'});
            }
        });
    };

    exports.search = function search(args) {
        if(!cid) {
            setTimeout(args.callback({error: 'not logged in'}), 0);
            return;
        }
        $.ajax({
            url: 'https://m.bibliotek.dk/c.jsp',
            data: {
                cid: cid,
                q: args.query,
                filter: args.filter || 'all'
            },
            dataType: 'html',
            type: 'GET',
            success: function(resultHTML) {
                var results = [];

                _($('<div>'+resultHTML).find('.searchResultWrap')).each(function(elem) {
                    var $elem = $(elem);
                    var result = {};
                    result.Titel = $elem.find('h2').text();
                    result.Forfatter = $elem.find('.coolmenu').text().trim();
                    result.Materiale = $elem.find('img').attr('alt');
                    result.BestillingsId = $elem.find('[name="item"]').attr('value');
                    result.Beskrivelse = $elem.find('.description').text();
                    _($elem.find('li')).each(function(elem) {
                        var text = $(elem).text();
                        var pos = text.indexOf(': ');
                        result[text.slice(0, pos)] = text.slice(pos+2, text.length);
                    });
                    results.push(result);
                });
                args.callback(results);
            },
            error: function() {
                args.callback({error: 'could not connect to remote service'});
            }
      });
    }

    // # Transform JSON-encoded DKABM-xml to straight JSON
    function processDKABM(xml) {
        var results = [];
        xml.forEach(function(dkabm) {
            dkabm = dkabm.record;
            var result = {};
            Object.keys(dkabm).forEach(function(key){
                if(key.charAt(0) !== '@') 
                dkabm[key].forEach(function(value){
                    var newkey = key;
                    if(value["@type"]) {
                        newkey = value["@type"].$ + " " + newkey;
                    }
                    if(!result[newkey]) {
                        result[newkey] = [];
                    }
                    result[newkey].push(value.$);
                });
            });
            results.push(result);
        });
        return results;
    }

    // # Call the webservice
    exports.oldsearch = function oldsearch(args) {
        // Parameter validation
        if(!args.callback) {
            throw "Callback parameter missing";
        }
        if(!args.cql) {
            callback({error: "query missing"});
            return;
        }
        // default values
        var count = args.count || 10;
        var start = (args.start || 0) + 1; // workaround that the webservice uses 1-based indexing
        // save callback in closure, as we are using it later at dont want to depend on args-structure.
        var callback = args.callback;

        // send the request using jquery
        // TODO: independence of jquery
        $.ajax({
            url: 'http://opensearch.addi.dk/2.0/',
            data: {
                action: 'search',
                query: args.cql,
                start: start,
                stepValue: count,
                outputType: 'json'},
            dataType: 'jsonp',
            success: function (result) {
                callback({
                    hitCount: result.searchResponse.result.hitCount.$,
                    start: start-1, // workaround that the webservice uses 1-based indexing
                    collections: result.searchResponse.result.hitCount.$ === 0 ? [] : result.searchResponse.result.searchResult.map(function(elem) { return processDKABM(elem.collection.object); })
                });
            }});
    }
});
